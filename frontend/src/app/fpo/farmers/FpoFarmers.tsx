// export default function FpoFarmers() {
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Farmers</h1>
//       <p className="text-gray-600">Manage farmers in your FPO.</p>
//     </div>
//   );
// }


"use client";

import { useMemo, useState } from "react";
import {
  Search,
  Plus,
  MapPin,
  Phone,
  CheckCircle2,
  Package,
  MoreHorizontal,
  Users,
} from "lucide-react";

const farmers = [
  {
    id: 1,
    name: "Ramesh Patil",
    village: "Niphad, Nashik",
    phone: "+91 98765 12001",
    crops: "Tomato, Onion",
    supply: "820 kg",
    status: "Active",
    verified: true,
  },
  {
    id: 2,
    name: "Sunita Jadhav",
    village: "Sinnar, Nashik",
    phone: "+91 98765 12002",
    crops: "Tomato, Chilli",
    supply: "650 kg",
    status: "Active",
    verified: true,
  },
  {
    id: 3,
    name: "Mahesh Shinde",
    village: "Dindori, Nashik",
    phone: "+91 98765 12003",
    crops: "Onion, Potato",
    supply: "1,100 kg",
    status: "Active",
    verified: true,
  },
  {
    id: 4,
    name: "Kavita More",
    village: "Yeola, Nashik",
    phone: "+91 98765 12004",
    crops: "Onion",
    supply: "540 kg",
    status: "Pending",
    verified: false,
  },
  {
    id: 5,
    name: "Vijay Pawar",
    village: "Lasalgaon, Nashik",
    phone: "+91 98765 12005",
    crops: "Tomato, Potato",
    supply: "900 kg",
    status: "Active",
    verified: true,
  },
];

export default function FpoFarmers() {
  const [search, setSearch] = useState("");

  const filteredFarmers = useMemo(() => {
    return farmers.filter(
      (farmer) =>
        farmer.name.toLowerCase().includes(search.toLowerCase()) ||
        farmer.village.toLowerCase().includes(search.toLowerCase()) ||
        farmer.crops.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="flex flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="text-sm font-medium text-green-600">
              FPO Network
            </p>

            <h1 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">
              Member Farmers
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage your farmers and their available supply.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-700"
          >
            <Plus className="h-4 w-4" />
            Add Farmer
          </button>
        </div>
      </header>

      <div className="space-y-6 px-6 py-6 lg:px-8">
        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-3">
          <Stat
            label="Total Farmers"
            value="128"
            icon={<Users className="h-5 w-5" />}
          />

          <Stat
            label="Active Farmers"
            value="116"
            icon={<CheckCircle2 className="h-5 w-5" />}
          />

          <Stat
            label="Available Supply"
            value="18.4T"
            icon={<Package className="h-5 w-5" />}
          />
        </div>

        {/* Search */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search farmer, village or crop..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-sm outline-none focus:border-green-500 focus:bg-white"
            />
          </div>
        </div>

        {/* Farmer cards */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredFarmers.map((farmer) => (
            <div
              key={farmer.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 font-bold text-green-700">
                    {farmer.name.charAt(0)}
                  </div>

                  <div>
                    <div className="flex items-center gap-1">
                      <h2 className="font-semibold text-slate-900">
                        {farmer.name}
                      </h2>

                      {farmer.verified && (
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                      )}
                    </div>

                    <p className="text-xs text-slate-500">
                      Member #{String(farmer.id).padStart(3, "0")}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
                >
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <MapPin className="h-4 w-4 text-slate-400" />
                  {farmer.village}
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Phone className="h-4 w-4 text-slate-400" />
                  {farmer.phone}
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Package className="h-4 w-4 text-slate-400" />
                  {farmer.crops}
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
                <div>
                  <p className="text-xs text-slate-500">
                    Current Supply
                  </p>

                  <p className="mt-1 font-bold text-slate-900">
                    {farmer.supply}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Status
                  </p>

                  <span
                    className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                      farmer.status === "Active"
                        ? "bg-green-50 text-green-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {farmer.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredFarmers.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
            <Users className="mx-auto h-10 w-10 text-slate-400" />

            <p className="mt-3 font-semibold text-slate-900">
              No farmers found
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function Stat({
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

      <p className="mt-1 text-2xl font-bold text-slate-900">
        {value}
      </p>
    </div>
  );
}