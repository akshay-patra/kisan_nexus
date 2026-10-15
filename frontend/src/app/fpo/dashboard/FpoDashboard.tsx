// export default function FpoDashboard() {
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">FPO Dashboard</h1>
//       <p className="text-gray-600">Overview of FPO activities.</p>
//     </div>
//   );
// }


"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  Layers3,
  Package,
  Plus,
  Sprout,
  Users,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Member Farmers",
    value: "128",
    description: "+12 this month",
    icon: Users,
  },
  {
    title: "Available Supply",
    value: "18.4T",
    description: "Across 24 listings",
    icon: Layers3,
  },
  {
    title: "Active Orders",
    value: "14",
    description: "₹6.8L order value",
    icon: Package,
  },
  {
    title: "Farmer Earnings",
    value: "₹12.4L",
    description: "+16% this month",
    icon: TrendingUp,
  },
];

const aggregations = [
  {
    crop: "Tomatoes",
    farmers: 18,
    quantity: "4,500 kg",
    demand: "4,000 kg",
    match: 96,
    status: "Ready",
  },
  {
    crop: "Onions",
    farmers: 24,
    quantity: "6,800 kg",
    demand: "8,000 kg",
    match: 91,
    status: "Partial",
  },
  {
    crop: "Potatoes",
    farmers: 15,
    quantity: "3,200 kg",
    demand: "3,000 kg",
    match: 89,
    status: "Ready",
  },
];

const orders = [
  {
    id: "FPO-ORD-1048",
    buyer: "FreshMart Retail",
    product: "Tomatoes",
    quantity: "4,000 kg",
    value: "₹1.12L",
    status: "AGGREGATING",
    delivery: "12 Sep 2026",
  },
  {
    id: "FPO-ORD-1041",
    buyer: "Metro Foods",
    product: "Onions",
    quantity: "6,000 kg",
    value: "₹1.44L",
    status: "CONFIRMED",
    delivery: "14 Sep 2026",
  },
  {
    id: "FPO-ORD-1037",
    buyer: "CityFresh",
    product: "Potatoes",
    quantity: "3,000 kg",
    value: "₹63,000",
    status: "DISPATCHED",
    delivery: "11 Sep 2026",
  },
];

