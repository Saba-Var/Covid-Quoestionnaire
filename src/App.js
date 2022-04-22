import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Identification from './Pages/Identification/Identification';
import StartingPage from './Pages/StartingPage/StartingPage';
import Covid from './Pages/Covid/Covid';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<StartingPage />} />
        <Route path='/Identification' element={<Identification />} />
        <Route path='/Covid' element={<Covid />} />
      </Routes>
    </Router>
  );
}

export default App;
