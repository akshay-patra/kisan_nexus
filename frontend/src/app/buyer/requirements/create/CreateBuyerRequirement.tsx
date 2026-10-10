// export default function CreateBuyerRequirement() {
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Create Requirement</h1>
//       <p className="text-gray-600">Post a new requirement.</p>
//     </div>
//   );
// }


"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Info,
  MapPin,
  Package,
  Sparkles,
} from "lucide-react";

export default function CreateBuyerRequirement() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-green-200 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <h1 className="mt-5 text-2xl font-bold text-slate-900">
              Requirement created successfully
            </h1>

            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
              Kisan Nexus is now finding the best farmer and FPO matches for
              your procurement requirement.
            </p>

            <div className="mt-6 rounded-xl bg-green-50 p-4 text-left">
              <div className="flex gap-3">
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />

                <div>
                  <p className="font-semibold text-green-900">
                    Smart Matching started
                  </p>

                  <p className="mt-1 text-sm text-green-800">
                    Your requirement will be ranked using price, distance,
                    quantity, quality and delivery suitability.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/buyer/requirements"
                className="rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-700"
              >
                View Requirements
              </Link>

              <Link
                href="/buyer/marketplace"
                className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Browse Marketplace
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="px-6 py-5 lg:px-8">
          <Link
            href="/buyer/dashboard"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>

          <div className="mt-5">
            <p className="text-sm font-medium text-green-600">
              Procurement
            </p>

            <h1 className="mt-1 text-2xl font-bold text-slate-900">
              Create Buyer Requirement
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Tell Kisan Nexus what produce you need.
            </p>
          </div>
        </div>
      </header>

      <div className="px-6 py-8 lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-4xl space-y-6"
        >
          {/* Product */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <Package className="h-5 w-5" />
              </div>

              <div>
                <h2 className="font-bold text-slate-900">
                  Product Requirements
                </h2>

                <p className="text-sm text-slate-500">
                  Specify the produce you want to procure.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Product" required>
                <select
                  required
                  className="input"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select product
                  </option>
                  <option>Tomatoes</option>
                  <option>Onions</option>
                  <option>Potatoes</option>
                  <option>Green Chilli</option>
                  <option>Wheat</option>
                  <option>Cauliflower</option>
                </select>
              </Field>

              <Field label="Required Quality" required>
                <select
                  required
                  className="input"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select quality
                  </option>
                  <option>Premium</option>
                  <option>Grade A</option>
                  <option>Grade B</option>
                </select>
              </Field>

              <Field label="Quantity Required" required>
                <div className="flex">
                  <input
                    required
                    type="number"
                    min="1"
                    placeholder="1000"
                    className="input rounded-r-none"
                  />

                  <select className="w-28 rounded-r-xl border border-l-0 border-slate-200 bg-slate-50 px-3 text-sm font-medium text-slate-700 outline-none">
                    <option>kg</option>
                    <option>tonnes</option>
                  </select>
                </div>
              </Field>

              <Field label="Target Price">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                    ₹
                  </span>

                  <input
                    type="number"
                    min="0"
                    placeholder="30"
                    className="input pl-9"
                  />

                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400">
                    / kg
                  </span>
                </div>
              </Field>
            </div>
          </section>

          {/* Delivery */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <MapPin className="h-5 w-5" />
              </div>

              <div>
                <h2 className="font-bold text-slate-900">
                  Delivery Requirements
                </h2>

                <p className="text-sm text-slate-500">
                  Tell suppliers where and when you need the produce.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Delivery Location" required>
                <input
                  required
                  type="text"
                  placeholder="Pune, Maharashtra"
                  className="input"
                />
              </Field>

              <Field label="Required By" required>
                <input
                  required
                  type="date"
                  className="input"
                />
              </Field>
            </div>
          </section>

          {/* Additional */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-bold text-slate-900">
              Additional Information
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Add any details that can help suppliers understand your
              requirement.
            </p>

            <textarea
              rows={5}
              placeholder="Example: Tomatoes should be fresh, clean and suitable for retail distribution."
              className="mt-5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-green-500"
            />
          </section>

          {/* Intelligence */}
          <section className="rounded-2xl border border-green-100 bg-green-50 p-5">
            <div className="flex gap-3">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />

              <div>
                <h3 className="font-semibold text-green-900">
                  What happens after you submit?
                </h3>

                <p className="mt-1 text-sm leading-6 text-green-800">
                  Kisan Nexus will compare available farmer and FPO supply
                  using price, distance, quantity, quality and delivery
                  suitability to generate your Smart Matches.
                </p>
              </div>
            </div>
          </section>

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <Link
              href="/buyer/dashboard"
              className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700"
            >
              Create Requirement
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
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}

        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      {children}
    </div>
  );
}