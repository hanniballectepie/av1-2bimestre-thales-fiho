import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { snackService } from '../services/api';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

export default function HomePage() {
  const [stats, setStats] = useState({ total: 0, available: 0, categories: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const response = await snackService.getAll();
      const snacks = response.data.data;

      const categories = new Set(snacks.map(s => s.categoria)).size;
      const available = snacks.filter(s => s.disponivel).length;

      setStats({
        total: snacks.length,
        available,
        categories,
      });
    } catch (err) {
      setError('Erro ao carregar estatísticas');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {error && <ErrorMessage message={error} onClose={() => setError(null)} />}

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* Hero Section */}
        <div className="card bg-gradient-to-r from-dark to-orange text-white mb-12">
          <div className="text-center py-16">
            <h1 className="text-5xl font-bold mb-4">🍔 Hamburgueria Thales</h1>
            <p className="text-xl text-amber mb-6">Sistema completo de gestão de lanches e hambúrgueres</p>
            <button
              onClick={() => navigate('/lanches')}
              className="btn-primary text-lg px-8 py-3"
            >
              Acessar Cardápio
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="card text-center">
            <div className="text-4xl mb-2">🍽️</div>
            <h3 className="text-gray-600 text-sm font-semibold mb-1">Total de Lanches</h3>
            <p className="text-3xl font-bold text-orange">{stats.total}</p>
          </div>

          <div className="card text-center">
            <div className="text-4xl mb-2">✅</div>
            <h3 className="text-gray-600 text-sm font-semibold mb-1">Disponíveis</h3>
            <p className="text-3xl font-bold text-green-500">{stats.available}</p>
          </div>

          <div className="card text-center">
            <div className="text-4xl mb-2">📂</div>
            <h3 className="text-gray-600 text-sm font-semibold mb-1">Categorias</h3>
            <p className="text-3xl font-bold text-amber">{stats.categories}</p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-dark mb-8 text-center">Funcionalidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '📋', title: 'Listar Lanches', desc: 'Visualize todos os lanches do catálogo' },
              { icon: '➕', title: 'Criar Lanche', desc: 'Adicione novos produtos ao cardápio' },
              { icon: '✏️', title: 'Editar Lanche', desc: 'Atualize informações dos lanches' },
              { icon: '🗑️', title: 'Deletar Lanche', desc: 'Remova lanches do sistema' },
              { icon: '🔍', title: 'Pesquisar', desc: 'Busque lanches por nome' },
              { icon: '🏷️', title: 'Filtrar', desc: 'Organize por categoria' },
            ].map((feature, idx) => (
              <div key={idx} className="card">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-dark">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card bg-amber/10 border-2 border-amber">
          <h3 className="text-2xl font-bold text-dark mb-6">Ações Rápidas</h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate('/lanches')}
              className="btn-primary"
            >
              👁️ Ver Todos os Lanches
            </button>
            <button
              onClick={() => navigate('/novo-lanche')}
              className="btn-secondary"
            >
              ➕ Criar Novo Lanche
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
