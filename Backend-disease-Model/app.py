from __future__ import division,print_function
import sys
import os
import glob
import re
import numpy as np
import keras
import tensorflow as tf


from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications import imagenet_utils

from keras.applications.imagenet_utils import preprocess_input,decode_predictions
from keras.models import load_model
from keras.preprocessing import image

from flask import Flask, redirect, url_for , request,render_template
from werkzeug.utils import secure_filename
from gevent.pywsgi import WSGIServer

app = Flask(__name__)

vclass_names = ['Apple___Apple_scab',
     'Apple___Black_rot',
     'Apple___Cedar_apple_rust',
     'Apple___healthy',
     'Blueberry___healthy',
     'Cherry_(including_sour)___Powdery_mildew',
     'Cherry_(including_sour)___healthy',
     'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot',
     'Corn_(maize)__Common_rust',
     'Corn_(maize)___Northern_Leaf_Blight',
     'Corn_(maize)___healthy',
     'Grape___Black_rot',
     'Grape__Esca(Black_Measles)',
     'Grape__Leaf_blight(Isariopsis_Leaf_Spot)',
     'Grape___healthy',
     'Orange__Haunglongbing(Citrus_greening)',
     'Peach___Bacterial_spot',
     'Peach___healthy',
     'Pepper,bell__Bacterial_spot',
     'Pepper,bell__healthy',
     'Potato___Early_blight',
     'Potato___Late_blight',
     'Potato___healthy',
     'Raspberry___healthy',
     'Soybean___healthy',
     'Squash___Powdery_mildew',
     'Strawberry___Leaf_scorch',
     'Strawberry___healthy',
     'Tomato___Bacterial_spot',
     'Tomato___Early_blight',
     'Tomato___Late_blight',
     'Tomato___Leaf_Mold',
     'Tomato___Septoria_leaf_spot',
     'Tomato___Spider_mites Two-spotted_spider_mite',
     'Tomato___Target_Spot',
     'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
     'Tomato___Tomato_mosaic_virus',
     'Tomato___healthy']

MODEL_PATH = 'Models\plant_disease_detector_mobilenet.h5'
model = load_model(MODEL_PATH)

model.make_predict_function()
def model_predict(img_path,model):
    img = image.load_img(img_path, target_size=(224, 224))
    img_array = image.img_to_array(img)
    img_array_expanded_dims = np.expand_dims(img_array, axis=0)
    # print(img_array_expanded_dims.shape)
    x = tf.keras.applications.mobilenet.preprocess_input(img_array_expanded_dims)
    preds = tf.nn.softmax(model.predict(x))
    pred_class = vclass_names[np.argmax(preds)]
    print(type(pred_class))
    return pred_class

@app.route('/',methods = ['GET','POST'])
def slash():
    return "Hi"

@app.route('/predict',methods = ['GET','POST'])
def predict():
    if request.method == 'POST':
        f = request.files['file']

        basepath = os.path.dirname(__file__)
        
        # Check the directory structure and paths
        upload_dir = os.path.join(basepath, 'uploadImages')
        if not os.path.exists(upload_dir):
            os.makedirs(upload_dir)
        
        # Construct the full file path
        file_path = os.path.join(upload_dir, secure_filename(f.filename))
        f.save(file_path)
        
        preds = model_predict(file_path, model)
        return preds
    return "Prediction endpoint. Send a POST request with an image file."

if __name__ == "__main__":
    app.run(debug=True)




 