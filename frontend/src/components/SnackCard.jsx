export default function SnackCard({ snack, onEdit, onDelete, onView }) {
  return (
    <div className="card hover:scale-105 transition-transform">
      <div className="relative mb-4">
        <img
          src={snack.imagem || 'https://via.placeholder.com/300x200?text=Sem+Imagem'}
          alt={snack.nome}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="absolute top-3 right-3 bg-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
          R$ {snack.preco.toFixed(2)}
        </div>
        <div className="absolute top-3 left-3">
          {snack.disponivel ? (
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Disponível
            </span>
          ) : (
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Indisponível
            </span>
          )}
        </div>
      </div>

      <h3 className="text-lg font-bold text-dark mb-1">{snack.nome}</h3>
      <p className="text-amber text-sm mb-2">{snack.categoria}</p>
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{snack.descricao}</p>

      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-500 text-sm">🔥 {snack.calorias} cal</span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onView(snack.id)}
          className="btn-secondary btn-sm flex-1 text-sm"
        >
          👁️ Ver
        </button>
        <button
          onClick={() => onEdit(snack.id)}
          className="btn-primary btn-sm flex-1 text-sm"
        >
          ✏️ Editar
        </button>
        <button
          onClick={() => onDelete(snack.id)}
          className="btn-danger btn-sm flex-1 text-sm"
        >
          🗑️ Del
        </button>
      </div>
    </div>
  );
}