export default function FpoDashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="flex flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="text-sm font-medium text-green-600">
              FPO Dashboard
            </p>

            <h1 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">
              Good morning, Kisan Samruddhi 👋
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage your farmers, aggregate supply and fulfill buyer demand.
            </p>
          </div>

          <Link
            href="/fpo/aggregation"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700"
          >
            <Plus className="h-4 w-4" />
            New Aggregation
          </Link>
        </div>
      </header>

      <div className="space-y-8 px-6 py-6 lg:px-8">
        {/* KPIs */}
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

                <p className="mt-1 text-2xl font-bold text-slate-900">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs font-medium text-green-600">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </section>

        {/* Aggregation + Intelligence */}
        <section className="grid gap-6 xl:grid-cols-3">
          {/* Aggregation */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm xl:col-span-2">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-600">
                    <Layers3 className="h-5 w-5" />
                  </div>

                  <h2 className="text-lg font-bold text-slate-900">
                    Active Aggregations
                  </h2>
                </div>

                <p className="mt-1 text-sm text-slate-500">
                  Combine fragmented farmer supply to fulfill buyer demand.
                </p>
              </div>

              <Link
                href="/fpo/aggregation"
                className="text-sm font-semibold text-green-600 hover:text-green-700"
              >
                View all →
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              {aggregations.map((item) => (
                <div
                  key={item.crop}
                  className="p-6 transition hover:bg-slate-50"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-2xl">
                        {item.crop === "Tomatoes"
                          ? "🍅"
                          : item.crop === "Onions"
                            ? "🧅"
                            : "🥔"}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-slate-900">
                            {item.crop}
                          </h3>

                          <StatusBadge status={item.status} />
                        </div>

                        <p className="mt-1 text-sm text-slate-500">
                          {item.farmers} farmers contributing
                        </p>

                        <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-500">
                          <span>
                            Supply:{" "}
                            <strong className="text-slate-700">
                              {item.quantity}
                            </strong>
                          </span>

                          <span>
                            Demand:{" "}
                            <strong className="text-slate-700">
                              {item.demand}
                            </strong>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-5">
                      <div className="text-right">
                        <p className="text-xs text-slate-500">
                          Match
                        </p>

                        <p className="text-lg font-bold text-green-600">
                          {item.match}%
                        </p>
                      </div>

                      <Link
                        href="/fpo/aggregation"
                        className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-green-300 hover:text-green-700"
                      >
                        Manage
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Intelligence */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <BrainCircuit className="h-5 w-5" />
            </div>

            <h2 className="mt-4 text-lg font-bold text-slate-900">
              FPO Intelligence
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              AI insights to help you plan aggregation.
            </p>

            <div className="mt-6 space-y-4">
              <Insight
                title="Tomato demand rising"
                text="Expected buyer demand may increase by 18% over the next 7 days."
              />

              <Insight
                title="Onion shortage detected"
                text="Current member supply covers 85% of known demand."
              />

              <Insight
                title="Route opportunity"
                text="Combining Pune orders could reduce logistics cost by 11%."
              />
            </div>

            <Link
              href="/fpo/forecasting"
              className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              View Forecast
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Orders */}
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Recent Buyer Orders
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Orders requiring FPO coordination.
              </p>
            </div>

            <Link
              href="/fpo/orders"
              className="text-sm font-semibold text-green-600"
            >
              View all →
            </Link>
          </div>

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <th className="px-6 py-4">Order</th>
                  <th className="px-6 py-4">Buyer</th>
                  <th className="px-6 py-4">Product</th>
                  <th className="px-6 py-4">Quantity</th>
                  <th className="px-6 py-4">Value</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Delivery</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="text-sm hover:bg-slate-50"
                  >
                    <td className="px-6 py-5 font-semibold text-slate-900">
                      {order.id}
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      {order.buyer}
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      {order.product}
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      {order.quantity}
                    </td>

                    <td className="px-6 py-5 font-semibold text-slate-900">
                      {order.value}
                    </td>

                    <td className="px-6 py-5">
                      <StatusBadge status={order.status} />
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      {order.delivery}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="divide-y divide-slate-100 md:hidden">
            {orders.map((order) => (
              <div key={order.id} className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-slate-900">
                      {order.id}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {order.product} · {order.quantity}
                    </p>
                  </div>

                  <StatusBadge status={order.status} />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-xs text-slate-500">Buyer</p>
                    <p className="mt-1 font-medium">
                      {order.buyer}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Value</p>
                    <p className="mt-1 font-semibold">
                      {order.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="rounded-2xl bg-green-700 p-6 text-white shadow-sm md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Sprout className="h-5 w-5" />

                <p className="text-sm font-semibold text-green-100">
                  Kisan Nexus FPO Network
                </p>
              </div>

              <h2 className="mt-2 text-xl font-bold md:text-2xl">
                Turn fragmented farmer supply into reliable market volume.
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-green-100">
                Aggregate supply from your member farmers, match it with
                buyer demand and coordinate delivery through one platform.
              </p>
            </div>

            <Link
              href="/fpo/farmers"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-green-700 hover:bg-green-50"
            >
              Manage Farmers
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Ready: "bg-green-50 text-green-700",
    Partial: "bg-amber-50 text-amber-700",
    CONFIRMED: "bg-amber-50 text-amber-700",
    AGGREGATING: "bg-purple-50 text-purple-700",
    DISPATCHED: "bg-blue-50 text-blue-700",
  };

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${
        styles[status] ?? "bg-slate-100 text-slate-600"
      }`}
    >
      {status}
    </span>
  );
}

function Insight({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
      <p className="text-sm font-semibold text-slate-900">
        {title}
      </p>

      <p className="mt-1 text-xs leading-5 text-slate-500">
        {text}
      </p>
    </div>
  );
}