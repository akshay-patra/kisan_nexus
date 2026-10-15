// export default function FpoAggregation() {
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Aggregation</h1>
//       <p className="text-gray-600">Manage aggregated supply.</p>
//     </div>
//   );
// }


"use client";

import {
  ArrowRight,
  CheckCircle2,
  Layers3,
  MapPin,
  Package,
  Plus,
  Sparkles,
  Users,
} from "lucide-react";

const contributions = [
  {
    farmer: "Ramesh Patil",
    village: "Niphad",
    quantity: "500 kg",
    quality: "Grade A",
    price: "₹27/kg",
  },
  {
    farmer: "Sunita Jadhav",
    village: "Sinnar",
    quantity: "300 kg",
    quality: "Grade A",
    price: "₹28/kg",
  },
  {
    farmer: "Vijay Pawar",
    village: "Lasalgaon",
    quantity: "200 kg",
    quality: "Grade A",
    price: "₹27/kg",
  },
];

export default function FpoAggregation() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="px-6 py-6 lg:px-8">
          <p className="text-sm font-medium text-green-600">
            Supply Coordination
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">
            Supply Aggregation
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Combine fragmented farmer supply into buyer-ready volumes.
          </p>
        </div>
      </header>

      <div className="space-y-6 px-6 py-6 lg:px-8">
        {/* Current aggregation */}
        <section className="rounded-2xl border border-green-200 bg-white shadow-sm">
          <div className="border-b border-green-100 bg-green-50 px-6 py-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Layers3 className="h-5 w-5 text-green-600" />

                  <h2 className="text-lg font-bold text-green-900">
                    Aggregation #AGG-2026-024
                  </h2>
                </div>

                <p className="mt-1 text-sm text-green-800">
                  Tomatoes · Buyer requirement #REQ-1048
                </p>
              </div>

              <span className="rounded-full bg-green-600 px-3 py-1.5 text-xs font-bold text-white">
                READY FOR MATCH
              </span>
            </div>
          </div>

          <div className="p-6">
            {/* Supply flow */}
            <div className="grid gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-slate-200 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Farmer Contributions
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-900">
                  1,000 kg
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  From 3 farmers
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Buyer Requirement
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-900">
                  1,000 kg
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  FreshMart Retail
                </p>
              </div>

              <div className="rounded-xl border border-green-200 bg-green-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-green-700">
                  Smart Match
                </p>

                <p className="mt-2 text-3xl font-bold text-green-700">
                  96%
                </p>

                <p className="mt-1 text-sm text-green-700">
                  Complete quantity match
                </p>
              </div>
            </div>

            {/* Contributions */}
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900">
                    Farmer Contributions
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Supply selected for this aggregation.
                  </p>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <Plus className="h-4 w-4" />
                  Add Farmer
                </button>
              </div>

              <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      <th className="px-5 py-4">Farmer</th>
                      <th className="px-5 py-4">Location</th>
                      <th className="px-5 py-4">Quantity</th>
                      <th className="px-5 py-4">Quality</th>
                      <th className="px-5 py-4">Price</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {contributions.map((item) => (
                      <tr key={item.farmer} className="text-sm">
                        <td className="px-5 py-4 font-semibold text-slate-900">
                          {item.farmer}
                        </td>

                        <td className="px-5 py-4 text-slate-600">
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {item.village}
                          </span>
                        </td>

                        <td className="px-5 py-4 font-semibold text-slate-800">
                          {item.quantity}
                        </td>

                        <td className="px-5 py-4">
                          <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
                            {item.quality}
                          </span>
                        </td>

                        <td className="px-5 py-4 font-semibold text-slate-800">
                          {item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Flow visualization */}
            <div className="mt-8 rounded-2xl bg-slate-900 p-6 text-white">
              <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                <FlowItem
                  icon={<Users className="h-5 w-5" />}
                  title="3 Farmers"
                  subtitle="Fragmented supply"
                />

                <ArrowRight className="hidden h-6 w-6 text-slate-500 md:block" />

                <FlowItem
                  icon={<Layers3 className="h-5 w-5" />}
                  title="1,000 kg"
                  subtitle="Aggregated supply"
                />

                <ArrowRight className="hidden h-6 w-6 text-slate-500 md:block" />

                <FlowItem
                  icon={<Package className="h-5 w-5" />}
                  title="Buyer Ready"
                  subtitle="FreshMart Retail"
                />

                <ArrowRight className="hidden h-6 w-6 text-slate-500 md:block" />

                <FlowItem
                  icon={<CheckCircle2 className="h-5 w-5" />}
                  title="96% Match"
                  subtitle="Smart Matching"
                />
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Save Draft
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-700"
              >
                <Sparkles className="h-4 w-4" />
                Publish Aggregated Supply
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function FlowItem({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-green-600">
        {icon}
      </div>

      <p className="mt-2 font-bold">{title}</p>

      <p className="mt-1 text-xs text-slate-400">
        {subtitle}
      </p>
    </div>
  );
}
