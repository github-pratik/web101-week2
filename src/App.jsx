import React, { useState } from "react";
import "./App.css";
import { FaArrowRight } from "react-icons/fa";

const flashcards = [
  { question: "Who is known as the father of computers?", answer: "Charles Babbage", category: "Easy" },
  { question: "What does CPU stand for?", answer: "Central Processing Unit", category: "Easy" },
  { question: "Which programming language is known as the mother of all languages?", answer: "C", category: "Medium" },
  { question: "What does HTML stand for?", answer: "HyperText Markup Language", category: "Medium" },
  { question: "What is the full form of HTTP?", answer: "HyperText Transfer Protocol", category: "Medium" },
  { question: "Who invented the World Wide Web (WWW)?", answer: "Tim Berners-Lee", category: "Easy" },
  { question: "What does RAM stand for?", answer: "Random Access Memory", category: "Medium" },
  { question: "Which company developed the Java programming language?", answer: "Sun Microsystems", category: "Hard" },
  { question: "What is the primary function of an operating system?", answer: "Manage hardware and software resources", category: "Hard" },
  { question: "Which data structure follows the LIFO principle?", answer: "Stack", category: "Hard" }
];

const getCategoryColor = (category) => {
  switch (category) {
    case "Easy": return "rgba(144, 238, 144, 0.8)"; // Light Green
    case "Medium": return "rgba(255, 204, 102, 0.8)"; // Light Orange
    case "Hard": return "rgba(255, 102, 102, 0.8)"; // Light Red
    default: return "rgba(221, 221, 221, 0.8)";
  }
};

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setFlipped(false);
  };

  return (
    <div className="app">
      <h1>The Ultimate Computer Test!</h1>
      <p className="subtitle">How good of a computer nerd are you? Test all of your computer knowledge here!</p>
      <p className="card-count">Number of cards: {flashcards.length}</p>

      {/* Color Legend */}
      <div className="color-legend">
          <div className="legend-item">
              <span className="color-box easy"></span> Easy
          </div>
          <div className="legend-item">
              <span className="color-box medium"></span> Medium
          </div>
          <div className="legend-item">
              <span className="color-box hard"></span> Hard
          </div>
      </div>
      <div
        className={`flashcard-container ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
        
      >
        <div className="flashcard" >
          <div className="flashcard-front" style={{ backgroundColor: getCategoryColor(flashcards[currentIndex].category) }}>
            <p>{flashcards[currentIndex].question}</p>
          </div>
          <div className="flashcard-back">
            <p>{flashcards[currentIndex].answer}</p>
          </div>
        </div>
      </div>

      <button className="next-button" onClick={nextCard}>
        <FaArrowRight />
      </button>
    </div>
  );
}

export default App;
