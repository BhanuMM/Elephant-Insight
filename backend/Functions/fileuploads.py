from flask_uploads import UploadSet, configure_uploads, IMAGES
from flask import request, jsonify
from werkzeug.utils import secure_filename
import os
import shutil

uploads = UploadSet("uploads", IMAGES)

def configure_file_uploads(app):
    app.config["UPLOADED_UPLOADS_DEST"] = "resources/data/images"
    app.config["UPLOADED_UPLOADS_ALLOW"] = IMAGES
    configure_uploads(app, uploads)

def upload_image(app):
    if 'file' not in request.files:
        return jsonify({"error": "No file part"})

    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"})

    if file:
        try:
            items = os.listdir("resources/data/images/")
            for item in items:
                item_path = os.path.join("resources/data/images/", item)
                if os.path.isfile(item_path):
                    os.remove(item_path)
            print ("cleared image file ============")
        except Exception as e:
            print(f"An error occurred: {e}")

        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOADED_UPLOADS_DEST'], filename))
        return {"message": "File uploaded successfully", "filename": filename}

    return {"error": "Upload failed"}