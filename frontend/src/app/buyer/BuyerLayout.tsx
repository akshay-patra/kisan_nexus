"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import {
  Bell,
  LayoutDashboard,
  ShoppingBag,
  ClipboardList,
  Package,
  UserCircle,
  Plus,
  LogOut,
  Menu,
  PanelLeftClose,
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
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
        <div className="flex h-24 items-center justify-between border-b border-slate-200 px-5">
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
            className="group rounded-xl p-2 text-slate-500 hover:text-green-700 hover:bg-green-50 active:scale-95 transition-all duration-200 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close sidebar panel"
            title="Close sidebar"
          >
            <PanelLeftClose className="h-5 w-5 transition-transform duration-200 group-hover:-translate-x-0.5" />
          </button>
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
                onClick={() => setMobileMenuOpen(false)}
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
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700"
            >
              <Plus className="h-4 w-4" />
              Create Requirement
            </Link>
          </div>
        </nav>

        {/* Bottom / Logout */}
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

      {/* Main Content Area */}
      <div className="flex min-h-screen flex-col lg:pl-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 flex h-16 sm:h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-4 sm:px-8 backdrop-blur">
          {/* Left */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="rounded-lg p-2 -ml-1 text-slate-700 hover:bg-slate-100 lg:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6" />
            </button>

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
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-green-700">
                  Buyer Dashboard
                </p>
              </div>
            </Link>
          </div>

          {/* Right: notification option */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 transition"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-emerald-500" />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}