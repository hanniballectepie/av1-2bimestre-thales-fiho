import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { snackService } from '../services/api';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

export default function SnackDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [snack, setSnack] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadSnack();
  }, [id]);

  const loadSnack = async () => {
    try {
      const response = await snackService.getById(id);
      setSnack(response.data.data);
    } catch (err) {
      setError('Erro ao carregar lanche');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  if (!snack) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <ErrorMessage message="Lanche não encontrado" onClose={() => navigate('/lanches')} />
        </main>
        <Footer />
      </div>
    );
  }

  const ingredientsList = snack.ingredientes.split(',').map(ing => ing.trim());

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {error && <ErrorMessage message={error} onClose={() => setError(null)} />}

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <button
          onClick={() => navigate('/lanches')}
          className="mb-6 text-orange hover:text-orange/80 font-semibold"
        >
          ← Voltar
        </button>

        <div className="card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Imagem */}
            <div>
              <img
                src={snack.imagem || 'https://via.placeholder.com/400x400?text=Sem+Imagem'}
                alt={snack.nome}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Informações */}
            <div>
              <div className="mb-4">
                <span className="inline-block bg-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {snack.categoria}
                </span>
                {snack.disponivel ? (
                  <span className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold ml-2">
                    ✅ Disponível
                  </span>
                ) : (
                  <span className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold ml-2">
                    ❌ Indisponível
                  </span>
                )}
              </div>

              <h1 className="text-4xl font-bold text-dark mb-4">{snack.nome}</h1>

              <div className="mb-6">
                <p className="text-gray-600 text-lg mb-4">{snack.descricao}</p>
              </div>

              {/* Preço e Calorias */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-orange/10 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm mb-1">Preço</p>
                  <p className="text-3xl font-bold text-orange">R$ {snack.preco.toFixed(2)}</p>
                </div>
                <div className="bg-amber/10 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm mb-1">Calorias</p>
                  <p className="text-3xl font-bold text-amber">🔥 {snack.calorias}</p>
                </div>
              </div>

              {/* Ingredientes */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-dark mb-3">Ingredientes:</h3>
                <div className="flex flex-wrap gap-2">
                  {ingredientsList.map((ing, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 text-dark px-3 py-1 rounded-full text-sm"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Data */}
              <div className="text-sm text-gray-500 mb-6 border-t pt-4">
                <p>Criado em: {new Date(snack.createdAt).toLocaleDateString('pt-BR')}</p>
                <p>Atualizado em: {new Date(snack.updatedAt).toLocaleDateString('pt-BR')}</p>
              </div>

              {/* Ações */}
              <div className="flex gap-3">
                <button
                  onClick={() => navigate(`/editar-lanche/${snack.id}`)}
                  className="btn-primary flex-1"
                >
                  ✏️ Editar
                </button>
                <button
                  onClick={() => navigate('/lanches')}
                  className="btn-secondary flex-1"
                >
                  ← Voltar
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
