/*
 * Project Name: React Quiz App
 * Author: Taylor Lee
 * Last modified: October 14th, 2022
 * Desc: You will build a simple React quiz app where users can click on option buttons to answer questions,
 * next question rendered each time option is selected and at the end, the final score is displayed.
*/

import React, { useState } from 'react';

//These are the querstions used for the app
export default function App() {
	const questions = [
		//Question 1
		{
			questionText: 'In what year did Hawaii become a state?',
			answerOptions: [
				{ answerText: '1776', isCorrect: false },
				{ answerText: '1959', isCorrect: true },
				{ answerText: '1853', isCorrect: false },
				{ answerText: '1893', isCorrect: false },
			],
		},
		//Question 2
		{
			questionText: 'Who created the fictional superhero Batman?',
			answerOptions: [
				{ answerText: 'Bob Kane', isCorrect: true },
				{ answerText: 'Stan Lee', isCorrect: false },
				{ answerText: 'Guy Pierce', isCorrect: false },
				{ answerText: 'Ted Money', isCorrect: false },
			],
		},
		//Question 3
		{
			questionText: 'Which day is Hawaiian Indepdence Day?',
			answerOptions: [
				{ answerText: 'July 4th', isCorrect: false },
				{ answerText: 'May 30th', isCorrect: false },
				{ answerText: 'November 28th', isCorrect: true},
				{ answerText: 'January 3rd', isCorrect: false},
			],
		},
    	//Question 4
		{
			questionText: 'What is the highest grossing movie of all time?',
			answerOptions: [
				{ answerText: 'Titanic', isCorrect: false },
				{ answerText: 'Avengers: Endgame', isCorrect: false },
				{ answerText: 'The Passion of the Christ', isCorrect: false },
				{ answerText: 'Avatar', isCorrect: true },
			],
		},
		
		//Question 5
		{
			questionText: 'What is the highest grossing videogame of all time?',
			answerOptions: [
				{ answerText: 'Minecraft', isCorrect: false },
				{ answerText: 'Pac-Man', isCorrect: true },
				{ answerText: 'Fornite', isCorrect: false },
				{ answerText: 'Tetris', isCorrect: false },
			],
		},
    
		//Question 6
		{
			questionText: 'The Nation of Hawaii was willingly annexed by the United States.',
			answerOptions: [
				{ answerText: 'True', isCorrect: false },
				{ answerText: 'False', isCorrect: true },
        { answerText: 'Hawaii was never annexed.', isCorrect: false },
				{ answerText: 'The United States freed The Nation of Hawaii.', isCorrect: false },
			],
		},
    
		//Question 7
		{
			questionText: 'Who invented the lightbulb?',
			answerOptions: [
				{ answerText: 'Nikola Tesla', isCorrect: false },
				{ answerText: 'Thomas Edison', isCorrect: false },
				{ answerText: 'Dr. Strangelove', isCorrect: false },
				{ answerText: 'Various Scientists', isCorrect: true },
			],
		},
    
		//Question 8
		{
			questionText: 'What is a Wendigo?',
			answerOptions: [
				{ answerText: 'A part of an automobile', isCorrect: false },
				{ answerText: 'A location', isCorrect: false },
				{ answerText: 'A mythological creature', isCorrect: true },
				{ answerText: 'A human cannibal', isCorrect: false },
			],
		},
	];

	//The constants that set, change, and save the questions data.
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	//The return function that runs the app.
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
};