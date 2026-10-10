// export default function BuyerProfile() {
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Profile</h1>
//       <p className="text-gray-600">Manage your buyer profile.</p>
//     </div>
//   );
// }


"use client";

import { FormEvent, useState } from "react";
import {
  Building2,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Save,
  User,
} from "lucide-react";

export default function BuyerProfile() {
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
            Account
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">
            Buyer Profile
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage your business and procurement preferences.
          </p>
        </div>
      </header>

      <div className="px-6 py-8 lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-4xl space-y-6"
        >
          {/* Profile header */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                <Building2 className="h-9 w-9" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl font-bold text-slate-900">
                    FreshMart Retail
                  </h2>

                  <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Verified Buyer
                  </span>
                </div>

                <p className="mt-1 text-sm text-slate-500">
                  Retail & Bulk Procurement
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Buyer ID: KN-BUY-1024
                </p>
              </div>
            </div>
          </section>

          {/* Business */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="font-bold text-slate-900">
                Business Information
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Basic information about your buying organization.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Field
                label="Business Name"
                icon={<Building2 className="h-4 w-4" />}
              >
                <input
                  className="input"
                  defaultValue="FreshMart Retail"
                />
              </Field>

              <Field
                label="Contact Person"
                icon={<User className="h-4 w-4" />}
              >
                <input
                  className="input"
                  defaultValue="Rajesh Kumar"
                />
              </Field>

              <Field
                label="Mobile Number"
                icon={<Phone className="h-4 w-4" />}
              >
                <input
                  className="input"
                  defaultValue="+91 98765 43210"
                />
              </Field>

              <Field
                label="Email"
                icon={<Mail className="h-4 w-4" />}
              >
                <input
                  type="email"
                  className="input"
                  defaultValue="procurement@freshmart.example"
                />
              </Field>
            </div>
          </section>

          {/* Location */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="font-bold text-slate-900">
                Procurement Location
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Used to calculate distance and logistics suitability.
              </p>
            </div>

            <Field
              label="Primary Delivery Location"
              icon={<MapPin className="h-4 w-4" />}
            >
              <input
                className="input"
                defaultValue="Pune, Maharashtra"
              />
            </Field>
          </section>

          {/* Preferences */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="font-bold text-slate-900">
                Procurement Preferences
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Help Kisan Nexus improve your Smart Matches.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Preferred Crops">
                <select className="input" defaultValue="Vegetables">
                  <option>Vegetables</option>
                  <option>Grains</option>
                  <option>Fruits</option>
                  <option>Multiple Categories</option>
                </select>
              </Field>

              <Field label="Typical Order Size">
                <select className="input" defaultValue="500 - 1000 kg">
                  <option>Below 500 kg</option>
                  <option>500 - 1000 kg</option>
                  <option>1000 - 5000 kg</option>
                  <option>5000+ kg</option>
                </select>
              </Field>

              <Field label="Preferred Quality">
                <select className="input" defaultValue="Grade A">
                  <option>Premium</option>
                  <option>Grade A</option>
                  <option>Grade B</option>
                </select>
              </Field>

              <Field label="Preferred Supplier">
                <select className="input" defaultValue="FPO">
                  <option>FPO</option>
                  <option>Individual Farmer</option>
                  <option>Both</option>
                </select>
              </Field>
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
  icon,
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
        {icon}
        {label}
      </label>

      {children}
    </div>
  );
}