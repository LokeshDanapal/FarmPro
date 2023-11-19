from flask import Flask, request, jsonify
from flask_cors import CORS
from keras.models import load_model
from keras.preprocessing import image
import numpy as np
import os

os.environ['CUDA_VISIBLE_DEVICES'] = '-1'

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes in the app

# Define your class labels
class_labels = {
    0: 'Clay loam',
    1: 'Clay soil',
    2: 'Loam',
    3: 'Loamy Sand',
    4: 'Peat',
    5: 'Sandy Clay Loam',
    6: 'Sandy clay',
    7: 'Sandy-Loam',
    8: 'Silt Loam',
    9: 'Silty Clay loam',
    10: 'Silty clay soil'
}

# Load your pre-trained model with compile=False
model = load_model('Model/farmex.h5', compile=False)

@app.route('/predict_soil', methods=['POST'])
def predict():
    try:
        # Get the uploaded image file
        uploaded_file = request.files['image']

        # Ensure that an image file was uploaded
        if uploaded_file.filename != '':
            # Save the uploaded file to a temporary location
            temp_file_path = 'temp_image.jpg'
            uploaded_file.save(temp_file_path)

            # Load and preprocess the image
            img = image.load_img(temp_file_path, target_size=(100, 100))
            img_array = image.img_to_array(img)
            img_array = np.expand_dims(img_array, axis=0)
            img_array /= 255.0  # Normalize the image

            # Make a prediction using your model
            prediction = model.predict(img_array)

            # Convert the prediction to a class label
            predicted_class = np.argmax(prediction)

            result = {'class': class_labels[predicted_class]}

            # Delete the temporary file
            os.remove(temp_file_path)

            return jsonify(result)

        else:
            return jsonify({'error': 'No file uploaded'})

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True,port=4000)
