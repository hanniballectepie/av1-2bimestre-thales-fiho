import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SnackListPage from './pages/SnackListPage';
import CreateSnackPage from './pages/CreateSnackPage';
import EditSnackPage from './pages/EditSnackPage';
import SnackDetailsPage from './pages/SnackDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import './index.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lanches" element={<SnackListPage />} />
        <Route path="/novo-lanche" element={<CreateSnackPage />} />
        <Route path="/editar-lanche/:id" element={<EditSnackPage />} />
        <Route path="/lanche/:id" element={<SnackDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
