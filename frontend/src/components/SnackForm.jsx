import { useState } from 'react';

export default function SnackForm({ initialData, onSubmit, isLoading }) {
  const [formData, setFormData] = useState(initialData || {
    nome: '',
    categoria: '',
    descricao: '',
    ingredientes: '',
    preco: '',
    imagem: '',
    calorias: '',
    disponivel: true,
  });

  const categorias = [
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="card max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-dark">
        {initialData ? '✏️ Editar Lanche' : '➕ Novo Lanche'}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-dark mb-2">Nome *</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-dark mb-2">Categoria *</label>
          <select
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            className="input-field"
            required
          >
            <option value="">Selecione uma categoria</option>
            {categorias.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-dark mb-2">Descrição *</label>
          <textarea
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            className="input-field resize-none"
            rows="3"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-dark mb-2">Ingredientes *</label>
          <textarea
            name="ingredientes"
            value={formData.ingredientes}
            onChange={handleChange}
            className="input-field resize-none"
            rows="3"
            placeholder="Separe por vírgula"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-dark mb-2">Preço (R$) *</label>
          <input
            type="number"
            name="preco"
            value={formData.preco}
            onChange={handleChange}
            className="input-field"
            step="0.01"
            min="0"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-dark mb-2">Calorias *</label>
          <input
            type="number"
            name="calorias"
            value={formData.calorias}
            onChange={handleChange}
            className="input-field"
            min="0"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-dark mb-2">URL da Imagem</label>
          <input
            type="url"
            name="imagem"
            value={formData.imagem}
            onChange={handleChange}
            className="input-field"
            placeholder="https://exemplo.com/imagem.jpg"
          />
        </div>

        <div className="md:col-span-2 flex items-center gap-3">
          <input
            type="checkbox"
            name="disponivel"
            id="disponivel"
            checked={formData.disponivel}
            onChange={handleChange}
            className="w-4 h-4 cursor-pointer"
          />
          <label htmlFor="disponivel" className="text-sm font-semibold text-dark cursor-pointer">
            Disponível para venda
          </label>
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <button
          type="submit"
          disabled={isLoading}
          className="btn-primary flex-1 disabled:opacity-50"
        >
          {isLoading ? '⏳ Salvando...' : '✅ Salvar'}
        </button>
        <a href="/lanches" className="btn-secondary flex-1 text-center">
          ❌ Cancelar
        </a>
      </div>
    </form>
  );
}
