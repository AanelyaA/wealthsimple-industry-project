import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import IntroPage from './pages/IntroPage/IntroPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<IntroPage/>}/>
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </Router>
  );
}

export default App;