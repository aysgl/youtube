
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style/style.scss'
import Home from './Home';
import Header from './components/Header';
import VideoDetail from './pages/VideoDetail';
import Results from './pages/Results';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/watch/:id' element={<VideoDetail />} />
        <Route path='/results' element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
