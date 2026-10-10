// export default function BuyerDashboard() {
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Buyer Dashboard</h1>
//       <p className="text-gray-600">Overview of your purchasing activities.</p>
//     </div>
//   );
// }


"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  MapPin,
  Package,
  Plus,
  ShoppingCart,
  TrendingUp,
  Truck,
  Users,
} from "lucide-react";

const stats = [
  {
    title: "Active Requirements",
    value: "8",
    description: "+2 this week",
    icon: ClipboardIcon,
  },
  {
    title: "Smart Matches",
    value: "24",
    description: "94% avg. match",
    icon: CheckCircle2,
  },
  {
    title: "Active Orders",
    value: "6",
    description: "3 arriving soon",
    icon: Package,
  },
  {
    title: "Total Procurement",
    value: "₹4.8L",
    description: "+18% this month",
    icon: TrendingUp,
  },
];

const matches = [
  {
    product: "Fresh Tomatoes",
    supplier: "Green Valley FPO",
    quantity: "500 kg",
    price: "₹28/kg",
    location: "Nashik, Maharashtra",
    match: 96,
  },
  {
    product: "Onions",
    supplier: "Maharashtra Farmers Group",
    quantity: "800 kg",
    price: "₹24/kg",
    location: "Pune, Maharashtra",
    match: 92,
  },
  {
    product: "Potatoes",
    supplier: "Kisan Samruddhi FPO",
    quantity: "1,200 kg",
    price: "₹21/kg",
    location: "Satara, Maharashtra",
    match: 89,
  },
];

const orders = [
  {
    id: "KN-2026-1048",
    product: "Fresh Tomatoes",
    supplier: "Green Valley FPO",
    quantity: "500 kg",
    amount: "₹14,000",
    status: "In Transit",
    date: "12 Sep 2026",
  },
  {
    id: "KN-2026-1041",
    product: "Onions",
    supplier: "Maharashtra Farmers Group",
    quantity: "800 kg",
    amount: "₹19,200",
    status: "Confirmed",
    date: "14 Sep 2026",
  },
  {
    id: "KN-2026-1035",
    product: "Potatoes",
    supplier: "Kisan Samruddhi FPO",
    quantity: "1,200 kg",
    amount: "₹25,200",
    status: "Delivered",
    date: "08 Sep 2026",
  },
];

function ClipboardIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V2h6v2" />
      <path d="M9 9h6" />
      <path d="M9 13h6" />
    </svg>
  );
}

