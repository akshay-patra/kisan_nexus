"use client";

import Link from "next/link";
import { ArrowRight, Check, Leaf, LockKeyhole, Mail, MapPin, Phone, User } from "lucide-react";
import { useState } from "react";

type Role = "FARMER" | "FPO" | "BUYER";

export default function Register() {
  const [role, setRole] = useState<Role>("FARMER");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  return (
    <main className="min-h-screen bg-[#F7FAF5] text-slate-900">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* LEFT PANEL */}
        <section className="relative hidden overflow-hidden bg-[#12372A] lg:flex">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(72,187,120,0.25),transparent_45%)]" />

          <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">

            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <Leaf className="h-6 w-6 text-emerald-300" />
              </div>

              <div>
                <div className="text-xl font-bold text-white">
                  Kisan Nexus
                </div>

                <div className="text-xs text-emerald-200">
                  Predict • Aggregate • Match • Optimize
                </div>
              </div>
            </Link>

            <div className="max-w-xl">

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Join Kisan Nexus
              </p>

              <h1 className="text-4xl font-bold leading-tight text-white xl:text-5xl">
                Bring your produce
                <br />
                closer to the market.
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
                Connect with farmers, FPOs and buyers through
                one digital marketplace built around smarter
                supply and demand.
              </p>

              <div className="mt-10 space-y-4">

                {[
                  "Better supply discovery",
                  "Smart buyer matching",
                  "FPO aggregation",
                  "Optimized logistics",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-200"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15">
                      <Check className="h-4 w-4 text-emerald-300" />
                    </div>

                    {item}
                  </div>
                ))}

              </div>
            </div>

            <div className="text-sm text-slate-400">
              © {new Date().getFullYear()} Kisan Nexus
            </div>

          </div>
        </section>

        {/* RIGHT PANEL */}
        <section className="flex items-center justify-center px-6 py-10 sm:px-10">
          <div className="w-full max-w-xl">

            {/* Mobile logo */}
            <div className="mb-8 lg:hidden">
              <Link href="/" className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
                  <Leaf className="h-5 w-5 text-emerald-700" />
                </div>

                <span className="text-xl font-bold">
                  Kisan Nexus
                </span>

              </Link>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight">
                Create your account
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Join the Kisan Nexus marketplace.
              </p>
            </div>

            {/* ROLE SELECTION */}
            <div className="mb-7">
              <label className="mb-3 block text-sm font-medium text-slate-700">
                I am registering as
              </label>

              <div className="grid grid-cols-3 gap-3">

                {[
                  {
                    value: "FARMER" as Role,
                    title: "Farmer",
                    description: "Sell produce",
                  },
                  {
                    value: "FPO" as Role,
                    title: "FPO",
                    description: "Aggregate supply",
                  },
                  {
                    value: "BUYER" as Role,
                    title: "Buyer",
                    description: "Buy produce",
                  },
                ].map((item) => (

                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setRole(item.value)}
                    className={`rounded-xl border p-4 text-left transition ${
                      role === item.value
                        ? "border-emerald-500 bg-emerald-50 ring-2 ring-emerald-500/10"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">

                      <span
                        className={`text-sm font-semibold ${
                          role === item.value
                            ? "text-emerald-800"
                            : "text-slate-800"
                        }`}
                      >
                        {item.title}
                      </span>

                      {role === item.value && (
                        <Check className="h-4 w-4 text-emerald-600" />
                      )}

                    </div>

                    <p className="mt-1 text-xs text-slate-500">
                      {item.description}
                    </p>
                  </button>

                ))}

              </div>
            </div>

            {/* FORM */}
            <form className="space-y-5">

              {/* NAME */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full name
                </label>

                <div className="relative">
                  <User className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                  />
                </div>
              </div>

              {/* MOBILE */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Mobile number
                </label>

                <div className="flex gap-2">

                  <div className="relative flex-1">
                    <Phone className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />

                    <input
                      type="tel"
                      placeholder="Enter mobile number"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => setOtpSent(true)}
                    className="h-12 rounded-xl border border-emerald-600 px-4 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
                  >
                    {otpSent ? "Resend OTP" : "Send OTP"}
                  </button>

                </div>
              </div>

              {/* OTP */}
              {otpSent && (
                <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">

                  <div className="mb-3 flex items-center justify-between">

                    <div>
                      <p className="text-sm font-semibold text-emerald-900">
                        Verify mobile number
                      </p>

                      <p className="mt-1 text-xs text-emerald-700">
                        Enter the 6-digit OTP sent to your mobile.
                      </p>
                    </div>

                    {otpVerified && (
                      <div className="flex items-center gap-1 text-xs font-semibold text-emerald-700">
                        <Check className="h-4 w-4" />
                        Verified
                      </div>
                    )}

                  </div>

                  <div className="flex gap-2">

                    <input
                      type="text"
                      maxLength={6}
                      placeholder="123456"
                      className="h-11 flex-1 rounded-lg border border-emerald-200 bg-white px-4 text-sm tracking-[0.3em] outline-none focus:border-emerald-500"
                    />

                    <button
                      type="button"
                      onClick={() => setOtpVerified(true)}
                      className="h-11 rounded-lg bg-emerald-700 px-4 text-sm font-semibold text-white hover:bg-emerald-800"
                    >
                      Verify
                    </button>

                  </div>

                </div>
              )}

              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email address
                  <span className="ml-1 text-xs font-normal text-slate-400">
                    (optional)
                  </span>
                </label>

                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                  />
                </div>
              </div>

              {/* LOCATION */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Location
                </label>

                <div className="relative">
                  <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />

                  <input
                    type="text"
                    placeholder="City / District / State"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />

                  <input
                    type="password"
                    placeholder="Minimum 8 characters"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                  />
                </div>
              </div>

              {/* PASSWORD CONFIRMATION */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Confirm password
                </label>

                <div className="relative">
                  <LockKeyhole className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />

                  <input
                    type="password"
                    placeholder="Re-enter your password"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                  />
                </div>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#12372A] text-sm font-semibold text-white transition hover:bg-[#0d2b20]"
              >
                Create account
                <ArrowRight className="h-4 w-4" />
              </button>

            </form>

            <p className="mt-8 text-center text-sm text-slate-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Login
              </Link>
            </p>

          </div>
        </section>
      </div>
    </main>
  );
}