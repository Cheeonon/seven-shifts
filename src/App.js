import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/App.scss';
import Calendar from './components/Calendar/Calendar';
import TraitCompatibility from './components/TraitCompatibility/TraitCompatibility';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Hello World!</h1>} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/trait-compatibility' element={<TraitCompatibility />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;