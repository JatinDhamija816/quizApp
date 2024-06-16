import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { QuizContext } from '../../context/QuizContext'

const QuizTitle = () => {
    const navigate = useNavigate()

    const [quizTitle, setQuizTitle] = useState('')
    const [noOfQuestion, setNoOfQuestion] = useState('')
    const { addTitle, totalQuestion } = useContext(QuizContext)

    const handleNext = (e) => {
        e.preventDefault()
        addTitle(quizTitle)
        totalQuestion(noOfQuestion)
        navigate('/create_quiz')
    }

    return (
        <div className='flex items-center h-screen justify-center'>
            <form onSubmit={handleNext} className=''>
                <div className='my-5'>
                    <p className='font-bold text-xl my-2'>Quiz Title</p>
                    <input type="text" placeholder='Enter Title ' className='border py-1 px-2 outline-none  font-semibold text-lg rounded' onChange={(e) => setQuizTitle(e.target.value)} value={quizTitle} required />
                </div>
                <div className='my-5'>
                    <p className='font-bold text-xl my-2'>No. of Questions</p>
                    <input type="number" placeholder='Enter Title ' className='border py-1 px-2 outline-none  font-semibold text-lg rounded' onChange={(e) => setNoOfQuestion(e.target.value)} value={noOfQuestion} required />
                </div>
                <div className='my-5'>
                    <button className='bg-blue-500 px-5 py-1 rounded text-white text-lg' type='submit'>Next</button>
                </div>
            </form>
        </div>
    )
}

export default QuizTitle