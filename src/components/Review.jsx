import React, { useContext } from 'react'
import { QuizContext } from '../context/QuizContext'
import Navbar from './Navbar'

const Review = () => {
    const { currentQuiz, answer } = useContext(QuizContext)

    return (
        <div className='h-fit'>
            <Navbar />
            <div className='w-1/2 mx-auto md:w-full lg:w-4/5'>
                <h2 className='font-bold text-2xl text-center '>Review</h2>
                <div className='pb-5'>
                    {
                        currentQuiz.map((quiz, index) => (
                            <div key={index} className='drop-shadow-xl bg-white rounded-md mx-auto w-1/2 px-5 py-3 mt-5'>
                                <p className='font-bold py-1'>Question 1 : <span className='font-medium'>{quiz.question} </span></p>
                                <p className='font-bold py-1' >Your Answer : <span className='font-normal'> {answer[index]}</span></p>
                                <p className='font-bold py-1' >Correct Answer : <span className='font-normal'> {quiz.answer}</span></p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Review