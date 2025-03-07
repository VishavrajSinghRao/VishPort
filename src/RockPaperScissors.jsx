import React, { useState } from "react";

// Choices
const choices = ["rock", "paper", "scissors"];

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  // Function to Play Game
  const playGame = (choice) => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const aiChoice = choices[randomIndex];

    setUserChoice(choice);
    setComputerChoice(aiChoice);

    // Game Logic
    if (choice === aiChoice) {
      setResult("It's a Draw! 😐");
    } else if (
      (choice === "rock" && aiChoice === "scissors") ||
      (choice === "paper" && aiChoice === "rock") ||
      (choice === "scissors" && aiChoice === "paper")
    ) {
      setResult("You Win! 🎉");
    } else {
      setResult("You Lose! 😢");
    }
  };

  return (
    <div className="flex flex-col items-center p-6 rounded-lg shadow-md -mt-8 ">
      <h2 className="text-white text-2xl font-bold mb-4">Rock Paper Scissors</h2>

      {/* Choices Buttons */}
      <div className="flex gap-8 mt-5">
        {choices.map((choice) => (
          <button
            key={choice}
            className="bg-gradient-to-r from-white to-black  px-4 py-2 rounded-lg transition"
            onClick={() => playGame(choice)}
          >
            {choice.charAt(0).toUpperCase() + choice.slice(1)}
          </button>
        ))}
      </div>

      {/* Display Choices & Result */}
      {userChoice && (
        <div className="mt-4 text-white text-lg">
          <p>You Chose: <b>{userChoice}</b></p>
          <p>Computer Chose: <b>{computerChoice}</b></p>
          <p className="font-bold mt-2 text-yellow-300">{result}</p>
        </div>
      )}
    </div>
  );
};

export default RockPaperScissors;
