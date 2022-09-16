import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/App.scss';
import Calendar from './components/Calendar/Calendar';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Hello World!</h1>} />
        <Route path='/calendar' element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

