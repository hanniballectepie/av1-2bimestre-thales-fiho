import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { snackService } from '../services/api';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SnackForm from '../components/SnackForm';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

export default function EditSnackPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [snack, setSnack] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
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

  const handleSubmit = async (formData) => {
    setSaving(true);
    try {
      await snackService.update(id, formData);
      navigate('/lanches');
    } catch (err) {
      setError('Erro ao atualizar lanche');
    } finally {
      setSaving(false);
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

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {error && <ErrorMessage message={error} onClose={() => setError(null)} />}

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <SnackForm initialData={snack} onSubmit={handleSubmit} isLoading={saving} />
      </main>

      <Footer />
    </div>
  );
}
