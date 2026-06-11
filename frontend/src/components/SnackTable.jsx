import SnackCard from './SnackCard';

export default function SnackTable({ snacks, onEdit, onDelete, onView }) {
  if (snacks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Nenhum lanche encontrado 😢</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {snacks.map(snack => (
        <SnackCard
          key={snack.id}
          snack={snack}
          onEdit={onEdit}
          onDelete={onDelete}
          onView={onView}
        />
      ))}
    </div>
  );
}
