import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartingPage from './Pages/StartingPage/StartingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<StartingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
