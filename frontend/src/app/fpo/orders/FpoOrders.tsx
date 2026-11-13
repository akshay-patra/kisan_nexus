// export default function FpoOrders() {
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Orders</h1>
//       <p className="text-gray-600">Track FPO orders.</p>
//     </div>
//   );
// }


"use client";

import {
  CheckCircle2,
  Clock3,
  Package,
  Truck,
} from "lucide-react";

const orders = [
  {
    id: "FPO-ORD-1048",
    buyer: "FreshMart Retail",
    product: "Tomatoes",
    quantity: "4,000 kg",
    value: "₹1,12,000",
    status: "AGGREGATING",
    delivery: "12 Sep 2026",
  },
  {
    id: "FPO-ORD-1041",
    buyer: "Metro Foods",
    product: "Onions",
    quantity: "6,000 kg",
    value: "₹1,44,000",
    status: "CONFIRMED",
    delivery: "14 Sep 2026",
  },
  {
    id: "FPO-ORD-1037",
    buyer: "CityFresh",
    product: "Potatoes",
    quantity: "3,000 kg",
    value: "₹63,000",
    status: "DISPATCHED",
    delivery: "11 Sep 2026",
  },
  {
    id: "FPO-ORD-1030",
    buyer: "FreshBasket",
    product: "Green Chilli",
    quantity: "1,500 kg",
    value: "₹78,000",
    status: "DELIVERED",
    delivery: "09 Sep 2026",
  },
];

const steps = [
  "PENDING",
  "CONFIRMED",
  "AGGREGATING",
  "DISPATCHED",
  "DELIVERED",
];

export default function FpoOrders() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="px-6 py-6 lg:px-8">
          <p className="text-sm font-medium text-green-600">
            FPO Operations
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">
            Buyer Orders
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Coordinate orders from buyer confirmation to final delivery.
          </p>
        </div>
      </header>

      <div className="space-y-5 px-6 py-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <Stat label="Total Orders" value="32" />
          <Stat label="Active Orders" value="14" />
          <Stat label="Delivered" value="18" />
        </div>

        {orders.map((order) => {
          const currentStep = steps.indexOf(order.status);

          return (
            <section
              key={order.id}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="flex flex-col gap-5 border-b border-slate-100 p-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <Package className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="font-bold text-slate-900">
                        {order.id}
                      </h2>

                      <Status status={order.status} />
                    </div>

                    <p className="mt-1 text-sm text-slate-500">
                      {order.product} · {order.quantity}
                    </p>

                    <p className="mt-1 text-sm text-slate-600">
                      Buyer: {order.buyer}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5 sm:flex">
                  <Metric
                    label="Order Value"
                    value={order.value}
                  />

                  <Metric
                    label="Delivery"
                    value={order.delivery}
                  />
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold text-slate-900">
                  Order Lifecycle
                </p>

                <div className="mt-6 overflow-x-auto">
                  <div className="flex min-w-162.5 items-start">
                    {steps.map((step, index) => {
                      const completed = currentStep >= index;

                      return (
                        <div
                          key={step}
                          className="flex flex-1 items-start"
                        >
                          <div className="flex flex-col items-center">
                            <div
                              className={`flex h-9 w-9 items-center justify-center rounded-full ${
                                completed
                                  ? "bg-green-600 text-white"
                                  : "bg-slate-100 text-slate-400"
                              }`}
                            >
                              {completed ? (
                                <CheckCircle2 className="h-5 w-5" />
                              ) : (
                                <Clock3 className="h-4 w-4" />
                              )}
                            </div>

                            <p
                              className={`mt-2 text-[10px] font-semibold ${
                                completed
                                  ? "text-green-700"
                                  : "text-slate-400"
                              }`}
                            >
                              {step}
                            </p>
                          </div>

                          {index < steps.length - 1 && (
                            <div
                              className={`mt-4 h-0.5 flex-1 ${
                                currentStep > index
                                  ? "bg-green-600"
                                  : "bg-slate-100"
                              }`}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 rounded-xl bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <Truck className="h-5 w-5 text-green-600" />

                    <p className="text-sm text-slate-700">
                      {order.status === "DELIVERED"
                        ? "Order successfully delivered."
                        : "FPO coordination required for the next stage."}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
                  >
                    Manage Order
                  </button>
                </div>
              </div>
            </section>
          );
        })}
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

      <p className="mt-1 font-semibold text-slate-900">
        {value}
      </p>
    </div>
  );
}

function Status({ status }: { status: string }) {
  const styles: Record<string, string> = {
    PENDING: "bg-slate-100 text-slate-600",
    CONFIRMED: "bg-amber-50 text-amber-700",
    AGGREGATING: "bg-purple-50 text-purple-700",
    DISPATCHED: "bg-blue-50 text-blue-700",
    DELIVERED: "bg-green-50 text-green-700",
  };

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${styles[status]}`}
    >
      {status}
    </span>
  );
}