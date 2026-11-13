"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import {
  Bell,
  ChevronDown,
  LayoutDashboard,
  LogOut,
  Menu,
  PanelLeftClose,
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7FAF5] text-slate-900">

      {/* Overlay for mobile */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/50 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-200 bg-white transition-transform duration-300 lg:translate-x-0 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>

        {/* Logo / Brand Header */}
        <div className="flex h-24 items-center justify-between border-b border-slate-100 px-5">
          <Link href="/" className="flex items-center">
            <Image 
              src="/kisan_nexus_sidebar_image.png" 
              alt="Kisan Nexus Logo" 
              width={561}
              height={260}
              priority
              className="h-auto w-auto max-h-19 max-w-46.25 object-contain transition-transform hover:scale-[1.02]" 
            />
          </Link>
          <button 
            type="button"
            className="group rounded-xl p-2 text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 active:scale-95 transition-all duration-200 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close sidebar panel"
            title="Close sidebar"
          >
            <PanelLeftClose className="h-5 w-5 transition-transform duration-200 group-hover:-translate-x-0.5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-4 py-6">

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
                onClick={() => setMobileMenuOpen(false)}
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

      {/* Main Content Area */}
      <div className="flex min-h-screen flex-col lg:pl-64">

        {/* Top Bar */}
        <header className="sticky top-0 z-30 flex h-16 sm:h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-4 sm:px-8 backdrop-blur">

          {/* Left: 3-line menu option, then logo, then our name kisan nexus */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="rounded-lg p-2 -ml-1 text-slate-700 hover:bg-slate-100 lg:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Branding: logo + name + role dashboard (uniform across desktop and responsive) */}
            <Link href="/" className="flex items-center gap-2.5">
              <Image 
                src="/kisan_nexus_web_logo.png" 
                alt="Kisan Nexus Logo" 
                width={36}
                height={36}
                style={{ width: "auto" }}
                className="h-9 w-9 rounded-lg object-cover shadow-xs" 
              />
              <div>
                <p className="text-base font-bold leading-none text-slate-900">
                  Kisan Nexus
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
                  Farmer Dashboard
                </p>
              </div>
            </Link>
          </div>

          {/* Right: notification option, desktop profile */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 transition"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-emerald-500" />
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

        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}