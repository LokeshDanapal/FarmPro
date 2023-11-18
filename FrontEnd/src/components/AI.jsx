import React, { useState } from "react";
import Axios from "axios";
import { Link, Outlet } from "react-router-dom";

function AI() {
  // const [image, setImage] = useState(null);
  // const [responseText, setResponseText] = useState("");
  // const [diseaseDescription, setDiseaseDescription] = useState({
  //   Description: "",
  //   Causes: "",
  //   Prevention: "",
  // });

  // async function handleDisease() {
  //   try {
  //     const formData = new FormData();
  //     formData.append("file", image);

  //     const response = await Axios.post("http://localhost:5000/predict", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });

  //     // Assuming the response data has a 'prediction' property
  //     setResponseText(response.data.prediction);
  //   } catch (error) {
  //     console.error("Failed to post:", error);
  //   }
  // }

  // async function handleDescribeDisease() {
  //   try {
  //     const describeResponse = await Axios.post("http://localhost:3001/api3/disease", {
  //       disease: responseText,
  //     });

  //     // Assuming the response data has 'Description', 'Causes', and 'Prevention' properties
  //     setDiseaseDescription({
  //       Description: describeResponse.data.Description,
  //       Causes: describeResponse.data.Causes,
  //       Prevention: describeResponse.data.Prevention,
  //     });
  //   } catch (error) {
  //     console.error("Failed to get disease description:", error);
  //   }
  // }

  return (
    <div>
      <div className="flex justify-center mt-16 gap-x-8">
        <Link to="/ai/disease" className="text-4xl bg-blue-500 p-4 rounded-xl font-bold text-yellow-300">Predict Disease</Link>
        <Link to="/ai/soil" className="text-4xl bg-blue-500 p-4 rounded-xl font-bold text-yellow-300">Predict Soil Texture</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
//className="flex justify-center mt-7"
export default AI;
