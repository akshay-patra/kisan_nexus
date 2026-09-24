// import Link from 'next/link';

// export default function Home() {
//   return (
//     <div className="min-h-screen flex flex-col items-center p-8 bg-gray-50">
//       <header className="w-full max-w-4xl flex justify-between items-center mb-16">
//         <h1 className="text-3xl font-bold text-green-700">Kisan Nexus</h1>
//         <Link href="/login" className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
//           Login
//         </Link>
//       </header>

//       <main className="w-full max-w-4xl space-y-16">
//         <section className="text-center">
//           <h2 className="text-4xl font-bold mb-4">Empowering Agriculture</h2>
//           <p className="text-xl text-gray-600 mb-8">
//             A comprehensive platform connecting Farmers, FPOs, and Buyers for a transparent, efficient, and profitable agricultural ecosystem.
//           </p>
//           <Link href="/login" className="px-8 py-3 bg-green-600 text-white rounded text-lg hover:bg-green-700">
//             Get Started
//           </Link>
//         </section>

//         <section>
//           <h3 className="text-2xl font-semibold mb-4">How it works</h3>
//           <div className="p-6 bg-white rounded shadow text-gray-500">[Placeholder: How it works content]</div>
//         </section>

//         <section>
//           <h3 className="text-2xl font-semibold mb-4">For Farmers</h3>
//           <div className="p-6 bg-white rounded shadow text-gray-500">[Placeholder: For Farmers content]</div>
//         </section>

//         <section>
//           <h3 className="text-2xl font-semibold mb-4">For FPOs</h3>
//           <div className="p-6 bg-white rounded shadow text-gray-500">[Placeholder: For FPOs content]</div>
//         </section>

//         <section>
//           <h3 className="text-2xl font-semibold mb-4">For Buyers</h3>
//           <div className="p-6 bg-white rounded shadow text-gray-500">[Placeholder: For Buyers content]</div>
//         </section>

//         <section>
//           <h3 className="text-2xl font-semibold mb-4">Impact</h3>
//           <div className="p-6 bg-white rounded shadow text-gray-500">[Placeholder: Impact content]</div>
//         </section>
//       </main>
//     </div>
//   );
// }









"use client";

