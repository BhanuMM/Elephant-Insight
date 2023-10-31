from flask_uploads import UploadSet, configure_uploads, IMAGES
from flask import request, jsonify
from werkzeug.utils import secure_filename
import os

uploads = UploadSet("uploads", IMAGES)

def configure_file_uploads(app):
    app.config["UPLOADED_UPLOADS_DEST"] = "Functions/testu"
    app.config["UPLOADED_UPLOADS_ALLOW"] = IMAGES
    configure_uploads(app, uploads)

def upload_image(app):
    if 'file' not in request.files:
        return jsonify({"error": "No file part"})

    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"})

    # if file:
    #     filename = uploads.save(file)
    #     return jsonify({"message": "File uploaded successfully", "filename": filename})
    if file:
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOADED_UPLOADS_DEST'], filename))
        return {"message": "File uploaded successfully", "filename": filename}

    return {"error": "Upload failed"}