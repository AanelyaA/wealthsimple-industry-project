import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InvestProfile from './components/InvestProfile/InvestProfile';
import Quiz from './components/QuizList/QuizList';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* <Route path="/" element={<HomePage />} /> */}
                    {/* <Route path="/login" element={<Login />} /> */}
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/" element={<InvestProfile />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;