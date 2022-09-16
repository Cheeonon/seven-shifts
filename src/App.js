import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/App.scss';
import Calendar from './components/Calendar/Calendar';
import TraitCompatibility from './components/TraitCompatibility/TraitCompatibility';
import Header from './components/Header/Header';
import TraitsPage from './components/TraitsPage/TraitsPage';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<TraitsPage />} />
          <Route path='/dashboard' element={<TraitsPage />} />
          <Route path='/calendar' element={<Calendar />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}


export default App;