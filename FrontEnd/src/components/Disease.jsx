import React, { useState } from "react";
import Axios from "axios";

function Disease() {
  const [image, setImage] = useState(null);
  const [responseText, setResponseText] = useState("");
  const [diseaseDescription, setDiseaseDescription] = useState({
    Description: "",
    Causes: "",
    Prevention: "",
  });

  async function handleDisease() {
    try {
      const formData = new FormData();
      formData.append("file", image);

      const response = await Axios.post("http://localhost:5000/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin":"*"
        },
      });

      // Assuming the response data has a 'prediction' property
      setResponseText(response.data.prediction);
    } catch (error) {
      console.error("Failed to post:", error);
    }
  }

  async function handleDescribeDisease() {
    try {
      const describeResponse = await Axios.post("https://farmpro.onrender.com/api3/disease", {
        disease: responseText,
      });

      // Assuming the response data has 'Description', 'Causes', and 'Prevention' properties
      setDiseaseDescription({
        Description: describeResponse.data.Description,
        Causes: describeResponse.data.Causes,
        Prevention: describeResponse.data.Prevention,
      });
    } catch (error) {
      console.error("Failed to get disease description:", error);
    }
  }

  return (
    <div className="flex justify-center mt-7">
      <div className="bg-slate-200 rounded-xl px-4 py-20 my-14 w-[70%] flex items-center justify-center">
        <div className="w-[40%]">
          <div className="text-center text-4xl homeHeading mb-6">
            How Can I Help You!
          </div>
          <label
            htmlFor="message"
            className="block text-gray-700 text-4xl font-bold mb-2"
          >
            Predict Disease
          </label>
          <div className="flex items-center gap-x-4">
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            <button
              onClick={handleDisease}
              className="text-xl font-bold bg-blue-600 text-yellow-300 p-2 rounded-full shadow-2xl"
            >
              SUBMIT
            </button>
          </div>
          {responseText && (
            <div className="mt-4 text-xl font-bold">
               {responseText}
              <button
                onClick={handleDescribeDisease}
                className="ml-4 text-lg font-bold bg-green-600 text-white p-2 rounded-full shadow-2xl"
              >
                Describe
              </button>
            </div>
          )}
        </div>
        {diseaseDescription.Description && (
          <div className="w-[50%] ml-6">
            <div className="text-4xl font-bold mb-4">Disease Information</div>
            <div className="text-xl font-bold mb-4">
              <span className="text-yellow-600">Description:</span> {diseaseDescription.Description}
            </div>
            <div className="text-xl font-bold mb-4">
              <span className="text-yellow-600">Causes:</span> {diseaseDescription.Causes}
            </div>
            <div className="text-xl font-bold mb-4">
              <span className="text-yellow-600">Prevention:</span> {diseaseDescription.Prevention}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Disease;
