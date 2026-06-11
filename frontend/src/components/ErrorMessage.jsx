export default function ErrorMessage({ message, onClose }) {
  return (
    <div className="fixed top-4 right-4 bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-4 animate-slide-in">
      <span>⚠️</span>
      <div>
        <p className="font-semibold">Erro</p>
        <p className="text-sm">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="ml-4 text-white hover:bg-red-600 px-3 py-1 rounded transition-colors"
      >
        ✕
      </button>
    </div>
  );
}
