export default function ModalDelete({ snack, isOpen, isLoading, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
        <div className="text-center">
          <p className="text-5xl mb-4">🗑️</p>
          <h2 className="text-2xl font-bold mb-2 text-dark">Confirmar Exclusão</h2>
          <p className="text-gray-600 mb-6">
            Tem certeza que deseja deletar <span className="font-semibold text-orange">{snack?.nome}</span>?
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Esta ação não pode ser desfeita.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onCancel}
            disabled={isLoading}
            className="btn-secondary flex-1 disabled:opacity-50"
          >
            ❌ Cancelar
          </button>
          <button
            onClick={onConfirm}
            disabled={isLoading}
            className="btn-danger flex-1 disabled:opacity-50"
          >
            {isLoading ? '⏳ Deletando...' : '🗑️ Deletar'}
          </button>
        </div>
      </div>
    </div>
  );
}
