import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { snackService } from '../services/api';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SnackForm from '../components/SnackForm';
import ErrorMessage from '../components/ErrorMessage';

export default function CreateSnackPage() {
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (formData) => {
    setSaving(true);
    try {
      await snackService.create(formData);
      navigate('/lanches');
    } catch (err) {
      setError('Erro ao criar lanche');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {error && <ErrorMessage message={error} onClose={() => setError(null)} />}

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <SnackForm onSubmit={handleSubmit} isLoading={saving} />
      </main>

      <Footer />
    </div>
  );
}
