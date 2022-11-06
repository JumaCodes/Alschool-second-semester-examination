import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Login from './pages/Login';
import Service from './pages/Service';
import Contact from './pages/Contact';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import UserState from './context/UserState';
import Footer from './components/Footer';
import Error from './pages/Error';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  
  return (
    
    <div className="app">
      <UserState>
        <div className="header">
          <Header />
        </div>

        <div className="main__container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/gallery' element={<ErrorBoundary><Gallery /></ErrorBoundary>} />
              <Route path='/login' element={<Login />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/services' element={<Service />} />
              <Route path='/error' element={<Error />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
        </div>

        <Footer />
      </UserState>
    </div>
  );
}

export default App;
