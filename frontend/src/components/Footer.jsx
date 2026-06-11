export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Hamburgueria Thales</h3>
            <p className="text-gray-400">Sistema profissional de gestão de lanches para hamburgueria.</p>
          </div>
          <div>
            <h4 className="text-amber font-semibold mb-3">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-amber transition-colors">Home</a></li>
              <li><a href="/lanches" className="hover:text-amber transition-colors">Lanches</a></li>
              <li><a href="/novo-lanche" className="hover:text-amber transition-colors">Novo Lanche</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-amber font-semibold mb-3">Contato</h4>
            <p className="text-gray-400">📧 contato@hamburgueriathales.com</p>
            <p className="text-gray-400">📞 (11) 9999-9999</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Hamburgueria Thales. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
