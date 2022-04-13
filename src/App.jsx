//SASS
import './App.scss'

// -----------
import { Routes, Route } from 'react-router-dom';


//Components
import Home from './Pages/Home';
import Conference from './Pages/Conference';
import Articles from './Pages/Articles';
import Journal from './Pages/Journal';
import News from './Pages/News';
import Certificates from './Pages/Certificates';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/conference" element={<Conference />}/>
      <Route path="/articles" element={<Articles />}/>
      <Route path="/journal" element={<Journal />}/>
      <Route path="/news" element={<News />}/>
      <Route path="/certificates" element={<Certificates />}/>
    </Routes>
      <Footer />
    </>
  )
}

export default App;
