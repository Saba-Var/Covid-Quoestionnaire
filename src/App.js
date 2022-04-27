import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormContextProvider } from 'context/form-context';
import Identification from 'Pages/Identification';
import StartingPage from 'Pages/StartingPage';
import CovidPolicy from 'Pages/CovidPolicy';
import Vaccinated from 'Pages/Vaccinated';
import Covid from 'Pages/Covid';

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
