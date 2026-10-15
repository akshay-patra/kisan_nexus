// export default function FpoMarketplace() {
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Marketplace</h1>
//       <p className="text-gray-600">View and participate in the marketplace.</p>
//     </div>
//   );
// }


"use client";

import {
  MapPin,
  Plus,
  Search,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { useMemo, useState } from "react";

const listings = [
  {
    id: 1,
    product: "Fresh Tomatoes",
    quantity: "4,500 kg",
    price: "₹28/kg",
    quality: "Grade A",
    buyers: 4,
    status: "Published",
    location: "Nashik, Maharashtra",
  },
  {
    id: 2,
    product: "Onions",
    quantity: "6,800 kg",
    price: "₹24/kg",
    quality: "Grade A",
    buyers: 7,
    status: "Published",
    location: "Nashik, Maharashtra",
  },
  {
    id: 3,
    product: "Potatoes",
    quantity: "3,200 kg",
    price: "₹21/kg",
    quality: "Premium",
    buyers: 3,
    status: "Draft",
    location: "Satara, Maharashtra",
  },
];

export default function FpoMarketplace() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(
    () =>
      listings.filter(
        (item) =>
          item.product
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          item.location
            .toLowerCase()
            .includes(search.toLowerCase()),
      ),
    [search],
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="flex flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="text-sm font-medium text-green-600">
              FPO Marketplace
            </p>

            <h1 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">
              Aggregated Supply
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Publish buyer-ready supply from your farmer network.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-700"
          >
            <Plus className="h-4 w-4" />
            New Listing
          </button>
        </div>
      </header>

      <div className="space-y-6 px-6 py-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search aggregated supply..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-sm outline-none focus:border-green-500 focus:bg-white"
            />
          </div>
        </div>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <ShoppingBag className="h-5 w-5" />
                </div>

                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                    item.status === "Published"
                      ? "bg-green-50 text-green-700"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <h2 className="mt-5 text-lg font-bold text-slate-900">
                {item.product}
              </h2>

              <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                <MapPin className="h-4 w-4" />
                {item.location}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <Metric label="Quantity" value={item.quantity} />
                <Metric label="Price" value={item.price} />
                <Metric label="Quality" value={item.quality} />
                <Metric label="Interested Buyers" value={String(item.buyers)} />
              </div>

              <div className="mt-5 rounded-xl bg-green-50 p-3">
                <div className="flex gap-2">
                  <Sparkles className="h-4 w-4 shrink-0 text-green-600" />

                  <p className="text-xs leading-5 text-green-800">
                    Kisan Nexus can automatically surface this listing to
                    buyers with matching requirements.
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="mt-5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Manage Listing
              </button>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-bold text-slate-900">{value}</p>
    </div>
  );
}