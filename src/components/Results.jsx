import React, { useContext } from 'react'
import { QuizContext } from '../context/QuizContext'
import { Link } from 'react-router-dom'

const Results = () => {
    const { currentQuiz, answer } = useContext(QuizContext)

    const correctAnswers = []
    for (let i = 0; i < currentQuiz.length; i++) {
        correctAnswers.push(currentQuiz[i].answer)
    }
    const score = answer.reduce((acc, answer, index) => (
        answer === correctAnswers[index] ? acc + 1 : acc
    ), 0);

    return (
        <div className='flex h-screen items-center justify-center'>
            <div className='bg-white w-1/5 drop-shadow-2xl rounded-md md:w-3/5 lg:w-2/5'>
                <p className='text-center my-3'><span className='font-semibold text-lg'>Your Score:</span> {score * 10}</p>
                <p className='text-center my-3'><span className='font-semibold text-lg'>Total Score:</span> {currentQuiz.length * 10}</p>
                <div className='my-5'>
                    <p className='text-center my-2'><Link to='/review'><span className='text-blue-500'>Click here</span> </Link> for Review Answers</p>
                    <p className='text-center my-2'><Link to='/'><span className='text-blue-500'>Click here</span> </Link> for go back</p>
                </div>
            </div >
        </div>
    )
}

export default Results
