//SASS
import './App.scss'

// -----------
import { Routes, Route } from 'react-router-dom';


//Routes
import Home from './Pages/Home';
import Conference from './Pages/Conference';
import Articles from './Pages/Articles';
import Journal from './Pages/Journal';
import News from './Pages/News';
import Certificates from './Pages/Certificates';
import Footer from './Components/Footer/Footer';
import Contacts from './Pages/Contacts';
import Aboutus from './Pages/Aboutus';
import AboutStaff from './Pages/AboutStaff';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/conference" element={<Conference />}/>
      <Route path="/articles" element={<Articles />}/>
      <Route path="/journal" element={<Journal />}/>
      <Route path="/news" element={<News />}/>
      <Route path="/contacts" element={<Contacts />}/>
      <Route path="/about" element={<Aboutus />}/>
      <Route path="/staffs" element={<AboutStaff />}/>
      <Route path="/certificates" element={<Certificates />}/>
    </Routes>
      <Footer />
    </>
  )
}

export default App;
