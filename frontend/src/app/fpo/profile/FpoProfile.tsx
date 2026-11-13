// export default function FpoProfile() {
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Profile</h1>
//       <p className="text-gray-600">Manage FPO profile.</p>
//     </div>
//   );
// }


"use client";

import { FormEvent, useState } from "react";
import {
  Building2,
  CheckCircle2,
  MapPin,
  Save,
  Users,
} from "lucide-react";

export default function FpoProfile() {
  const [saved, setSaved] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="px-6 py-6 lg:px-8">
          <p className="text-sm font-medium text-green-600">
            Organization
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">
            FPO Profile
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage your organization information and operating details.
          </p>
        </div>
      </header>

      <div className="px-6 py-8 lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-4xl space-y-6"
        >
          {/* Organization header */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                <Building2 className="h-9 w-9" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl font-bold text-slate-900">
                    Kisan Samruddhi FPO
                  </h2>

                  <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Verified FPO
                  </span>
                </div>

                <p className="mt-1 text-sm text-slate-500">
                  Farmer Producer Organization
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  FPO ID: KN-FPO-00124
                </p>
              </div>
            </div>
          </section>

          {/* Basic information */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-bold text-slate-900">
              Organization Information
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Basic details about your FPO.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <Field label="FPO Name">
                <input
                  className="input"
                  defaultValue="Kisan Samruddhi FPO"
                />
              </Field>

              <Field label="Registration Number">
                <input
                  className="input"
                  defaultValue="FPO/MH/2024/00124"
                />
              </Field>

              <Field label="Contact Person">
                <input
                  className="input"
                  defaultValue="Rajesh Patil"
                />
              </Field>

              <Field label="Mobile Number">
                <input
                  className="input"
                  defaultValue="+91 98765 43210"
                />
              </Field>

              <Field label="Email">
                <input
                  type="email"
                  className="input"
                  defaultValue="admin@kisannexus-fpo.example"
                />
              </Field>

              <Field label="Member Farmers">
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                  <input
                    className="input pl-10"
                    defaultValue="128"
                    readOnly
                  />
                </div>
              </Field>
            </div>
          </section>

          {/* Location */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-bold text-slate-900">
              Operating Location
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Location used for aggregation and logistics planning.
            </p>

            <div className="mt-6">
              <Field label="Primary Location">
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                  <input
                    className="input pl-10"
                    defaultValue="Nashik, Maharashtra"
                  />
                </div>
              </Field>
            </div>
          </section>

          {/* Crop specialization */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-bold text-slate-900">
              Crop Specialization
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Main crops handled by your farmer network.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Tomatoes",
                "Onions",
                "Potatoes",
                "Green Chilli",
              ].map((crop) => (
                <label
                  key={crop}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 p-4"
                >
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 accent-green-600"
                  />

                  <span className="text-sm font-medium text-slate-700">
                    {crop}
                  </span>
                </label>
              ))}
            </div>
          </section>

          {/* Save */}
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:justify-end">
            {saved && (
              <div className="flex items-center justify-center gap-2 rounded-xl bg-green-50 px-5 py-3 text-sm font-medium text-green-700">
                <CheckCircle2 className="h-4 w-4" />
                Changes saved
              </div>
            )}

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700"
            >
              <Save className="h-4 w-4" />
              Save Changes
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgb(226 232 240);
          background: white;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          outline: none;
        }

        .input:focus {
          border-color: rgb(34 197 94);
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>

      {children}
    </div>
  );
}
