import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-orange mb-4">404</h1>
          <p className="text-2xl text-dark mb-2">Página não encontrada</p>
          <p className="text-gray-600 mb-8">A página que você está procurando não existe.</p>
          <button
            onClick={() => navigate('/')}
            className="btn-primary text-lg px-8 py-3"
          >
            ← Voltar para Home
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
