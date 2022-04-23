import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Identification from './Pages/Identification/Identification';
import StartingPage from './Pages/StartingPage/StartingPage';
import Covid from './Pages/Covid/Covid';
import Vaccinated from './Pages/Vaccinated/Vaccinated';
import CovidPolicy from './Pages/Covid-Policy/CovidPolicy';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<StartingPage />} />
        <Route path='/Identification' element={<Identification />} />
        <Route path='/Covid' element={<Covid />} />
        <Route path='/Vaccinated' element={<Vaccinated />} />
        <Route path='/Covid-Policy' element={<CovidPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
