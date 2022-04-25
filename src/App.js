import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Identification from './Pages/Identification/Identification';
import StartingPage from './Pages/StartingPage/StartingPage';
import CovidPolicy from './Pages/Covid-Policy/CovidPolicy';
import Vaccinated from './Pages/Vaccinated/Vaccinated';
import { FormContextProvider } from './context/form-context';
import Covid from './Pages/Covid/Covid';

function App() {
  return (
    <FormContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<StartingPage />} />
          <Route path='/Identification' element={<Identification />} />
          <Route path='/Covid' element={<Covid />} />
          <Route path='/Vaccinated' element={<Vaccinated />} />
          <Route path='/Covid-Policy' element={<CovidPolicy />} />
        </Routes>
      </Router>
    </FormContextProvider>
  );
}

export default App;
