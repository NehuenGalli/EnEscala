import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import AllProjectsPage from './pages/AllProjectsPage';
import ServiceDetailPage from './pages/ServiceDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proyecto/:slug" element={<ProjectDetailPage />} />
        <Route path="/proyectos" element={<AllProjectsPage />} />
        <Route path="/servicio/:slug" element={<ServiceDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
