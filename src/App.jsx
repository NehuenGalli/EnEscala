import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import AllProjectsPage from './pages/AllProjectsPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import Preloader from './components/Preloader/Preloader';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proyecto/:slug" element={<ProjectDetailPage />} />
          <Route path="/proyectos" element={<AllProjectsPage />} />
          <Route path="/servicio/:slug" element={<ServiceDetailPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
