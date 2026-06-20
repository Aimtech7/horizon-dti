import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import CareerPathways from './pages/CareerPathways';
import VirtualLearning from './pages/VirtualLearning';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import SuccessStories from './pages/SuccessStories';
import Resources from './pages/Resources';
import GoetheExam from './pages/GoetheExam';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';

function App() {
  console.log('App rendering');
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <div className="app">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/career-pathways" element={<CareerPathways />} />
                <Route path="/virtual-learning" element={<VirtualLearning />} />
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/success-stories" element={<SuccessStories />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/goethe-exam" element={<GoetheExam />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App
