// export default function BuyerRequirements() {
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Requirements</h1>
//       <p className="text-gray-600">Manage your procurement requirements.</p>
//     </div>
//   );
// }


"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  // CheckCircle2,
  Clock3,
  MapPin,
  Package,
  Plus,
  Sparkles,
} from "lucide-react";

const requirements = [
  {
    id: "REQ-1048",
    product: "Tomatoes",
    quantity: "1,000 kg",
    quality: "Grade A",
    location: "Pune, Maharashtra",
    requiredBy: "18 Sep 2026",
    matches: 12,
    status: "Active",
  },
  {
    id: "REQ-1044",
    product: "Onions",
    quantity: "800 kg",
    quality: "Grade A",
    location: "Mumbai, Maharashtra",
    requiredBy: "20 Sep 2026",
    matches: 8,
    status: "Active",
  },
  {
    id: "REQ-1039",
    product: "Potatoes",
    quantity: "1,200 kg",
    quality: "Premium",
    location: "Pune, Maharashtra",
    requiredBy: "16 Sep 2026",
    matches: 6,
    status: "Active",
  },
  {
    id: "REQ-1027",
    product: "Green Chilli",
    quantity: "300 kg",
    quality: "Premium",
    location: "Nashik, Maharashtra",
    requiredBy: "10 Sep 2026",
    matches: 10,
    status: "Fulfilled",
  },
];

export default function BuyerRequirements() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="flex flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="text-sm font-medium text-green-600">
              Procurement
            </p>

            <h1 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">
              My Requirements
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage your active and previous procurement requirements.
            </p>
          </div>

          <Link
            href="/buyer/requirements/create"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-700"
          >
            <Plus className="h-4 w-4" />
            New Requirement
          </Link>
        </div>
      </header>

      <div className="space-y-6 px-6 py-6 lg:px-8">
        {/* Summary */}
        <div className="grid gap-4 sm:grid-cols-3">
          <SummaryCard
            label="Total Requirements"
            value="8"
            icon={<Package className="h-5 w-5" />}
          />

          <SummaryCard
            label="Active"
            value="5"
            icon={<Clock3 className="h-5 w-5" />}
          />

          <SummaryCard
            label="Matched"
            value="24"
            icon={<Sparkles className="h-5 w-5" />}
          />
        </div>

        {/* Requirements */}
        <section className="space-y-4">
          {requirements.map((requirement) => (
            <div
              key={requirement.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <Package className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-lg font-bold text-slate-900">
                        {requirement.product}
                      </h2>

                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                          requirement.status === "Active"
                            ? "bg-green-50 text-green-700"
                            : "bg-blue-50 text-blue-700"
                        }`}
                      >
                        {requirement.status}
                      </span>
                    </div>

                    <p className="mt-1 text-sm text-slate-500">
                      Requirement #{requirement.id}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href="/buyer/marketplace"
                    className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    View Matches
                  </Link>

                  <button
                    type="button"
                    className="rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
                  >
                    Details
                  </button>
                </div>
              </div>

              <div className="mt-6 grid gap-4 border-t border-slate-100 pt-5 sm:grid-cols-2 lg:grid-cols-4">
                <Detail
                  label="Quantity"
                  value={requirement.quantity}
                />

                <Detail
                  label="Quality"
                  value={requirement.quality}
                />

                <Detail
                  label="Location"
                  value={requirement.location}
                  icon={<MapPin className="h-4 w-4" />}
                />

                <Detail
                  label="Required By"
                  value={requirement.requiredBy}
                  icon={<CalendarDays className="h-4 w-4" />}
                />
              </div>

              <div className="mt-5 flex flex-col gap-3 rounded-xl bg-green-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-green-600" />

                  <p className="text-sm font-medium text-green-900">
                    {requirement.matches} Smart Matches available
                  </p>
                </div>

                <Link
                  href="/buyer/marketplace"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-green-700"
                >
                  Explore matches
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

function SummaryCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
        {icon}
      </div>

      <p className="mt-4 text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-bold text-slate-900">{value}</p>
    </div>
  );
}

function Detail({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-slate-800">
        {icon}
        {value}
      </p>
    </div>
  );
}