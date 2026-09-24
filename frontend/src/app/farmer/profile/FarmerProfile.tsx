// export default function FarmerProfile() {
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Profile</h1>
//       <p className="text-gray-600">Manage your farmer profile.</p>
//     </div>
//   );
// }


"use client";

import {
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Save,
  UserCircle,
} from "lucide-react";

export default function FarmerProfile() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8">

      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Profile
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Manage your farmer account information.
        </p>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">

        {/* Profile header */}
        <div className="border-b border-slate-100 bg-slate-50 p-6">

          <div className="flex items-center gap-4">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
              <UserCircle className="h-9 w-9 text-emerald-700" />
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Ramesh Patil
              </h2>

              <p className="text-sm text-slate-500">
                Farmer
              </p>

              <div className="mt-2 flex items-center gap-1 text-xs font-medium text-emerald-700">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Mobile verified
              </div>
            </div>

          </div>

        </div>

        {/* Form */}
        <form className="p-6 sm:p-8">

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium">
                Full name
              </label>

              <input
                defaultValue="Ramesh Patil"
                className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Mobile number
              </label>

              <div className="relative">
                <Phone className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />

                <input
                  defaultValue="9876543210"
                  disabled
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-500"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email
              </label>

              <div className="relative">
                <Mail className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />

                <input
                  defaultValue="ramesh@example.com"
                  type="email"
                  className="h-12 w-full rounded-xl border border-slate-200 pl-11 pr-4 text-sm outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Location
              </label>

              <div className="relative">
                <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />

                <input
                  defaultValue="Solapur, Maharashtra"
                  className="h-12 w-full rounded-xl border border-slate-200 pl-11 pr-4 text-sm outline-none focus:border-emerald-500"
                />
              </div>
            </div>

          </div>

          <div className="mt-8 border-t border-slate-100 pt-6">

            <h3 className="font-semibold">
              Account information
            </h3>

            <div className="mt-4 rounded-xl bg-slate-50 p-4">
              <div className="grid gap-4 sm:grid-cols-3">

                <div>
                  <p className="text-xs text-slate-400">
                    Account type
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    Farmer
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Mobile status
                  </p>
                  <p className="mt-1 text-sm font-semibold text-emerald-700">
                    Verified
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Member since
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    September 2026
                  </p>
                </div>

              </div>
            </div>

          </div>

          <div className="mt-8 flex justify-end">

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl bg-[#12372A] px-5 py-3 text-sm font-semibold text-white"
            >
              <Save className="h-4 w-4" />
              Save changes
            </button>

          </div>

        </form>
      </div>

    </div>
  );
}
