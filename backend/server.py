from flask import Flask , jsonify 
from flask_cors import CORS

from Functions.fileuploads import configure_file_uploads, upload_image
from Functions.testfunc import get_animal_names

app = Flask(__name__)
CORS(app) 

# Configure file uploads
configure_file_uploads(app)

# Add the file upload route
@app.route('/api/uploadimage', methods=['POST'])
def handle_upload_image():
    return upload_image()

@app.route('/')
def hello():
    return 'Hello from Flask!'

@app.route('/api/animal_names')
def animal_names_route():
    animal_names = get_animal_names()  
    return jsonify({"animal_names": animal_names})

if __name__ == '__main__':
    app.run(debug=True)
