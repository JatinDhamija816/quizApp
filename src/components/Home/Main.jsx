import React, { useContext } from 'react'
import { QuizContext } from '../../context/QuizContext';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate()
    const { quizzes, setCurrentQuiz, setCurrentQuizTitle } = useContext(QuizContext);

    const handleStart = (quizTitle) => {
        const quiz = quizzes.find(q => q.quizTitle === quizTitle);
        setCurrentQuiz(quiz.quiz.questions);
        setCurrentQuizTitle(quiz.quizTitle);
        navigate('/quiz')
    }

    return (
        <div className='w-1/2 mx-auto sm:w-4/5 md:w-full lg:w-4/5'>
            {
                quizzes.length <= 0
                    ?
                    <p className='font-semibold text-xl '>Sorry there is no active quiz</p>
                    :
                    <div className='text-xl pb-10'>
                        {
                            quizzes.map((quiz, index) => (
                                <div className='flex justify-between w-2/3 mx-auto bg-white rounded-lg py-3 px-5 mt-10 drop-shadow-xl hover:drop-shadow-2xl sm:w-full sm:flex-col' key={index}>
                                    <h1 className='capitalize sm:text-center sm:pb-2'>{quiz.quizTitle}</h1>
                                    <div className='sm:flex sm:justify-center'>
                                        <button className='bg-blue-600 px-5 py-1 text-white rounded sm:p-0 sm:w-3/5' onClick={() => handleStart(quiz.quizTitle)}>Start</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
            }
        </div>
    )
}

export default Main