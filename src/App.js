import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Identification from './Pages/Identification/Identification';
import StartingPage from './Pages/StartingPage/StartingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<StartingPage />} />
        <Route path='Identification' element={<Identification />} />
      </Routes>
    </Router>
  );
}

export default App;
