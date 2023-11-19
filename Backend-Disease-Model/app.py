from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os
import numpy as np
import tensorflow as tf
from keras.models import load_model
from keras.preprocessing import image

app = Flask(__name__)
CORS(app, resources={r"/predict": {"origins": "*","supports_credentials": True}})

vclass_names = ['Apple___Apple_scab', 'Apple___Black_rot', 'Apple___Cedar_apple_rust', 'Apple___healthy',
                'Blueberry___healthy', 'Cherry_(including_sour)___Powdery_mildew', 'Cherry_(including_sour)___healthy',
                'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot', 'Corn_(maize)__Common_rust',
                'Corn_(maize)___Northern_Leaf_Blight', 'Corn_(maize)___healthy', 'Grape___Black_rot',
                'Grape__Esca(Black_Measles)', 'Grape__Leaf_blight(Isariopsis_Leaf_Spot)', 'Grape___healthy',
                'Orange__Haunglongbing(Citrus_greening)', 'Peach___Bacterial_spot', 'Peach___healthy',
                'Pepper,bell__Bacterial_spot', 'Pepper,bell__healthy', 'Potato___Early_blight', 'Potato___Late_blight',
                'Potato___healthy', 'Raspberry___healthy', 'Soybean___healthy', 'Squash___Powdery_mildew',
                'Strawberry___Leaf_scorch', 'Strawberry___healthy', 'Tomato___Bacterial_spot', 'Tomato___Early_blight',
                'Tomato___Late_blight', 'Tomato___Leaf_Mold', 'Tomato___Septoria_leaf_spot',
                'Tomato___Spider_mites Two-spotted_spider_mite', 'Tomato___Target_Spot',
                'Tomato___Tomato_Yellow_Leaf_Curl_Virus', 'Tomato___Tomato_mosaic_virus', 'Tomato___healthy']

MODEL_PATH = 'Models/plant_disease_detector_mobilenet.h5'
model = load_model(MODEL_PATH)

model.make_predict_function()


def model_predict(img_path, model):
    img = image.load_img(img_path, target_size=(224, 224))
    img_array = image.img_to_array(img)
    img_array_expanded_dims = np.expand_dims(img_array, axis=0)
    x = tf.keras.applications.mobilenet.preprocess_input(img_array_expanded_dims)
    preds = model.predict(x)
    pred_class = vclass_names[np.argmax(preds)]
    return pred_class


@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    basepath = os.path.dirname(__file__)
    upload_dir = os.path.join(basepath, 'uploadImages')

    if not os.path.exists(upload_dir):
        os.makedirs(upload_dir)

    file_path = os.path.join(upload_dir, secure_filename(file.filename))
    file.save(file_path)

    prediction = model_predict(file_path, model)
    print(jsonify({'prediction': prediction}))
    return jsonify({'prediction': prediction})


if __name__ == "__main__":
    app.run(debug=True,host="0.0.0.0",port=5000)
