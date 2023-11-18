import React, { useEffect, useState } from "react";
import Axios from "axios";

const Feed = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          "https://gnews.io/api/v4/search?q=agriculture&lang=en&country=in&max=9&apikey=038618d753d6b8b5555c59035d9d635a"
        );
        setItems(response?.data?.articles || []);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch news:", error);
        setItems([]);
        setError("Failed to fetch news. Please try again later.");
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="bg-[#F1EEFF] px-14 rounded-3xl mb-24 py-10 mt-28 h-full mx-28">
      {error && <div className="error-message">{error}</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {items.map((val, index) => (
          <div
            key={index}
            className="card-container"
            style={{ border: "1px solid #ccc", borderRadius: "10px", overflow: "hidden", cursor: "pointer" }}
            onClick={() => handleCardClick(val.url)}
          >
            <img
              src={val.image}
              alt={`News ${index + 1}`}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <div className="card-content p-4">
              <h3 className="text-xl font-bold mb-2">{val.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{val.publishedAt}</p>
              <p className="text-gray-600 text-sm">{val.source.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
