import Link from 'next/link';

export default function FarmerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-green-800 text-white shadow-md shrink-0">
        <div className="p-4 bg-green-900 font-bold text-xl">Farmer Portal</div>
        <nav className="p-4 space-y-2 flex flex-col">
          <Link href="/farmer/dashboard" className="px-4 py-2 hover:bg-green-700 rounded block">Dashboard</Link>
          <Link href="/farmer/supply" className="px-4 py-2 hover:bg-green-700 rounded block">My Supply</Link>
          <Link href="/farmer/matches" className="px-4 py-2 hover:bg-green-700 rounded block">Matches</Link>
          <Link href="/farmer/orders" className="px-4 py-2 hover:bg-green-700 rounded block">Orders</Link>
          <Link href="/farmer/profile" className="px-4 py-2 hover:bg-green-700 rounded block">Profile</Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white shadow p-4 flex items-center justify-between sticky top-0 z-10">
          <h1 className="text-xl font-bold text-gray-800">Kisan Nexus</h1>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Farmer</span>
        </header>
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
