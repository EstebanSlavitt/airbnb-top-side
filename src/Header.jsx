export function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="flex justify-between">
        <a href="/" className="font-bold text-xl">
          Airbnb Clone
        </a>
        <div>
          <a href="/" className="px-3">
            Home
          </a>
          <a href="/listings" className="px-3">
            Listings
          </a>
        </div>
      </nav>
    </header>
  );
}
