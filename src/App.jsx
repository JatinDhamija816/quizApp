import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { QuizProvider } from './context/QuizContext'
import Home from './components/Home/Home'
import Admin from './components/CreateQuiz/Admin'
import QuizTitle from './components/CreateQuiz/QuizTitle'
import CreateQuiz from './components/CreateQuiz/CreateQuiz'
import Quiz from './components/Quiz'
import Results from './components/Results'
import Review from './components/Review'

const App = () => {
  return (
    <div className='bg-gradient-to-t from-slate-300 to-slate-500'>
      <QuizProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin_login' element={<Admin />} />
          <Route path='/quiz_title' element={<QuizTitle />} />
          <Route path='/create_quiz' element={<CreateQuiz />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/result' element={<Results />} />
          <Route path='/review' element={<Review />} />
        </Routes>
      </QuizProvider>
    </div>
  )
}

export default App