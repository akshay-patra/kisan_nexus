// export default function BuyerMarketplace() {
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Marketplace</h1>
//       <p className="text-gray-600">Browse available produce.</p>
//     </div>
//   );
// }


"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  Package,
  Star,
  ShoppingCart,
  SlidersHorizontal,
  Sparkles,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

type Product = {
  id: number;
  name: string;
  category: string;
  supplier: string;
  location: string;
  quantity: string;
  price: number;
  quality: string;
  matchScore: number;
  rating: number;
  verified: boolean;
};

const products: Product[] = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    category: "Vegetables",
    supplier: "Green Valley FPO",
    location: "Nashik, Maharashtra",
    quantity: "500 kg",
    price: 28,
    quality: "Grade A",
    matchScore: 96,
    rating: 4.8,
    verified: true,
  },
  {
    id: 2,
    name: "Onions",
    category: "Vegetables",
    supplier: "Maharashtra Farmers Group",
    location: "Pune, Maharashtra",
    quantity: "800 kg",
    price: 24,
    quality: "Grade A",
    matchScore: 92,
    rating: 4.7,
    verified: true,
  },
  {
    id: 3,
    name: "Potatoes",
    category: "Vegetables",
    supplier: "Kisan Samruddhi FPO",
    location: "Satara, Maharashtra",
    quantity: "1,200 kg",
    price: 21,
    quality: "Grade A",
    matchScore: 89,
    rating: 4.6,
    verified: true,
  },
  {
    id: 4,
    name: "Green Chilli",
    category: "Vegetables",
    supplier: "Sahyadri Farmers FPO",
    location: "Kolhapur, Maharashtra",
    quantity: "300 kg",
    price: 52,
    quality: "Premium",
    matchScore: 87,
    rating: 4.7,
    verified: true,
  },
  {
    id: 5,
    name: "Wheat",
    category: "Grains",
    supplier: "Deccan Grain FPO",
    location: "Ahmednagar, Maharashtra",
    quantity: "2,000 kg",
    price: 29,
    quality: "Grade A",
    matchScore: 84,
    rating: 4.5,
    verified: true,
  },
  {
    id: 6,
    name: "Cauliflower",
    category: "Vegetables",
    supplier: "Farm Fresh Collective",
    location: "Pune, Maharashtra",
    quantity: "450 kg",
    price: 34,
    quality: "Premium",
    matchScore: 82,
    rating: 4.5,
    verified: false,
  },
];

const categories = ["All", "Vegetables", "Grains"];

export default function BuyerMarketplace() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("match");

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.supplier.toLowerCase().includes(search.toLowerCase()) ||
        product.location.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });

    return [...filtered].sort((a, b) => {
      if (sortBy === "price") return a.price - b.price;
      if (sortBy === "quantity") {
        return (
          parseInt(b.quantity.replace(/,/g, "")) -
          parseInt(a.quantity.replace(/,/g, ""))
        );
      }

      return b.matchScore - a.matchScore;
    });
  }, [search, category, sortBy]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="px-6 py-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-green-600">
                Buyer Marketplace
              </p>

              <h1 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">
                Find fresh produce
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Discover verified farmers and FPOs matched to your procurement
                needs.
              </p>
            </div>

            <Link
              href="/buyer/requirements/create"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-700"
            >
              <ShoppingCart className="h-4 w-4" />
              Create Requirement
            </Link>
          </div>
        </div>
      </header>

      <div className="space-y-6 px-6 py-6 lg:px-8">
        {/* Search */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search produce, supplier or location..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-sm outline-none transition focus:border-green-500 focus:bg-white"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto">
              <SlidersHorizontal className="h-5 w-5 shrink-0 text-slate-500" />

              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                    category === item
                      ? "bg-green-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none rounded-xl border border-slate-200 bg-white py-3 pl-4 pr-10 text-sm font-medium text-slate-700 outline-none"
              >
                <option value="match">Best Match</option>
                <option value="price">Lowest Price</option>
                <option value="quantity">Highest Quantity</option>
              </select>

              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            </div>
          </div>
        </section>

        {/* AI banner */}
        <section className="rounded-2xl border border-green-100 bg-green-50 p-5">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-600 text-white">
              <Sparkles className="h-5 w-5" />
            </div>

            <div>
              <h2 className="font-semibold text-green-900">
                Smart Matching is active
              </h2>

              <p className="mt-1 text-sm leading-6 text-green-800">
                Results are ranked using price, distance, quantity, quality
                and delivery suitability.
              </p>
            </div>
          </div>
        </section>

        {/* Results */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Available Produce
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {filteredProducts.length} listings available
            </p>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <Package className="mx-auto h-10 w-10 text-slate-400" />

            <h3 className="mt-4 font-semibold text-slate-900">
              No produce found
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Try another product, supplier or category.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* Product visual */}
                <div className="flex h-36 items-center justify-center bg-linear-to-br from-green-50 to-emerald-100">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-4xl shadow-sm">
                    {product.category === "Grains" ? "🌾" : "🥬"}
                  </div>

                  <div className="absolute" />
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-slate-900">
                        {product.name}
                      </h3>

                      <div className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                        {product.supplier}

                        {product.verified && (
                          <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                        )}
                      </div>
                    </div>

                    <div className="rounded-lg bg-green-50 px-2.5 py-1.5 text-center">
                      <p className="text-[10px] font-medium uppercase text-green-600">
                        Match
                      </p>
                      <p className="font-bold text-green-700">
                        {product.matchScore}%
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-slate-500">
                        <Package className="h-4 w-4" />
                        Available
                      </span>

                      <span className="font-semibold text-slate-800">
                        {product.quantity}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Quality</span>

                      <span className="font-medium text-slate-800">
                        {product.quality}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-slate-500">
                        <MapPin className="h-4 w-4" />
                        Location
                      </span>

                      <span className="max-w-45 truncate text-right font-medium text-slate-800">
                        {product.location}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-slate-500">
                        <Star className="h-4 w-4" />
                        Supplier rating
                      </span>

                      <span className="font-medium text-slate-800">
                        {product.rating}/5
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-end justify-between border-t border-slate-100 pt-4">
                    <div>
                      <p className="text-xs text-slate-500">Price</p>
                      <p className="text-xl font-bold text-slate-900">
                        ₹{product.price}
                        <span className="text-xs font-normal text-slate-500">
                          /kg
                        </span>
                      </p>
                    </div>

                    <button
                      type="button"
                      className="rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}