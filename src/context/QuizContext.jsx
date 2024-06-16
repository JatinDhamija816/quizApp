import { createContext, useState } from "react";

export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {

    const [quizTitle, setQuizTitle] = useState('')
    const [noOfQuestion, setNoOfQuestion] = useState(0)
    const [quizzes, setQuizzes] = useState(() => {
        const savedQuiz = localStorage.getItem('quizzes')
        return savedQuiz ? JSON.parse(savedQuiz) : []
    })
    const [currentQuizTitle, setCurrentQuizTitle] = useState(null);
    const [currentQuiz, setCurrentQuiz] = useState(null);
    const [answer, setAnswers] = useState([])

    const addTitle = (title) => {
        setQuizTitle(title)
    }

    const totalQuestion = (total) => {
        setNoOfQuestion(total)
    }

    const addQuiz = (quiz) => {
        const updatedQuizzes = [...quizzes, { quizTitle, quiz }];
        setQuizzes(updatedQuizzes);
        localStorage.setItem('quizzes', JSON.stringify(updatedQuizzes));
    }

    return (
        <QuizContext.Provider value={{ addTitle, noOfQuestion, totalQuestion, addQuiz, quizzes, currentQuizTitle, setCurrentQuizTitle, currentQuiz, setCurrentQuiz, answer, setAnswers }}>
            {children}
        </QuizContext.Provider>
    )
}