// export default function FarmerSupply() {
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">My Supply</h1>
//       <p className="text-gray-600">Manage your agricultural supply.</p>
//     </div>
//   );
// }


"use client";

import Link from "next/link";
import {
  Edit3,
  Package,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import { useState } from "react";

const supplies = [
  {
    id: 1,
    product: "Tomato",
    quantity: "500 kg",
    quality: "Grade A",
    price: "₹24/kg",
    available: "25 Sep 2026",
    status: "Matched",
  },
  {
    id: 2,
    product: "Onion",
    quantity: "400 kg",
    quality: "Grade A",
    price: "₹28/kg",
    available: "27 Sep 2026",
    status: "Available",
  },
  {
    id: 3,
    product: "Potato",
    quantity: "340 kg",
    quality: "Grade B",
    price: "₹21/kg",
    available: "29 Sep 2026",
    status: "Available",
  },
  {
    id: 4,
    product: "Wheat",
    quantity: "250 kg",
    quality: "Grade A",
    price: "₹32/kg",
    available: "02 Oct 2026",
    status: "Pending",
  },
];

export default function FarmerSupply() {
  const [search, setSearch] = useState("");

  const filtered = supplies.filter((item) =>
    item.product.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">

      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            My Supply
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage your available produce and listings.
          </p>
        </div>

        <Link
          href="/farmer/supply/add"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#12372A] px-5 py-3 text-sm font-semibold text-white"
        >
          <Plus className="h-4 w-4" />
          Add Supply
        </Link>

      </div>

      {/* Search */}
      <div className="mt-8 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4">
        <Search className="h-5 w-5 text-slate-400" />

        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search your produce..."
          className="h-12 flex-1 bg-transparent text-sm outline-none"
        />
      </div>

      {/* Supply cards */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">

        <div className="hidden grid-cols-[1.5fr_1fr_1fr_1fr_1fr_auto] gap-4 border-b border-slate-100 bg-slate-50 px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500 md:grid">
          <span>Produce</span>
          <span>Quantity</span>
          <span>Quality</span>
          <span>Price</span>
          <span>Available</span>
          <span>Status</span>
        </div>

        <div className="divide-y divide-slate-100">

          {filtered.map((item) => (
            <div
              key={item.id}
              className="grid gap-4 px-5 py-5 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr_auto] md:items-center"
            >

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                  <Package className="h-5 w-5 text-emerald-700" />
                </div>

                <div>
                  <p className="font-semibold">{item.product}</p>
                  <p className="text-xs text-slate-400">
                    Supply #{item.id.toString().padStart(3, "0")}
                  </p>
                </div>

              </div>

              <div>
                <span className="text-xs text-slate-400 md:hidden">
                  Quantity ·{" "}
                </span>
                <span className="text-sm font-medium">
                  {item.quantity}
                </span>
              </div>

              <div>
                <span className="text-xs text-slate-400 md:hidden">
                  Quality ·{" "}
                </span>
                <span className="text-sm">
                  {item.quality}
                </span>
              </div>

              <div className="text-sm font-semibold">
                {item.price}
              </div>

              <div className="text-sm text-slate-600">
                {item.available}
              </div>

              <div className="flex items-center justify-between gap-3">

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    item.status === "Matched"
                      ? "bg-emerald-50 text-emerald-700"
                      : item.status === "Pending"
                        ? "bg-amber-50 text-amber-700"
                        : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {item.status}
                </span>

                <div className="flex gap-1">
                  <button
                    type="button"
                    className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                  >
                    <Edit3 className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
}