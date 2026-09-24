// export default function FarmerDashboard() {
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Farmer Dashboard</h1>
//       <p className="text-gray-600">Overview of your farming activities.</p>
//     </div>
//   );
// }


"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  IndianRupee,
  Package,
  Plus,
  Sparkles,
  TrendingUp,
  Truck,
} from "lucide-react";

const stats = [
  {
    label: "Active Supply",
    value: "1,240 kg",
    change: "+18%",
    icon: Package,
  },
  {
    label: "Matched Orders",
    value: "8",
    change: "+3 this week",
    icon: Sparkles,
  },
  {
    label: "Estimated Earnings",
    value: "₹42,800",
    change: "+12%",
    icon: IndianRupee,
  },
  {
    label: "Produce Delivered",
    value: "860 kg",
    change: "This month",
    icon: Truck,
  },
];

const supplies = [
  {
    product: "Tomato",
    quantity: "500 kg",
    quality: "Grade A",
    price: "₹24/kg",
    status: "Matched",
  },
  {
    product: "Onion",
    quantity: "400 kg",
    quality: "Grade A",
    price: "₹28/kg",
    status: "Available",
  },
  {
    product: "Potato",
    quantity: "340 kg",
    quality: "Grade B",
    price: "₹21/kg",
    status: "Available",
  },
];

export default function FarmerDashboard() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">

      {/* Welcome */}
      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-center">

        <div>
          <p className="text-sm font-medium text-emerald-700">
            Wednesday, September 23
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
            Good morning, Ramesh 👋
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Here&apos;s what&apos;s happening with your farm supply today.
          </p>
        </div>

        <Link
          href="/farmer/supply/add"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#12372A] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0d2b20]"
        >
          <Plus className="h-4 w-4" />
          Add Supply
        </Link>

      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <div className="flex items-start justify-between">

                <div>
                  <p className="text-sm text-slate-500">
                    {stat.label}
                  </p>

                  <p className="mt-2 text-2xl font-bold text-slate-900">
                    {stat.value}
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                  <Icon className="h-5 w-5 text-emerald-700" />
                </div>

              </div>

              <p className="mt-4 text-xs font-medium text-emerald-700">
                {stat.change}
              </p>
            </div>
          );
        })}

      </div>

      {/* Main grid */}
      <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">

        {/* Current Supply */}
        <section className="rounded-2xl border border-slate-200 bg-white">

          <div className="flex items-center justify-between border-b border-slate-100 p-5">

            <div>
              <h2 className="font-semibold text-slate-900">
                Current Supply
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Your recently listed produce
              </p>
            </div>

            <Link
              href="/farmer/supply"
              className="text-sm font-semibold text-emerald-700"
            >
              View all
            </Link>

          </div>

          <div className="divide-y divide-slate-100">

            {supplies.map((supply) => (
              <div
                key={supply.product}
                className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">
                    <Package className="h-5 w-5 text-emerald-700" />
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900">
                      {supply.product}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {supply.quantity} · {supply.quality}
                    </p>
                  </div>

                </div>

                <div className="flex items-center justify-between gap-6 sm:justify-end">

                  <div>
                    <p className="text-sm font-semibold">
                      {supply.price}
                    </p>

                    <p className="text-xs text-slate-400">
                      Expected price
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      supply.status === "Matched"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {supply.status}
                  </span>

                </div>

              </div>
            ))}

          </div>
        </section>

        {/* AI Match */}
        <section className="rounded-2xl bg-[#12372A] p-6 text-white">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
              <Sparkles className="h-5 w-5 text-emerald-300" />
            </div>

            <div>
              <p className="font-semibold">
                Smart Match
              </p>

              <p className="text-xs text-emerald-200">
                AI-powered opportunity
              </p>
            </div>

          </div>

          <div className="mt-8">

            <p className="text-sm text-slate-300">
              We found a strong buyer match for
            </p>

            <p className="mt-1 text-2xl font-bold">
              500 kg Tomato
            </p>

            <div className="mt-5 flex items-center gap-2">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[94%] rounded-full bg-emerald-400" />
              </div>

              <span className="text-sm font-bold text-emerald-300">
                94%
              </span>
            </div>

            <p className="mt-2 text-xs text-slate-400">
              Match based on price, distance, quantity, quality and delivery.
            </p>

          </div>

          <Link
            href="/farmer/matches"
            className="mt-8 flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold transition hover:bg-white/15"
          >
            View match details
            <ArrowRight className="h-4 w-4" />
          </Link>

        </section>
      </div>

      {/* Activity */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white">

        <div className="border-b border-slate-100 p-5">
          <h2 className="font-semibold">
            Recent Activity
          </h2>
        </div>

        <div className="divide-y divide-slate-100">

          <div className="flex items-start gap-4 p-5">
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />

            <div>
              <p className="text-sm font-medium">
                Tomato supply matched with a buyer
              </p>
              <p className="mt-1 text-xs text-slate-500">
                2 hours ago · 500 kg · ₹24/kg
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5">
            <TrendingUp className="mt-0.5 h-5 w-5 text-emerald-600" />

            <div>
              <p className="text-sm font-medium">
                Demand forecast updated
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Yesterday · Tomato demand expected to increase
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Prototype disclaimer */}
      <p className="mt-5 text-center text-xs text-slate-400">
        Dashboard figures shown here are prototype/demo estimates and are not
        production market data.
      </p>

    </div>
  );
}