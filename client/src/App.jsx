import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import IntroPage from './pages/IntroPage/IntroPage';
import LandingPage from './pages/LandingPage/LandingPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/intro' element={<IntroPage/>}/>
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </Router>
  );
}

export default App;