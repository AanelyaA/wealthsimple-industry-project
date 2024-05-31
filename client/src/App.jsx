import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import IntroPage from "./pages/IntroPage/IntroPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import InvestProfile from "./components/InvestProfile/InvestProfile";
import PersonalisedQuestionnaire from "./components/PersonalisedQuestionnaire/PersonalisedQuestionnaire";
import QuizList from "./components/QuizList/QuizList";
import ScaleQuestionnaire from "./components/ScaleQuestionnaire/ScaleQuestionnaire";
import "./App.scss";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/welcome1" element={<ScaleQuestionnaire />} />
          <Route path="/welcome2" element={<PersonalisedQuestionnaire />} />
          <Route path="/quizzes" element={<QuizList />} />
          <Route path="/rewards" element={<InvestProfile />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
