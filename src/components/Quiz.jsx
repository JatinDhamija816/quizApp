import React, { useContext, useState } from 'react';
import { QuizContext } from '../context/QuizContext';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Quiz = () => {
    const navigate = useNavigate();

    const { noOfQuestion, currentQuizTitle, currentQuiz, setAnswers } = useContext(QuizContext);
    const [answer, setAnswer] = useState(() => Array.from({ length: noOfQuestion }, () => ''));
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const length = currentQuiz.length

    const handleAnswerChange = (e) => {
        const updatedAnswers = [...answer];
        updatedAnswers[currentQuestionIndex] = e.target.value;
        setAnswer(updatedAnswers);
    };

    const handleNext = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const handlePrevious = () => {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
    };

    const handleSubmit = () => {
        setAnswers(answer)
        navigate('/result');
    };

    return (
        <div className='h-screen'>
            <Navbar />
            <div className='w-2/5 mx-auto p-5 sm:w-full md:w-4/6 lg:w-3/5'>
                <h1 className='text-2xl font-bold text-center my-5'>{currentQuizTitle}</h1>
                <div className='pb-5 px-10'>
                    <h2 className='font-bold text-xl text-center mb-5'>
                        Question {currentQuestionIndex + 1}: <span className='font-semibold'>{currentQuiz[currentQuestionIndex]?.question}</span>
                    </h2>
                    {
                        currentQuiz[currentQuestionIndex]?.options.map((opt, i) => (
                            <div key={i} className='flex my-3 rounded bg-gray-300 justify-stretch py-1 text-lg drop-shadow hover:drop-shadow-2xl'>
                                <input
                                    type="radio"
                                    className='mr-5 ml-5'
                                    name={`option-${currentQuestionIndex}`}
                                    value={opt}
                                    checked={answer[currentQuestionIndex] === opt}
                                    onChange={handleAnswerChange}
                                />
                                <p className=''>{opt}</p>
                            </div>
                        ))
                    }
                    <div className='w-1/2 mx-auto'>
                        <button className='my-2 py-1 hover:drop-shadow-2xl drop-shadow-lg rounded bg-yellow-700 text-white px-5 w-full' onClick={handlePrevious} disabled={currentQuestionIndex === 0}>Previous</button>

                        {currentQuestionIndex < length - 1 ?
                            <button className='my-2 py-1 hover:drop-shadow-2xl drop-shadow-lg  rounded bg-green-700 text-white px-5 w-full' onClick={handleNext}>Next</button>
                            :
                            <button className='my-2 py-1 hover:drop-shadow-2xl drop-shadow-lg  rounded bg-black text-white px-5 w-full' onClick={handleSubmit}>Submit</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quiz;