export default function BuyerDashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="flex flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="text-sm font-medium text-green-600">
              Buyer Dashboard
            </p>

            <h1 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">
              Good morning, Buyer 👋
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage procurement, discover suppliers and track your orders.
            </p>
          </div>

          <Link
            href="/buyer/requirements/create"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700"
          >
            <Plus className="h-4 w-4" />
            Create Requirement
          </Link>
        </div>
      </header>

      <div className="space-y-8 px-6 py-6 lg:px-8">
        {/* KPI Cards */}
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <Icon className="h-5 w-5" />
                  </div>

                  <ArrowUpRight className="h-4 w-4 text-slate-400" />
                </div>

                <p className="mt-5 text-sm font-medium text-slate-500">
                  {stat.title}
                </p>

                <div className="mt-1 flex items-end gap-2">
                  <p className="text-2xl font-bold text-slate-900">
                    {stat.value}
                  </p>
                </div>

                <p className="mt-1 text-xs font-medium text-green-600">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </section>

        {/* Smart Procurement */}
        <section className="grid gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-600">
                    <BarChart3 className="h-5 w-5" />
                  </div>

                  <h2 className="text-lg font-bold text-slate-900">
                    Smart Matches
                  </h2>
                </div>

                <p className="mt-1 text-sm text-slate-500">
                  AI-ranked produce matching your procurement needs.
                </p>
              </div>

              <Link
                href="/buyer/marketplace"
                className="hidden text-sm font-semibold text-green-600 hover:text-green-700 sm:block"
              >
                View marketplace →
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              {matches.map((item) => (
                <div
                  key={`${item.product}-${item.supplier}`}
                  className="p-6 transition hover:bg-slate-50"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                        <ShoppingCart className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {item.product}
                        </h3>

                        <p className="mt-1 text-sm text-slate-600">
                          {item.supplier}
                        </p>

                        <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-500">
                          <span>{item.quantity}</span>
                          <span>•</span>
                          <span>{item.price}</span>
                          <span>•</span>

                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {item.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-xs font-medium text-slate-500">
                          Match Score
                        </p>

                        <p className="text-lg font-bold text-green-600">
                          {item.match}%
                        </p>
                      </div>

                      <Link
                        href="/buyer/marketplace"
                        className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-green-300 hover:text-green-700"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">
              Procurement Center
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Quickly access your main buying actions.
            </p>

            <div className="mt-6 space-y-3">
              <Link
                href="/buyer/requirements/create"
                className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-green-300 hover:bg-green-50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-700">
                  <Plus className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Create Requirement
                  </p>
                  <p className="text-xs text-slate-500">
                    Tell farmers what you need
                  </p>
                </div>
              </Link>

              <Link
                href="/buyer/marketplace"
                className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-green-300 hover:bg-green-50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <ShoppingCart className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Browse Marketplace
                  </p>
                  <p className="text-xs text-slate-500">
                    Find available produce
                  </p>
                </div>
              </Link>

              <Link
                href="/buyer/orders"
                className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-green-300 hover:bg-green-50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                  <Truck className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Track Orders
                  </p>
                  <p className="text-xs text-slate-500">
                    Monitor your deliveries
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Recent Orders */}
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Recent Orders
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your latest procurement activity.
              </p>
            </div>

            <Link
              href="/buyer/orders"
              className="text-sm font-semibold text-green-600 hover:text-green-700"
            >
              View all →
            </Link>
          </div>

          {/* Desktop */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <th className="px-6 py-4">Order</th>
                  <th className="px-6 py-4">Supplier</th>
                  <th className="px-6 py-4">Quantity</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Delivery</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="text-sm transition hover:bg-slate-50"
                  >
                    <td className="px-6 py-5">
                      <p className="font-semibold text-slate-900">
                        {order.id}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {order.product}
                      </p>
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      {order.supplier}
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      {order.quantity}
                    </td>

                    <td className="px-6 py-5 font-semibold text-slate-900">
                      {order.amount}
                    </td>

                    <td className="px-6 py-5">
                      <StatusBadge status={order.status} />
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      {order.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="divide-y divide-slate-100 md:hidden">
            {orders.map((order) => (
              <div key={order.id} className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-slate-900">
                      {order.id}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {order.product}
                    </p>
                  </div>

                  <StatusBadge status={order.status} />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-xs text-slate-500">Supplier</p>
                    <p className="mt-1 font-medium text-slate-800">
                      {order.supplier}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Amount</p>
                    <p className="mt-1 font-semibold text-slate-900">
                      {order.amount}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Quantity</p>
                    <p className="mt-1 text-slate-700">
                      {order.quantity}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Delivery</p>
                    <p className="mt-1 text-slate-700">
                      {order.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom insight */}
        <section className="rounded-2xl bg-green-700 p-6 text-white shadow-sm md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />

                <p className="text-sm font-semibold text-green-100">
                  Kisan Nexus Intelligence
                </p>
              </div>

              <h2 className="mt-2 text-xl font-bold md:text-2xl">
                Your procurement can save up to 12% through smart aggregation.
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-green-100">
                Kisan Nexus combines farmer supply, buyer requirements and
                logistics intelligence to help you source efficiently.
              </p>
            </div>

            <Link
              href="/buyer/requirements/create"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-50"
            >
              Start Buying
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles = {
    "In Transit": "bg-blue-50 text-blue-700",
    Confirmed: "bg-amber-50 text-amber-700",
    Delivered: "bg-green-50 text-green-700",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${
        styles[status as keyof typeof styles] ??
        "bg-slate-100 text-slate-700"
      }`}
    >
      {status === "In Transit" && <Truck className="h-3.5 w-3.5" />}
      {status === "Confirmed" && <Clock3 className="h-3.5 w-3.5" />}
      {status === "Delivered" && <CheckCircle2 className="h-3.5 w-3.5" />}
      {status}
    </span>
  );
}