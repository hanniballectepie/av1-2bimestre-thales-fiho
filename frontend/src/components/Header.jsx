export default function Header() {
  return (
    <header className="bg-dark text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🍔</div>
            <div>
              <h1 className="text-2xl font-bold">Hamburgueria Thales</h1>
              <p className="text-amber text-sm">Sistema de Gestão de Lanches</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="/" className="hover:text-amber transition-colors">
              Home
            </a>
            <a href="/lanches" className="hover:text-amber transition-colors">
              Lanches
            </a>
            <a href="/novo-lanche" className="hover:text-amber transition-colors">
              Novo Lanche
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
