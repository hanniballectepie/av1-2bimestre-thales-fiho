import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { snackService } from '../services/api';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SnackTable from '../components/SnackTable';
import SearchBar from '../components/SearchBar';
import ModalDelete from '../components/ModalDelete';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

export default function SnackListPage() {
  const navigate = useNavigate();
  const [snacks, setSnacks] = useState([]);
  const [filteredSnacks, setFilteredSnacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [snackToDelete, setSnackToDelete] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const categories = [
    'Hambúrguer Tradicional',
    'Cheeseburger',
    'X-Burger',
    'X-Salada',
    'X-Bacon',
    'X-Egg',
    'X-Tudo',
    'Smash Burger',
    'Hambúrguer Artesanal',
    'Hambúrguer Gourmet',
    'Hambúrguer Vegetariano',
    'Hambúrguer Vegano',
    'Hambúrguer de Frango',
    'Hambúrguer de Costela',
    'Hambúrguer Duplo',
    'Hambúrguer Triplo',
    'Sanduíche Natural',
    'Sanduíche de Presunto e Queijo',
    'Sanduíche de Peito de Peru',
    'Misto Quente',
    'Beirute',
    'Wrap Frio',
  ];

  useEffect(() => {
    loadSnacks();
  }, []);

  const loadSnacks = async () => {
    try {
      setLoading(true);
      const response = await snackService.getAll();
      setSnacks(response.data.data);
      setFilteredSnacks(response.data.data);
    } catch (err) {
      setError('Erro ao carregar lanches');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (searchTerm) => {
    try {
      const response = await snackService.search(searchTerm);
      setFilteredSnacks(response.data.data);
    } catch (err) {
      setError('Erro ao pesquisar');
      setFilteredSnacks([]);
    }
  };

  const handleFilter = async (category) => {
    try {
      if (!category) {
        setFilteredSnacks(snacks);
      } else {
        const response = await snackService.getByCategory(category);
        setFilteredSnacks(response.data.data);
      }
    } catch (err) {
      setError('Erro ao filtrar');
      setFilteredSnacks([]);
    }
  };

  const handleDeleteClick = (snack) => {
    setSnackToDelete(snack);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    if (!snackToDelete) return;

    setDeletingId(snackToDelete.id);
    try {
      await snackService.delete(snackToDelete.id);
      setSnacks(snacks.filter(s => s.id !== snackToDelete.id));
      setFilteredSnacks(filteredSnacks.filter(s => s.id !== snackToDelete.id));
      setShowDeleteModal(false);
      setSnackToDelete(null);
    } catch (err) {
      setError('Erro ao deletar lanche');
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {error && <ErrorMessage message={error} onClose={() => setError(null)} />}

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* Título e Botão */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-dark">📋 Catálogo de Lanches</h1>
          <button
            onClick={() => navigate('/novo-lanche')}
            className="btn-primary text-lg px-6 py-3"
          >
            ➕ Novo Lanche
          </button>
        </div>

        {/* SearchBar */}
        <SearchBar onSearch={handleSearch} onFilter={handleFilter} categorias={categories} />

        {/* Snacks */}
        <SnackTable
          snacks={filteredSnacks}
          onEdit={(id) => navigate(`/editar-lanche/${id}`)}
          onDelete={handleDeleteClick}
          onView={(id) => navigate(`/lanche/${id}`)}
        />
      </main>

      <Footer />

      {/* Modal Delete */}
      <ModalDelete
        snack={snackToDelete}
        isOpen={showDeleteModal}
        isLoading={deletingId === snackToDelete?.id}
        onConfirm={handleDeleteConfirm}
        onCancel={() => {
          setShowDeleteModal(false);
          setSnackToDelete(null);
        }}
      />
    </div>
  );
}
