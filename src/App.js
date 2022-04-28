import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormContextProvider } from 'state/form-context';
import {
  Covid,
  Vaccinated,
  CovidPolicy,
  StartingPage,
  Identification,
} from 'pages';

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
