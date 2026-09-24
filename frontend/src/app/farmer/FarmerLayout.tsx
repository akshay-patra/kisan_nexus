// import Link from 'next/link';

// export default function FarmerLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
//       {/* Sidebar Navigation */}
//       <aside className="w-full md:w-64 bg-green-800 text-white shadow-md shrink-0">
//         <div className="p-4 bg-green-900 font-bold text-xl">Farmer Portal</div>
//         <nav className="p-4 space-y-2 flex flex-col">
//           <Link href="/farmer/dashboard" className="px-4 py-2 hover:bg-green-700 rounded block">Dashboard</Link>
//           <Link href="/farmer/supply" className="px-4 py-2 hover:bg-green-700 rounded block">My Supply</Link>
//           <Link href="/farmer/matches" className="px-4 py-2 hover:bg-green-700 rounded block">Matches</Link>
//           <Link href="/farmer/orders" className="px-4 py-2 hover:bg-green-700 rounded block">Orders</Link>
//           <Link href="/farmer/profile" className="px-4 py-2 hover:bg-green-700 rounded block">Profile</Link>
//         </nav>
//       </aside>

//       {/* Main Content Area */}
//       <div className="flex-1 flex flex-col min-w-0">
//         <header className="bg-white shadow p-4 flex items-center justify-between sticky top-0 z-10">
//           <h1 className="text-xl font-bold text-gray-800">Kisan Nexus</h1>
//           <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Farmer</span>
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
  Bell,
  ChevronDown,
  ClipboardList,
  LayoutDashboard,
  Leaf,
  LogOut,
  MapPin,
  Package,
  PlusCircle,
  Settings,
  ShoppingBag,
  Sparkles,
  UserCircle,
  Users,
} from "lucide-react";

const navigation = [
  {
    label: "Overview",
    href: "/farmer/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "My Supply",
    href: "/farmer/supply",
    icon: Package,
  },
  {
    label: "Add Supply",
    href: "/farmer/supply/add",
    icon: PlusCircle,
  },
  {
    label: "Matches",
    href: "/farmer/matches",
    icon: Sparkles,
  },
  {
    label: "Orders",
    href: "/farmer/orders",
    icon: ShoppingBag,
  },
  {
    label: "Profile",
    href: "/farmer/profile",
    icon: UserCircle,
  },
];

export default function FarmerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#F7FAF5] text-slate-900">

      {/* Desktop Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-slate-200 bg-white lg:flex lg:flex-col">

        {/* Logo */}
        <div className="flex h-20 items-center border-b border-slate-100 px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#12372A]">
              <Leaf className="h-5 w-5 text-emerald-300" />
            </div>

            <div>
              <p className="font-bold text-slate-900">Kisan Nexus</p>
              <p className="text-[10px] font-medium uppercase tracking-wider text-emerald-700">
                Farmer Portal
              </p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-4 py-6">

          <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Workspace
          </p>

          {navigation.map((item) => {
            const Icon = item.icon;

            const active =
              pathname === item.href ||
              (item.href === "/farmer/supply" &&
                pathname.startsWith("/farmer/supply/") &&
                pathname !== "/farmer/supply/add");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                  active
                    ? "bg-emerald-50 text-emerald-800"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <Icon className="h-4.5 w-4.5" />
                {item.label}
              </Link>
            );
          })}

          <div className="my-6 border-t border-slate-100" />

          <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Support
          </p>

          <Link
            href="/"
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            <Users className="h-4.5 w-4.5" />
            Kisan Nexus Home
          </Link>

          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            <Settings className="h-4.5 w-4.5" />
            Settings
          </button>
        </nav>

        {/* Farmer Profile */}
        <div className="border-t border-slate-100 p-4">
          <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
              <UserCircle className="h-6 w-6 text-emerald-700" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-900">
                Ramesh Patil
              </p>
              <p className="text-xs text-slate-500">
                Farmer
              </p>
            </div>

            <button type="button" title="Logout">
              <LogOut className="h-4 w-4 text-slate-400 hover:text-red-600" />
            </button>

          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="lg:pl-64">

        {/* Top Bar */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-5 backdrop-blur sm:px-8">

          <div>
            <p className="hidden text-xs font-medium text-slate-400 sm:block">
              Farmer Workspace
            </p>
            <p className="font-semibold text-slate-900">
              Kisan Nexus
            </p>
          </div>

          <div className="flex items-center gap-3">

            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-emerald-500" />
            </button>

            <div className="hidden items-center gap-2 sm:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100">
                <UserCircle className="h-5 w-5 text-emerald-700" />
              </div>

              <div>
                <p className="text-sm font-semibold">Ramesh Patil</p>
                <p className="text-xs text-slate-500">Farmer</p>
              </div>

              <ChevronDown className="h-4 w-4 text-slate-400" />
            </div>
          </div>
        </header>

        {/* Mobile Navigation */}
        <div className="overflow-x-auto border-b border-slate-200 bg-white lg:hidden">
          <nav className="flex min-w-max gap-1 px-4 py-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium ${
                    active
                      ? "bg-emerald-50 text-emerald-800"
                      : "text-slate-500"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <main>{children}</main>
      </div>
    </div>
  );
}