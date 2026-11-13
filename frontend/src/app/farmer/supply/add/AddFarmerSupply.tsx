"use client";

import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  IndianRupee,
  MapPin,
  Package,
  Scale,
} from "lucide-react";
import { useState } from "react";

export default function AddFarmerSupply() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
        <div className="rounded-2xl border border-emerald-100 bg-white p-8 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
            <CheckCircle2 className="h-8 w-8 text-emerald-600" />
          </div>

          <h1 className="mt-6 text-2xl font-bold">
            Supply added successfully
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Your produce is now available for matching with buyers and FPOs.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/farmer/supply"
              className="rounded-xl bg-[#12372A] px-5 py-3 text-sm font-semibold text-white"
            >
              View My Supply
            </Link>

            <Link
              href="/farmer/matches"
              className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700"
            >
              View Matches
            </Link>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8">

      <Link
        href="/farmer/supply"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to My Supply
      </Link>

      <div className="mt-6">
        <h1 className="text-3xl font-bold tracking-tight">
          Add Supply
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Tell buyers what produce you have available.
        </p>
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
        className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
      >

        <div className="grid gap-6 md:grid-cols-2">

          {/* Product */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium">
              Produce
            </label>

            <div className="relative">
              <Package className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />

              <select
                className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none focus:border-emerald-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Select produce
                </option>
                <option>Tomato</option>
                <option>Onion</option>
                <option>Potato</option>
                <option>Wheat</option>
                <option>Rice</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Quantity */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Quantity
            </label>

            <div className="relative">
              <Scale className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />

              <input
                type="number"
                placeholder="e.g. 500"
                className="h-12 w-full rounded-xl border border-slate-200 pl-11 pr-16 text-sm outline-none focus:border-emerald-500"
              />

              <span className="absolute right-4 top-3.5 text-sm text-slate-400">
                kg
              </span>
            </div>
          </div>

          {/* Quality */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Quality grade
            </label>

            <select
              className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-emerald-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select grade
              </option>
              <option>Grade A</option>
              <option>Grade B</option>
              <option>Grade C</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Expected price
            </label>

            <div className="relative">
              <IndianRupee className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />

              <input
                type="number"
                placeholder="e.g. 24"
                className="h-12 w-full rounded-xl border border-slate-200 pl-11 pr-16 text-sm outline-none focus:border-emerald-500"
              />

              <span className="absolute right-4 top-3.5 text-sm text-slate-400">
                / kg
              </span>
            </div>
          </div>

          {/* Available date */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Available date
            </label>

            <div className="relative">
              <CalendarDays className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />

              <input
                type="date"
                className="h-12 w-full rounded-xl border border-slate-200 pl-11 pr-4 text-sm outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Location */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium">
              Pickup location
            </label>

            <div className="relative">
              <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />

              <input
                type="text"
                placeholder="Village, Taluka, District"
                className="h-12 w-full rounded-xl border border-slate-200 pl-11 pr-4 text-sm outline-none focus:border-emerald-500"
              />
            </div>
          </div>

        </div>

        <div className="mt-8 rounded-xl bg-emerald-50 p-4">
          <p className="text-sm font-semibold text-emerald-900">
            How Kisan Nexus will use this
          </p>

          <p className="mt-1 text-xs leading-5 text-emerald-800">
            Your supply can be matched with buyer requirements based on
            price, distance, quantity, quality and delivery requirements.
          </p>
        </div>

        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

          <Link
            href="/farmer/supply"
            className="rounded-xl border border-slate-200 px-5 py-3 text-center text-sm font-semibold text-slate-700"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="rounded-xl bg-[#12372A] px-6 py-3 text-sm font-semibold text-white"
          >
            Add Supply
          </button>

        </div>

      </form>
    </div>
  );
}