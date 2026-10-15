// export default function FpoForecasting() {
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Forecasting</h1>
//       <p className="text-gray-600">Yield and demand forecasting.</p>
//     </div>
//   );
// }


"use client";

import {
  ArrowUpRight,
  BrainCircuit,
  CalendarDays,
  TrendingUp,
} from "lucide-react";

const forecast = [
  { day: "Today", demand: 4200 },
  { day: "Tomorrow", demand: 4600 },
  { day: "Day 3", demand: 4900 },
  { day: "Day 4", demand: 5200 },
  { day: "Day 5", demand: 5600 },
  { day: "Day 6", demand: 5900 },
  { day: "Day 7", demand: 6200 },
];

export default function FpoForecasting() {
  const max = Math.max(...forecast.map((item) => item.demand));

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="px-6 py-6 lg:px-8">
          <p className="text-sm font-medium text-green-600">
            AI Intelligence
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">
            Demand Forecasting
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Plan aggregation using predicted buyer demand.
          </p>
        </div>
      </header>

      <div className="space-y-6 px-6 py-6 lg:px-8">
        {/* AI summary */}
        <section className="rounded-2xl bg-slate-900 p-6 text-white shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-600">
                <BrainCircuit className="h-6 w-6" />
              </div>

              <div>
                <p className="text-sm font-semibold text-green-400">
                  AI Forecast
                </p>

                <h2 className="mt-1 text-xl font-bold">
                  Tomato demand expected to rise 48%
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
                  Based on recent buyer requirements and historical demand
                  patterns, the system recommends increasing tomato
                  aggregation over the next 7 days.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-white/10 px-5 py-4">
              <p className="text-xs text-slate-400">
                Recommended aggregation
              </p>

              <p className="mt-1 text-2xl font-bold">
                6.2 tonnes
              </p>
            </div>
          </div>
        </section>

        {/* Forecast chart */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                7-Day Tomato Demand
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Forecasted buyer demand in kilograms.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-green-600">
              <TrendingUp className="h-4 w-4" />
              +48%
            </div>
          </div>

          <div className="mt-8 flex h-64 items-end gap-3 sm:gap-5">
            {forecast.map((item) => {
              const height = Math.max(
                15,
                (item.demand / max) * 100,
              );

              return (
                <div
                  key={item.day}
                  className="flex flex-1 flex-col items-center justify-end"
                >
                  <p className="mb-2 text-xs font-semibold text-slate-600">
                    {(item.demand / 1000).toFixed(1)}T
                  </p>

                  <div
                    className="w-full max-w-14 rounded-t-lg bg-green-500"
                    style={{ height: `${height}%` }}
                  />

                  <p className="mt-3 text-[10px] font-medium text-slate-400 sm:text-xs">
                    {item.day}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Recommendations */}
        <section className="grid gap-5 md:grid-cols-3">
          <Recommendation
            title="Increase Tomato Supply"
            value="+1.8T"
            description="Additional aggregation recommended."
          />

          <Recommendation
            title="Secure Buyer Demand"
            value="6"
            description="Active buyer requirements match this crop."
          />

          <Recommendation
            title="Plan Logistics"
            value="3 routes"
            description="Recommended routes can combine deliveries."
          />
        </section>

        {/* Explanation */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <CalendarDays className="h-5 w-5 text-green-600" />

            <h2 className="font-bold text-slate-900">
              Why this forecast?
            </h2>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <Reason
              title="Buyer Requirements"
              text="Current buyer requirements indicate higher tomato demand."
            />

            <Reason
              title="Historical Pattern"
              text="Recent demand patterns show a consistent upward trend."
            />

            <Reason
              title="Available Supply"
              text="Current member supply can partially support the expected increase."
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function Recommendation({
  title,
  value,
  description,
}: {
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{title}</p>

      <p className="mt-2 text-2xl font-bold text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-xs leading-5 text-slate-500">
        {description}
      </p>

      <ArrowUpRight className="mt-4 h-4 w-4 text-green-600" />
    </div>
  );
}

function Reason({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <p className="text-sm font-semibold text-slate-900">
        {title}
      </p>

      <p className="mt-1 text-xs leading-5 text-slate-500">
        {text}
      </p>
    </div>
  );
}