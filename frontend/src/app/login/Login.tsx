"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, LockKeyhole, Phone } from "lucide-react";
import { useState } from "react";

export default function Login() {
  const [loginMethod, setLoginMethod] = useState<"mobile" | "email">("mobile");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [isReadOnly, setIsReadOnly] = useState(true);

  return (
    <main className="min-h-screen bg-[#F7FAF5] text-slate-900">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left — Brand */}
        <section className="relative hidden overflow-hidden bg-[#12372A] lg:flex">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(72,187,120,0.25),transparent_45%)]" />

          <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">

            <Link href="/" className="group flex items-center gap-3 transition-opacity hover:opacity-95">
              <Image
                src="/kisan_nexus_logo_white_bg.png"
                alt="Kisan Nexus Logo"
                width={48}
                height={48}
                priority
                className="h-12 w-12 rounded-xl object-contain shadow-xs transition-transform group-hover:scale-105"
              />

              <div>
                <div className="text-xl font-bold text-white">
                  Kisan Nexus
                </div>
                <div className="text-xs text-emerald-200">
                  Demand-Driven Agri Commerce
                </div>
              </div>
            </Link>

            <div className="max-w-xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Welcome back
              </p>

              <h1 className="text-4xl font-bold leading-tight text-white xl:text-5xl">
                Connect better.
                <br />
                Trade smarter.
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
                Access your Kisan Nexus marketplace, supply,
                orders, matching and logistics tools from one place.
              </p>
            </div>

            <div className="text-sm text-slate-400">
              © {new Date().getFullYear()} Kisan Nexus
            </div>
          </div>
        </section>

        {/* Right — Login */}
        <section className="flex items-center justify-center px-6 py-12 sm:px-10">
          <div className="w-full max-w-md">

            <div className="mb-8 lg:hidden">
              <Link href="/" className="group flex items-center gap-3 transition-opacity hover:opacity-95">
                <Image
                  src="/kisan_nexus_web_logo.png"
                  alt="Kisan Nexus Logo"
                  width={40}
                  height={40}
                  priority
                  className="h-10 w-10 rounded-xl object-contain shadow-xs"
                />

                <span className="text-xl font-bold text-slate-900">
                  Kisan <span className="text-[#176b3a]">Nexus</span>
                </span>
              </Link>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight">
                Welcome back
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Login to continue to your Kisan Nexus account.
              </p>
            </div>

            {/* Login method */}
            <div className="mb-6 grid grid-cols-2 rounded-xl bg-slate-100 p-1">
              <button
                type="button"
                onClick={() => {
                  setLoginMethod("mobile");
                  setIdentifier("");
                }}
                className={`rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                  loginMethod === "mobile"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500"
                }`}
              >
                Mobile
              </button>

              <button
                type="button"
                onClick={() => {
                  setLoginMethod("email");
                  setIdentifier("");
                }}
                className={`rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                  loginMethod === "email"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500"
                }`}
              >
                Email
              </button>
            </div>

            <form className="space-y-5" autoComplete="on">

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  {loginMethod === "mobile"
                    ? "Mobile number"
                    : "Email address"}
                </label>

                <div className="relative">
                  {loginMethod === "mobile" ? (
                    <Phone className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                  ) : (
                    <span className="absolute left-3 top-3.5 text-sm text-slate-400">
                      @
                    </span>
                  )}

                  <input
                    id={loginMethod === "mobile" ? "login-mobile" : "login-email"}
                    name={loginMethod === "mobile" ? "tel" : "email"}
                    type={loginMethod === "mobile" ? "tel" : "email"}
                    autoComplete={loginMethod === "mobile" ? "tel" : "email"}
                    readOnly={isReadOnly}
                    onFocus={() => setIsReadOnly(false)}
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder={
                      loginMethod === "mobile"
                        ? "Enter mobile number"
                        : "Enter email address"
                    }
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-sm font-medium text-emerald-700 hover:text-emerald-800"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="relative">
                  <LockKeyhole className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />

                  <input
                    id="login-password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    readOnly={isReadOnly}
                    onFocus={() => setIsReadOnly(false)}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#12372A] text-sm font-semibold text-white transition hover:bg-[#0d2b20]"
              >
                Login
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-xs text-slate-400">OR</span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <p className="text-center text-sm text-slate-500">
              Don&apos;t have a Kisan Nexus account?{" "}
              <Link
                href="/register"
                className="font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Create account
              </Link>
            </p>

          </div>
        </section>
      </div>
    </main>
  );
}
