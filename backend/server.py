from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import os

from Functions.fileuploads import configure_file_uploads, upload_image
from Functions.testfunc import get_animal_names
from resources.automatedpipeline import run_automated_pipeline

app = Flask(__name__)
CORS(app) 

# Configure file uploads
configure_file_uploads(app)

# Add the file upload route
@app.route('/api/uploadimage', methods=['POST'])
def handle_upload_image():
    upload_response = upload_image(app)
    
    if 'error' in upload_response:
        return jsonify({"error server 1": upload_response['error']})
    
    final_results = run_automated_pipeline(upload_response['filename'])
    
    if 'error' in final_results:
        return jsonify({"error server": final_results['error']})
    
    return jsonify({"results": final_results})

@app.route('/api/getimage/<image_filename>', methods=['GET'])
def get_image(image_filename):
    app.config["UPLOADED_FOLDER"] = "resources/runs/detect/exp"
    image_path = os.path.join(app.config['UPLOADED_FOLDER'], image_filename)
    print(image_path)
    return send_file(image_path , )
    
# @app.route('/')
# def hello():
#     return 'Hello from Flask!'

# @app.route('/api/animal_names')
# def animal_names_route():
#     animal_names = get_animal_names()  
#     return jsonify({"animal_names": animal_names})

if __name__ == '__main__':
    app.run(debug=True)
