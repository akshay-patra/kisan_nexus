// export default function FarmerMatches() {
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Matches</h1>
//       <p className="text-gray-600">See potential buyers for your supply.</p>
//     </div>
//   );
// }


"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Package,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const matches = [
  {
    product: "Tomato",
    quantity: "500 kg",
    buyer: "Bulk Buyer",
    location: "Pune, Maharashtra",
    price: "₹24/kg",
    score: 94,
    reason: "Strong price and quantity fit",
  },
  {
    product: "Onion",
    quantity: "400 kg",
    buyer: "Retail Buyer",
    location: "Solapur, Maharashtra",
    price: "₹28/kg",
    score: 89,
    reason: "Very close pickup location",
  },
  {
    product: "Potato",
    quantity: "340 kg",
    buyer: "Wholesale Buyer",
    location: "Pune, Maharashtra",
    price: "₹21/kg",
    score: 82,
    reason: "Good quality and delivery fit",
  },
];

export default function FarmerMatches() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">

      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Smart Matches
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Buyer opportunities matched with your available supply.
        </p>
      </div>

      {/* AI explanation */}
      <div className="mt-8 rounded-2xl bg-[#12372A] p-6 text-white">

        <div className="flex items-start gap-4">

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
            <Sparkles className="h-5 w-5 text-emerald-300" />
          </div>

          <div>
            <h2 className="font-semibold">
              How Smart Matching works
            </h2>

            <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-300">
              Kisan Nexus considers price, distance, quantity, quality and
              delivery requirements to identify relevant buyer opportunities.
            </p>
          </div>

        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-5">

          {[
            ["30%", "Price"],
            ["25%", "Distance"],
            ["20%", "Quantity"],
            ["15%", "Quality"],
            ["10%", "Delivery"],
          ].map(([weight, label]) => (
            <div
              key={label}
              className="rounded-xl bg-white/5 p-3"
            >
              <p className="font-bold text-emerald-300">
                {weight}
              </p>
              <p className="mt-1 text-xs text-slate-400">
                {label}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* Matches */}
      <div className="mt-6 space-y-4">

        {matches.map((match) => (
          <div
            key={`${match.product}-${match.buyer}`}
            className="rounded-2xl border border-slate-200 bg-white p-6"
          >

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center">

              <div className="flex flex-1 items-start gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50">
                  <Package className="h-5 w-5 text-emerald-700" />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-semibold">
                      {match.product}
                    </h2>

                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                      {match.quantity}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-slate-500">
                    {match.buyer}
                  </p>

                  <div className="mt-2 flex items-center gap-1 text-xs text-slate-400">
                    <MapPin className="h-3.5 w-3.5" />
                    {match.location}
                  </div>
                </div>

              </div>

              <div className="lg:w-48">

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Match score
                  </span>

                  <span className="font-bold text-emerald-700">
                    {match.score}%
                  </span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-emerald-600"
                    style={{ width: `${match.score}%` }}
                  />
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  {match.reason}
                </p>

              </div>

              <div className="lg:w-32">

                <p className="text-lg font-bold">
                  {match.price}
                </p>

                <p className="text-xs text-slate-400">
                  Buyer offer
                </p>

              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#12372A] px-5 py-3 text-sm font-semibold text-white"
              >
                View
                <ArrowRight className="h-4 w-4" />
              </button>

            </div>

          </div>
        ))}

      </div>

      <p className="mt-5 text-center text-xs text-slate-400">
        Match scores shown are prototype/demo estimates.
      </p>

    </div>
  );
}