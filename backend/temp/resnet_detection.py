from tensorflow.keras.preprocessing import image
import numpy as np
import keras
import tensorflow as tf

def predict_elephant_resnet(img_path,model_path):
    model = tf.keras.models.load_model(model_path, compile=False)
    model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
    
    class_labels = {0: 'Ekadhantha', 1: 'Kadol', 2: 'Kamani', 3: 'Kiriya', 4: 'Komali', 5: 'Mahaweli', 6: 'Mathali', 7: 'Meena', 8: 'Neela', 9: 'Rajini', 10: 'Sandali', 11: 'Shanthi', 12: 'Sumedhe'}
    # Load an image for prediction
    img = image.load_img(img_path, target_size=(224, 224))  # Target size should match the model input size
    # img = image.load_img((os.path.join(os.path.dirname(__file__), img_path)), target_size=(224, 224))  # Target size should match the model input size

    # Convert the image to a NumPy array and preprocess it
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
    img_array = tf.keras.applications.resnet.preprocess_input(img_array)  # Apply ResNet50 preprocessing

    # Make predictions
    predictions = model.predict(img_array)

    # Get the top 5 predicted classes and their confidences
    top_classes = np.argsort(predictions[0])[-5:][::-1]
    top_confidences = predictions[0][top_classes]


    top_classes_names = [class_labels[idx] for idx in top_classes]

    top_predictions = []

    # Print the top 5 predictions and their confidences
    for i in range(5):
        print(f"Top {i+1} Prediction: {top_classes_names[i]}, Confidence: {top_confidences[i]:.4f}")
        top_predictions.append([top_classes_names[i],top_confidences[i]])

    top_predictions_serializable = [[name, float(confidence)] for name, confidence in top_predictions]

    return top_predictions_serializable
