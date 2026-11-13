// export default function BuyerOrders() {
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Orders</h1>
//       <p className="text-gray-600">Track your purchases.</p>
//     </div>
//   );
// }


"use client";

import {
  CheckCircle2,
  Clock3,
  MapPin,
  Package,
  Truck,
  ChevronRight,
} from "lucide-react";

const orders = [
  {
    id: "KN-2026-1048",
    product: "Fresh Tomatoes",
    supplier: "Green Valley FPO",
    quantity: "500 kg",
    amount: "₹14,000",
    location: "Nashik → Pune",
    delivery: "12 Sep 2026",
    status: "DISPATCHED",
    progress: 75,
  },
  {
    id: "KN-2026-1041",
    product: "Onions",
    supplier: "Maharashtra Farmers Group",
    quantity: "800 kg",
    amount: "₹19,200",
    location: "Pune → Mumbai",
    delivery: "14 Sep 2026",
    status: "CONFIRMED",
    progress: 40,
  },
  {
    id: "KN-2026-1035",
    product: "Potatoes",
    supplier: "Kisan Samruddhi FPO",
    quantity: "1,200 kg",
    amount: "₹25,200",
    location: "Satara → Pune",
    delivery: "08 Sep 2026",
    status: "DELIVERED",
    progress: 100,
  },
];

const steps = [
  "PENDING",
  "CONFIRMED",
  "AGGREGATING",
  "DISPATCHED",
  "DELIVERED",
];

export default function BuyerOrders() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="px-6 py-6 lg:px-8">
          <p className="text-sm font-medium text-green-600">
            Procurement
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">
            My Orders
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Track your procurement orders from confirmation to delivery.
          </p>
        </div>
      </header>

      <div className="space-y-6 px-6 py-6 lg:px-8">
        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-3">
          <Stat label="Total Orders" value="18" />
          <Stat label="In Progress" value="6" />
          <Stat label="Delivered" value="12" />
        </div>

        {/* Orders */}
        <div className="space-y-5">
          {orders.map((order) => (
            <section
              key={order.id}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="flex flex-col gap-5 border-b border-slate-100 p-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <Package className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="font-bold text-slate-900">
                        {order.product}
                      </h2>

                      <Status status={order.status} />
                    </div>

                    <p className="mt-1 text-sm text-slate-500">
                      Order #{order.id}
                    </p>

                    <p className="mt-1 text-sm text-slate-600">
                      {order.supplier}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5 text-sm sm:flex sm:items-center">
                  <div>
                    <p className="text-xs text-slate-500">Quantity</p>
                    <p className="mt-1 font-semibold text-slate-900">
                      {order.quantity}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Amount</p>
                    <p className="mt-1 font-semibold text-slate-900">
                      {order.amount}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Delivery</p>
                    <p className="mt-1 font-semibold text-slate-900">
                      {order.delivery}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Route */}
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <MapPin className="h-4 w-4 text-green-600" />
                  {order.location}
                </div>

                {/* Progress */}
                <div className="mt-7">
                  <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                    <span>Order Progress</span>
                    <span>{order.progress}% complete</span>
                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-green-600 transition-all"
                      style={{ width: `${order.progress}%` }}
                    />
                  </div>
                </div>

                {/* Timeline */}
                <div className="mt-8 overflow-x-auto">
                  <div className="flex min-w-162.5 items-start">
                    {steps.map((step, index) => {
                      const completed =
                        steps.indexOf(order.status) >= index;

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
                              className={`mt-2 text-center text-[10px] font-semibold ${
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
                                steps.indexOf(order.status) > index
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

                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {order.status === "DELIVERED"
                          ? "Order delivered successfully"
                          : `Expected delivery: ${order.delivery}`}
                      </p>

                      <p className="text-xs text-slate-500">
                        Kisan Nexus logistics tracking
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-green-700"
                  >
                    View Details
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </section>
          ))}
        </div>
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
      <p className="mt-1 text-2xl font-bold text-slate-900">{value}</p>
    </div>
  );
}

function Status({ status }: { status: string }) {
  const styles: Record<string, string> = {
    CONFIRMED: "bg-amber-50 text-amber-700",
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