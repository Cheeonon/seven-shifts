import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/App.scss';
import Calendar from './components/Calendar/Calendar';
import Header from './components/Header/Header';
import TraitsPage from './components/TraitsPage/TraitsPage';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<TraitsPage />} />
        <Route path='/dashboard' element={<TraitsPage />} />
        <Route path='/calendar' element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
