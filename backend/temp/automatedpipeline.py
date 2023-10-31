import os
import shutil
import os

def delete_content(folder_path):
    try:
        # Use shutil.rmtree to remove the entire folder and its contents
        shutil.rmtree(folder_path)
        # Recreate the empty folder
        os.makedirs(folder_path)
    except Exception as e:
        print(f"An error occurred: {e}")



def run_automated_pipeline(image_path):
    try:
        folder_to_clear = os.path.join(os.path.dirname(__file__), "runs/detect")
        delete_content(folder_to_clear)
        print(f"Everything inside {folder_to_clear} has been deleted.")

        # %run detect.py --weights best.pt --img 640 --conf 0.25 --source data/images --save-crop 
        import subprocess

        # Define the command to run the detect.py script
        command = "python resources/detect.py --weights resources/best.pt --img 640 --conf 0.25 --source resources/data/images --save-crop"

        # Run the command in a subprocess
        try:
            subprocess.run(command, shell=True, check=True)
        except subprocess.CalledProcessError as e:
            print(f"An error occurred: {e}")

        spine_path = os.path.join(os.path.dirname(__file__), "runs/detect/exp/crops/spine")
        face_path = os.path.join(os.path.dirname(__file__), "runs/detect/exp/crops/face")
        leftEar_path = os.path.join(os.path.dirname(__file__), "runs/detect/exp/crops/leftEar")
        rightEar_path = os.path.join(os.path.dirname(__file__), "runs/detect/exp/crops/rightEar")
        tail_path = os.path.join(os.path.dirname(__file__), "runs/detect/exp/crops/tail")
        spine_predictions= []
        face_predictions= []
        leftEar_predictions= []
        rightEar_predictions= []
        tail_predictions= []

        total_feature_predictions = []

        from .resnet_detection import predict_elephant_resnet

        if os.path.exists(spine_path) and os.path.isdir(spine_path):
            print('spine')
            print(os.path.dirname(__file__))
            spine_predictions = predict_elephant_resnet(os.path.join(os.path.dirname(__file__), "runs/detect/exp/crops/spine/ele.jpg"), os.path.join(os.path.dirname(__file__), 'elephant-detection-models/spine/best_model.h5'))
            total_feature_predictions.append(spine_predictions)
            for prediction in spine_predictions:
                print(f"Prediction: {prediction[0]}, Confidence: {prediction[1]:.4f}")
            
        if os.path.exists(face_path) and os.path.isdir(face_path):
            print('face')
            face_predictions = predict_elephant_resnet(os.path.join(os.path.dirname(__file__), "runs/detect/exp/crops/face/ele.jpg"), os.path.join(os.path.dirname(__file__), 'elephant-detection-models/face/best_model.h5'))
            total_feature_predictions.append(face_predictions)
            for prediction in face_predictions:
                print(f"Prediction: {prediction[0]}, Confidence: {prediction[1]:.4f}")
            
        if os.path.exists(leftEar_path) and os.path.isdir(leftEar_path):
            print('leftEar')
            leftEar_predictions = predict_elephant_resnet(os.path.join(os.path.dirname(__file__), "runs/detect/exp/crops/leftEar/ele.jpg"), os.path.join(os.path.dirname(__file__), 'elephant-detection-models/leftEar/best_model.h5'))
            total_feature_predictions.append(leftEar_predictions)
            for prediction in leftEar_predictions:
                print(f"Prediction: {prediction[0]}, Confidence: {prediction[1]:.4f}")
            
        if os.path.exists(rightEar_path) and os.path.isdir(rightEar_path):
            print('rightEar')
            rightEar_predictions = predict_elephant_resnet(os.path.join(os.path.dirname(__file__), "runs/detect/exp/crops/rightEar/ele.jpg"), os.path.join(os.path.dirname(__file__), 'elephant-detection-models/rightEar/best_model.h5'))
            total_feature_predictions.append(rightEar_predictions)
            for prediction in rightEar_predictions:
                print(f"Prediction: {prediction[0]}, Confidence: {prediction[1]:.4f}") 
            
        if os.path.exists(tail_path) and os.path.isdir(tail_path):
            print('tail')
            tail_predictions = predict_elephant_resnet(os.path.join(os.path.dirname(__file__), "runs/detect/exp/crops/tail/ele.jpg"), os.path.join(os.path.dirname(__file__), 'elephant-detection-models/tail/best_model.h5'))
            total_feature_predictions.append(tail_predictions)
            for prediction in tail_predictions:
                print(f"Prediction: {prediction[0]}, Confidence: {prediction[1]:.4f}")
            

        result = {}

        # Iterate through all arrays
        for array in total_feature_predictions:
             for name, confidence in array:
                if name in result:
                    result[name] += confidence
                else:
                    result[name] = confidence

        # Convert the dictionary back to a list of pairs
        merged_array = [[name, confidence] for name, confidence in result.items()]

        print(merged_array)
        sorted_merged_array = sorted(merged_array, key=lambda x: x[1], reverse=True)

        print(sorted_merged_array)
        # Calculate the total confidence
        total_confidence = sum(confidence for _, confidence in sorted_merged_array)

        # Calculate the percentages and create a new array
        final_results = [[name, (confidence / total_confidence) * 100] for name, confidence in sorted_merged_array]
        print("+======================= final =====")
        print(final_results)

        return final_results

    except Exception as e:
        return [{'error': str(e)}]
