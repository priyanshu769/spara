import React, { useState } from "react";
import "./Home.css";
import { FaPaintBrush, FaDumbbell, FaBook, FaCouch, FaGamepad } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Home = () => {
  const categories = [
    { name: "Leisure", icon: <FaCouch /> },
    { name: "Muscle", icon: <FaDumbbell /> },
    { name: "Create", icon: <FaPaintBrush /> },
    { name: "Learn", icon: <FaBook /> },
  ];

  const responses = {
    Leisure: ["Watch a movie", "Play a video game", "Take a nap"],
    Muscle: ["Do pushups", "Lift weights", "Go for a run"],
    Create: ["Paint a picture", "Write a story", "Compose a song"],
    Learn: ["Read a book", "Take an online course", "Watch a documentary"],
  };

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [randomResponse, setRandomResponse] = useState(null);

  const handleBoxClick = (category) => {
    const categoryResponses = responses[category];
    const randomIndex = Math.floor(Math.random() * categoryResponses.length);
    setSelectedCategory(category);
    setRandomResponse(categoryResponses[randomIndex]);
  };

  return (
    <div className="home">
    <Link to="/game" className="header-link">
      <FaGamepad /> Game
    </Link>
      <div className="boxes">
        {categories.map(({ name, icon }) => (
          <div
            key={name}
            className="box"
            onClick={() => handleBoxClick(name)}
          >
            {icon} {name}
          </div>
        ))}
      </div>
      {selectedCategory && randomResponse && (
        <div className="response">
          <p>
            From {selectedCategory}: {randomResponse}
          </p>
        </div>
      )}
    </div>
  );
};
