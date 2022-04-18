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
import Pricing from './Pages/Pricing';
import InnerConference from './Pages/InnerConference';
import InnerArticles from './Pages/InnerArticles';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/conference" element={<Conference />}/>
      <Route path="/conference/1" element={<InnerConference />}/>
      <Route path="/articles" element={<Articles />}/>
      <Route path="/articles/1" element={<InnerArticles />}/>
      <Route path="/journal" element={<Journal />}/>
      <Route path="/news" element={<News />}/>
      <Route path="/contacts" element={<Contacts />}/>
      <Route path="/about" element={<Aboutus />}/>
      <Route path="/staffs" element={<AboutStaff />}/>
      <Route path="/certificates" element={<Certificates />}/>
      <Route path="/pricing" element={<Pricing />}/>
    </Routes>
      <Footer />
    </>
  )
}

export default App;
