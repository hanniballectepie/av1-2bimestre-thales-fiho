import { useState } from 'react';

export default function SearchBar({ onSearch, onFilter, categorias }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onFilter(category);
  };

  const handleClear = () => {
    setSearchTerm('');
    setSelectedCategory('');
    onFilter('');
  };

  return (
    <div className="card mb-6">
      <div className="space-y-4">
        <form onSubmit={handleSearch}>
          <div className="flex gap-2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="🔍 Pesquisar por nome..."
              className="input-field flex-1"
            />
            <button type="submit" className="btn-primary">
              🔎 Buscar
            </button>
          </div>
        </form>

        <div className="flex gap-2 items-end">
          <div className="flex-1">
            <label className="block text-sm font-semibold text-dark mb-2">
              Filtrar por Categoria
            </label>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="input-field"
            >
              <option value="">Todas as categorias</option>
              {categorias.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          {(searchTerm || selectedCategory) && (
            <button onClick={handleClear} className="btn-secondary">
              🔄 Limpar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
