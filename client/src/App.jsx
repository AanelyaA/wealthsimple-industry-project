import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import IntroPage from './pages/IntroPage/IntroPage';
import LandingPage from './pages/LandingPage/LandingPage';
import InvestProfile from './components/InvestProfile/InvestProfile';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

import PersonalisedQuestionnaire from './components/PersonalisedQuestionnaire/PersonalisedQuestionnaire'
import QuizList from './components/QuizList/QuizList'


function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/intro' element={<IntroPage/>}/>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/rewards" element={<InvestProfile />} />
      </Routes>
     </div>
    </Router>
  );

  }
export default App;
