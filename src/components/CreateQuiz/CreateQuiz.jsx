import React, { useContext, useState } from 'react'
import { QuizContext } from '../../context/QuizContext'
import Navbar from '../Navbar'
import { useNavigate } from 'react-router-dom'

const CreateQuiz = () => {
    const navigate = useNavigate()

    const { noOfQuestion, addQuiz } = useContext(QuizContext)
    const [questions, setQuestions] = useState(
        Array.from({ length: noOfQuestion }, () => ({
            question: '',
            options: ['', '', '', ''],
            answer: ''
        }))
    )

    const handleQuestionChange = (index, e) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].question = e.target.value;
        setQuestions(updatedQuestions);
    };

    const handleOptionChange = (questionIndex, optionIndex, e) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].options[optionIndex] = e.target.value;
        setQuestions(updatedQuestions);
    };

    const handleAnswerChange = (index, e) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].answer = e.target.value;
        setQuestions(updatedQuestions);
    };

    const handleSubmit = () => {
        addQuiz({ questions });
        navigate('/');
    };

    return (
        <div className=''>
            <Navbar />
            <form onSubmit={handleSubmit}>
                {
                    questions.map((q, i) => (
                        <div className=' w-1/4 mx-auto sm:w-4/5 md:w-1/2 lg:w-1/3' key={i}>
                            <div>
                                <div className='w-full mt-10 mb-5 '>
                                    <div className='bg-gray-300 w-full py-1 flex justify-center rounded'>
                                        <label className='font-bold text-lg '>Question {i + 1}</label>
                                    </div>
                                    <input className=' my-2 rounded py-1 w-full outline-none px-3 font-semibold border' placeholder='Question' type="text" value={q.question} onChange={(e) => handleQuestionChange(i, e)} required />
                                </div>
                            </div>

                            <div>
                                {
                                    q.options.map((option, j) => (
                                        <div key={j} className='mb-2'>
                                            <div>
                                                <label className='font-bold text-lg'>Option {j + 1}</label>
                                            </div>
                                            <input className=' my-1 rounded py-1 w-full outline-none px-3 border' type="text" value={option} onChange={(e) => handleOptionChange(i, j, e)} placeholder={`Option ${j + 1}`} required />
                                        </div>
                                    ))
                                }
                            </div>

                            <div>
                                <div>
                                    <label className='font-bold text-lg'>Correct Answer</label>
                                </div>
                                <input className=' my-2 rounded py-1 w-full outline-none px-3 border' type="text" placeholder="Correct Answer" value={q.answer} onChange={(e) => handleAnswerChange(i, e)} required />
                            </div>
                        </div>
                    ))
                }
                <div className='flex justify-center py-5'>
                    <button className='border px-5 rounded-md py-2 text-white bg-black sm:w-4/5 md:w-1/2 w-1/5' type='submit'>Create Quiz</button>
                </div>
            </form>
        </div>
    )
}

export default CreateQuiz