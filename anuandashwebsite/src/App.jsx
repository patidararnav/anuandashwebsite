import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Shows from './pages/Shows';
import Listen from './pages/Listen';
import Follow from './pages/Follow';
import About from './pages/About';
import Contact from './pages/Contact';
import Merchandise from './pages/Merchandise';
import NotFound from './pages/NotFound';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Anu & Ash | Musical Duo</title>
        <meta name="description" content="Anu & Ash is a musical duo creating beautiful melodies and powerful performances." />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyles />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/listen" element={<Listen />} />
          <Route path="/follow" element={<Follow />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