import {
  ArrowRight,
  BarChart3,
  Boxes,
  CheckCircle2,
  ChevronRight,
  Leaf,
  MapPin,
  Menu,
  Route,
  Sparkles,
  TrendingUp,
  Truck,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// Commented by agent, reason: Updating RoleCard usages to include href prop for redirection
//           <div className="mt-12 grid gap-5 md:grid-cols-3">
//             <RoleCard
//               icon={<Leaf className="h-6 w-6" />}
//               title="Farmers"
//               description="List available produce, understand demand and discover relevant buyer opportunities."
//             />
// 
//             <RoleCard
//               icon={<Boxes className="h-6 w-6" />}
//               title="FPOs"
//               description="Aggregate fragmented supply, coordinate quality and fulfill larger buyer requirements."
//             />
// 
//             <RoleCard
//               icon={<Users className="h-6 w-6" />}
//               title="Buyers"
//               description="Post requirements and find coordinated supply based on practical matching criteria."
//             />
//           </div>
// End commented by agent

// Commented by agent, reason: Replace text logo with image logo in navbar
//           <a href="/" className="flex items-center gap-2.5">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#176b3a] text-white shadow-sm">
//               <Leaf className="h-5 w-5" />
//             </div>
// 
//             <div>
//               <div className="text-lg font-bold tracking-tight">
//                 Kisan <span className="text-[#176b3a]">Nexus</span>
//               </div>
//               <div className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-[#718071] sm:block">
//                 Farm to market
//               </div>
//             </div>
//           </a>
// End commented by agent

  return (
    <main className="min-h-screen bg-[#f7faf5] text-[#17221a]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-[#dce7dc]/80 bg-[#f7faf5]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="/" className="flex items-center gap-2.5">
            <img 
              src="/kisan_nexus_web_logo.png" 
              alt="Kisan Nexus Logo" 
              className="h-12 w-auto" 
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#how-it-works" className="nav-link">
              How it works
            </a>
            <a href="#technology" className="nav-link">
              Technology
            </a>
            <a href="#impact" className="nav-link">
              Impact
            </a>
            <a href="#roles" className="nav-link">
              For everyone
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/login"
              className="rounded-xl px-4 py-2.5 text-sm font-semibold text-[#24502f] transition hover:bg-[#eaf2e9]"
            >
              Login
            </a>

            <a
              href="/login"
              className="rounded-xl bg-[#176b3a] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#12592f] hover:shadow-md"
            >
              Get started
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            className="rounded-xl p-2 text-[#24452d] md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-[#dce7dc] bg-[#f7faf5] px-5 py-5 md:hidden">
            <div className="flex flex-col gap-2">
              <a
                href="#how-it-works"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                How it works
              </a>
              <a
                href="#technology"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Technology
              </a>
              <a
                href="#impact"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Impact
              </a>
              <a
                href="/login"
                className="mt-2 rounded-xl bg-[#176b3a] px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Get started
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 -z-10 h-150 w-225 -translate-x-1/2 rounded-full bg-[#dff0df] opacity-60 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-28 lg:pt-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#cfe2d0] bg-white/70 px-3.5 py-2 text-xs font-semibold text-[#176b3a] shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Smarter agricultural supply chains
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-[#17221a] sm:text-6xl lg:text-7xl">
              From farm supply
              <br />
              <span className="text-[#176b3a]">to real demand.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#607064] sm:text-xl">
              Kisan Nexus connects fragmented farm supply with buyers through
              demand forecasting, intelligent matching, aggregation, and
              optimized logistics.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/login"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#176b3a] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#176b3a]/15 transition hover:-translate-y-0.5 hover:bg-[#12592f]"
              >
                Get started
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#cad9ca] bg-white px-6 py-3.5 text-sm font-bold text-[#23442b] transition hover:border-[#a9c2aa] hover:bg-[#f1f7f0]"
              >
                See how it works
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#667568]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#176b3a]" />
                Farmer-first
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#176b3a]" />
                Data-driven
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#176b3a]" />
                Logistics-aware
              </div>
            </div>
          </div>

          {/* HERO PRODUCT VISUAL */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-4xl bg-[#cfe7d1]/50 blur-2xl" />

            <div className="relative rounded-4xl border border-[#d5e2d5] bg-white p-5 shadow-2xl shadow-[#23442b]/10 sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#879488]">
                    Live supply network
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#1d2c21]">
                    Tomato • Maharashtra
                  </p>
                </div>

                <div className="rounded-full bg-[#e7f5e9] px-3 py-1.5 text-xs font-bold text-[#176b3a]">
                  94% match
                </div>
              </div>

              <div className="space-y-3">
                <SupplyCard
                  icon={<Leaf className="h-4 w-4" />}
                  label="Farmer supply"
                  value="500 kg"
                  detail="Solapur"
                />

                <div className="ml-7 h-5 border-l border-dashed border-[#aac4ad]" />

                <SupplyCard
                  icon={<Boxes className="h-4 w-4" />}
                  label="FPO aggregation"
                  value="1,000 kg"
                  detail="3 farmer sources"
                  highlighted
                />

                <div className="ml-7 h-5 border-l border-dashed border-[#aac4ad]" />

                <SupplyCard
                  icon={<Users className="h-4 w-4" />}
                  label="Buyer requirement"
                  value="1,000 kg"
                  detail="Pune"
                />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-[#f4f8f3] p-4">
                  <div className="flex items-center gap-2 text-[#758176]">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-xs font-semibold">Demand</span>
                  </div>
                  <p className="mt-2 text-lg font-bold text-[#1c3021]">
                    +18%
                  </p>
                  <p className="text-[11px] text-[#819083]">7-day forecast</p>
                </div>

                <div className="rounded-2xl bg-[#f4f8f3] p-4">
                  <div className="flex items-center gap-2 text-[#758176]">
                    <Route className="h-4 w-4" />
                    <span className="text-xs font-semibold">Route</span>
                  </div>
                  <p className="mt-2 text-lg font-bold text-[#1c3021]">
                    Optimized
                  </p>
                  <p className="text-[11px] text-[#819083]">Pickup sequence</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 -top-5 hidden rounded-2xl border border-[#d8e5d7] bg-white px-4 py-3 shadow-xl sm:block">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e7f5e9]">
                  <BarChart3 className="h-4 w-4 text-[#176b3a]" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[#89958a]">
                    Forecast
                  </p>
                  <p className="text-sm font-bold text-[#1d2c21]">
                    7 days ahead
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-[#d8e5d7] bg-white px-4 py-3 shadow-xl sm:block">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e7f5e9]">
                  <Truck className="h-4 w-4 text-[#176b3a]" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[#89958a]">
                    Logistics
                  </p>
                  <p className="text-sm font-bold text-[#1d2c21]">
                    Route optimized
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT FLOW */}
      <section
        id="how-it-works"
        className="border-y border-[#dfe9df] bg-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="section-eyebrow">How it works</p>
            <h2 className="section-title">
              One connected flow from prediction to delivery.
            </h2>
            <p className="section-description">
              Kisan Nexus brings together the pieces that usually operate
              separately across the agricultural supply chain.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <ProcessCard
              number="01"
              icon={<TrendingUp className="h-5 w-5" />}
              title="Predict"
              description="Estimate near-term demand using historical and sample market data."
            />

            <ProcessCard
              number="02"
              icon={<Boxes className="h-5 w-5" />}
              title="Aggregate"
              description="Pool fragmented farmer supply through FPOs for larger requirements."
            />

            <ProcessCard
              number="03"
              icon={<Sparkles className="h-5 w-5" />}
              title="Match"
              description="Find explainable matches using price, distance, quantity, quality and delivery."
            />

            <ProcessCard
              number="04"
              icon={<Route className="h-5 w-5" />}
              title="Optimize"
              description="Plan pickup sequences and reduce unnecessary logistics movement."
            />
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section id="technology" className="bg-[#f7faf5]">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-28">
          <div>
            <p className="section-eyebrow">Built for smarter decisions</p>

            <h2 className="section-title">
              Turn fragmented supply into a coordinated network.
            </h2>

            <p className="section-description">
              Instead of treating supply, demand, aggregation and logistics as
              separate problems, Kisan Nexus connects them into one workflow.
            </p>

            <div className="mt-9 space-y-5">
              <FeatureRow
                icon={<BarChart3 className="h-5 w-5" />}
                title="Demand forecasting"
                description="A simple, explainable 7-day forecast helps teams plan before demand arrives."
              />

              <FeatureRow
                icon={<Sparkles className="h-5 w-5" />}
                title="Explainable matching"
                description="Every match can show why it was selected instead of hiding the decision behind a black box."
              />

              <FeatureRow
                icon={<Route className="h-5 w-5" />}
                title="Route optimization"
                description="Pickup sequences are planned around distance, duration and vehicle capacity."
              />
            </div>
          </div>

          <div className="rounded-4xl border border-[#d5e2d5] bg-white p-6 shadow-xl shadow-[#23442b]/5 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#879488]">
                  Demand forecast
                </p>
                <h3 className="mt-1 text-xl font-bold text-[#1d2c21]">
                  Tomato · Next 7 days
                </h3>
              </div>

              <div className="rounded-xl bg-[#e8f5e9] px-3 py-2 text-xs font-bold text-[#176b3a]">
                Prototype estimate
              </div>
            </div>

            <div className="mt-8 flex h-52 items-end gap-3">
              {[42, 54, 48, 67, 61, 78, 88].map((height, index) => (
                <div key={index} className="flex flex-1 flex-col items-center gap-2">
                  <div className="flex h-44 w-full items-end rounded-xl bg-[#f0f5ef]">
                    <div
                      className="w-full rounded-xl bg-[#3d915d] transition-all"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-semibold text-[#89958a]">
                    D{index + 1}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Metric label="Expected demand" value="1,240 kg" />
              <Metric label="Trend" value="+18.4%" />
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" className="bg-[#173c25] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a9d8b3]">
                Measure the difference
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
                Better coordination.
                <br />
                Measurable impact.
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-[#c4d8c7]">
                Kisan Nexus makes the operational impact visible—from
                aggregated produce to matched orders and estimated logistics
                savings.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <ImpactCard value="500+" label="Farmers connected" />
              <ImpactCard value="10K+" label="Kg produce aggregated" />
              <ImpactCard value="24%" label="Estimated logistics savings" />
            </div>
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section id="roles" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-eyebrow">One platform, different needs</p>
            <h2 className="section-title">
              Built around the people moving food through the market.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <RoleCard
              icon={<Leaf className="h-6 w-6" />}
              title="Farmers"
              description="List available produce, understand demand and discover relevant buyer opportunities."
              href="/farmer/dashboard"
            />

            <RoleCard
              icon={<Boxes className="h-6 w-6" />}
              title="FPOs"
              description="Aggregate fragmented supply, coordinate quality and fulfill larger buyer requirements."
              href="/fpo/dashboard"
            />

            <RoleCard
              icon={<Users className="h-6 w-6" />}
              title="Buyers"
              description="Post requirements and find coordinated supply based on practical matching criteria."
              href="/buyer/dashboard"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#f7faf5]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="relative overflow-hidden rounded-4xl bg-[#176b3a] px-6 py-14 text-center text-white shadow-2xl shadow-[#176b3a]/15 sm:px-12">
            <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-black/10 blur-2xl" />

            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#bce1c3]">
                Kisan Nexus
              </p>

              <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
                Build a more connected path from farm to market.
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-7 text-[#d3ead7]">
                Predict demand. Aggregate supply. Match intelligently.
                Optimize delivery.
              </p>

              <a
                href="/login"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#176b3a] transition hover:-translate-y-0.5 hover:bg-[#f0f7f0]"
              >
                Get started
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#dfe9df] bg-[#f7faf5]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#176b3a] text-white">
                <Leaf className="h-4 w-4" />
              </div>
              <span className="font-bold text-[#1d2c21]">Kisan Nexus</span>
            </div>
            <p className="mt-2 text-xs text-[#7c897d]">
              Smarter connections across the agricultural supply chain.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-xs font-semibold text-[#647166]">
            <a href="#how-it-works" className="hover:text-[#176b3a]">
              How it works
            </a>
            <a href="#technology" className="hover:text-[#176b3a]">
              Technology
            </a>
            <a href="#impact" className="hover:text-[#176b3a]">
              Impact
            </a>
            <a href="/login" className="hover:text-[#176b3a]">
              Login
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SupplyCard({
  icon,
  label,
  value,
  detail,
  highlighted = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  detail: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border p-4 ${
        highlighted
          ? "border-[#b8d9bd] bg-[#f0f8f1]"
          : "border-[#e2eae1] bg-[#fafcf9]"
      }`}
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#e7f5e9] text-[#176b3a]">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold text-[#788579]">{label}</p>
        <p className="mt-0.5 font-bold text-[#1d2c21]">{value}</p>
      </div>

      <div className="text-right">
        <p className="flex items-center gap-1 text-xs font-semibold text-[#748176]">
          <MapPin className="h-3 w-3" />
          {detail}
        </p>
      </div>
    </div>
  );
}

function ProcessCard({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-[#dce7dc] bg-[#f9fbf8] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#b9d4bc] hover:bg-white hover:shadow-xl hover:shadow-[#23442b]/5">
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e7f5e9] text-[#176b3a]">
          {icon}
        </div>
        <span className="text-xs font-bold text-[#a2afa3]">{number}</span>
      </div>

      <h3 className="mt-6 text-lg font-bold text-[#1d2c21]">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-[#718071]">{description}</p>
    </div>
  );
}

function FeatureRow({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e7f5e9] text-[#176b3a]">
        {icon}
      </div>

      <div>
        <h3 className="font-bold text-[#1d2c21]">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-[#718071]">
          {description}
        </p>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-[#f4f8f3] p-4">
      <p className="text-xs font-semibold text-[#839084]">{label}</p>
      <p className="mt-1 text-lg font-bold text-[#1d2c21]">{value}</p>
    </div>
  );
}

function ImpactCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
      <p className="text-3xl font-bold tracking-tight">{value}</p>
      <p className="mt-2 text-sm text-[#c3dac7]">{label}</p>
    </div>
  );
}

// Commented by agent, reason: Add href prop to RoleCard to support dynamic redirection
// function RoleCard({
//   icon,
//   title,
//   description,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
// }) {
//   return (
//     <div className="rounded-2xl border border-[#dce7dc] bg-[#f9fbf8] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#b9d4bc] hover:bg-white hover:shadow-xl hover:shadow-[#23442b]/5">
//       <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e7f5e9] text-[#176b3a]">
//         {icon}
//       </div>
// 
//       <h3 className="mt-6 text-xl font-bold text-[#1d2c21]">{title}</h3>
// 
//       <p className="mt-3 text-sm leading-6 text-[#718071]">{description}</p>
// 
//       <a
//         href="/login"
//         className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[#176b3a]"
//       >
//         Get started
//         <ArrowRight className="h-4 w-4" />
//       </a>
//     </div>
//   );
// }
// End commented by agent
function RoleCard({
  icon,
  title,
  description,
  href = "/login",
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}) {
  return (
    <div className="rounded-2xl border border-[#dce7dc] bg-[#f9fbf8] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#b9d4bc] hover:bg-white hover:shadow-xl hover:shadow-[#23442b]/5">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e7f5e9] text-[#176b3a]">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-bold text-[#1d2c21]">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-[#718071]">{description}</p>

      <a
        href={href}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[#176b3a]"
      >
        Get started
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}