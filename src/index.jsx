import './style.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import Welcome from './pages/Welcome';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Welcome />} />
      <Route path="home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
