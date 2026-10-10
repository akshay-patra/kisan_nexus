// import Link from 'next/link';

// export default function BuyerLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
//       {/* Sidebar Navigation */}
//       <aside className="w-full md:w-64 bg-orange-800 text-white shadow-md shrink-0">
//         <div className="p-4 bg-orange-900 font-bold text-xl">Buyer Portal</div>
//         <nav className="p-4 space-y-2 flex flex-col">
//           <Link href="/buyer/dashboard" className="px-4 py-2 hover:bg-orange-700 rounded block">Dashboard</Link>
//           <Link href="/buyer/marketplace" className="px-4 py-2 hover:bg-orange-700 rounded block">Marketplace</Link>
//           <Link href="/buyer/requirements" className="px-4 py-2 hover:bg-orange-700 rounded block">Requirements</Link>
//           <Link href="/buyer/orders" className="px-4 py-2 hover:bg-orange-700 rounded block">Orders</Link>
//           <Link href="/buyer/profile" className="px-4 py-2 hover:bg-orange-700 rounded block">Profile</Link>
//         </nav>
//       </aside>

//       {/* Main Content Area */}
//       <div className="flex-1 flex flex-col min-w-0">
//         <header className="bg-white shadow p-4 flex items-center justify-between sticky top-0 z-10">
//           <h1 className="text-xl font-bold text-gray-800">Kisan Nexus</h1>
//           <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Buyer</span>
//         </header>
//         <main className="flex-1 p-6 overflow-auto">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }





"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingBag,
  ClipboardList,
  Package,
  UserCircle,
  Plus,
  Sprout,
  LogOut,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    href: "/buyer/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Marketplace",
    href: "/buyer/marketplace",
    icon: ShoppingBag,
  },
  {
    name: "My Requirements",
    href: "/buyer/requirements",
    icon: ClipboardList,
  },
  {
    name: "Orders",
    href: "/buyer/orders",
    icon: Package,
  },
  {
    name: "Profile",
    href: "/buyer/profile",
    icon: UserCircle,
  },
];

export default function BuyerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="sticky top-0 hidden h-screen w-64 flex-col border-r border-slate-200 bg-white lg:flex">
          {/* Logo */}
          <div className="flex h-20 items-center gap-3 border-b border-slate-200 px-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white">
              <Sprout className="h-5 w-5" />
            </div>

            <div>
              <h1 className="text-lg font-bold text-slate-900">
                Kisan Nexus
              </h1>
              <p className="text-xs text-slate-500">Buyer Portal</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto space-y-1 px-4 py-6">
            {navigation.map((item) => {
              const Icon = item.icon;

              const active =
                pathname === item.href ||
                pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-green-50 text-green-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}

            {/* Create Requirement */}
            <div className="pt-5">
              <Link
                href="/buyer/requirements/create"
                className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700"
              >
                <Plus className="h-4 w-4" />
                Create Requirement
              </Link>
            </div>
          </nav>

          {/* Bottom */}
          <div className="border-t border-slate-200 p-4">
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-red-50 hover:text-red-600"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </div>
        </aside>

        {/* Main */}
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}