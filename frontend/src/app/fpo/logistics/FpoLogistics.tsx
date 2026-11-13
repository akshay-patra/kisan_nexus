// export default function FpoLogistics() {
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Logistics</h1>
//       <p className="text-gray-600">Manage transportation and logistics.</p>
//     </div>
//   );
// }


"use client";

import {
  CheckCircle2,
  Clock3,
  MapPin,
  Navigation,
  Truck,
} from "lucide-react";

const routes = [
  {
    id: "RT-104",
    vehicle: "MH-15 AB 4821",
    driver: "Suresh More",
    route: "Nashik → Pune",
    load: "4,000 kg",
    stops: 3,
    status: "In Transit",
  },
  {
    id: "RT-108",
    vehicle: "MH-12 CD 7821",
    driver: "Prakash Jadhav",
    route: "Nashik → Mumbai",
    load: "6,000 kg",
    stops: 4,
    status: "Planned",
  },
  {
    id: "RT-111",
    vehicle: "MH-14 EF 9122",
    driver: "Ramesh Pawar",
    route: "Satara → Pune",
    load: "3,000 kg",
    stops: 2,
    status: "Delivered",
  },
];

export default function FpoLogistics() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="px-6 py-6 lg:px-8">
          <p className="text-sm font-medium text-green-600">
            Supply Chain
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">
            Logistics
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Coordinate pickups, routes and buyer deliveries.
          </p>
        </div>
      </header>

      <div className="space-y-6 px-6 py-6 lg:px-8">
        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-3">
          <Stat label="Active Routes" value="3" />
          <Stat label="Produce In Transit" value="8.4T" />
          <Stat label="On-Time Delivery" value="94%" />
        </div>

        {/* Route overview */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Navigation className="h-5 w-5" />
            </div>

            <div>
              <h2 className="font-bold text-slate-900">
                Route Optimization
              </h2>

              <p className="text-sm text-slate-500">
                Consolidated routes based on current orders.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-blue-50 p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold text-blue-900">
                  AI recommendation
                </p>

                <p className="mt-1 text-sm text-blue-800">
                  Combining 3 Pune-bound deliveries can reduce estimated
                  logistics cost by 11%.
                </p>
              </div>

              <button
                type="button"
                className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Apply Route
              </button>
            </div>
          </div>
        </section>

        {/* Routes */}
        <section className="space-y-4">
          {routes.map((route) => (
            <div
              key={route.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <Truck className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="font-bold text-slate-900">
                        {route.id}
                      </h2>

                      <Status status={route.status} />
                    </div>

                    <p className="mt-1 flex items-center gap-1 text-sm text-slate-600">
                      <MapPin className="h-4 w-4" />
                      {route.route}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5 text-sm sm:flex sm:items-center">
                  <Metric
                    label="Vehicle"
                    value={route.vehicle}
                  />

                  <Metric
                    label="Driver"
                    value={route.driver}
                  />

                  <Metric
                    label="Load"
                    value={route.load}
                  />

                  <Metric
                    label="Stops"
                    value={String(route.stops)}
                  />
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-5 text-sm text-slate-500">
                {route.status === "In Transit" ? (
                  <>
                    <Clock3 className="h-4 w-4 text-blue-600" />
                    Vehicle currently in transit
                  </>
                ) : route.status === "Delivered" ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Delivery completed successfully
                  </>
                ) : (
                  <>
                    <Clock3 className="h-4 w-4 text-amber-600" />
                    Route scheduled
                  </>
                )}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-bold text-slate-900">
        {value}
      </p>
    </div>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 font-semibold text-slate-800">
        {value}
      </p>
    </div>
  );
}

function Status({ status }: { status: string }) {
  const styles: Record<string, string> = {
    "In Transit": "bg-blue-50 text-blue-700",
    Planned: "bg-amber-50 text-amber-700",
    Delivered: "bg-green-50 text-green-700",
  };

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}