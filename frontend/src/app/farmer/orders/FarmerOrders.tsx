// export default function FarmerOrders() {
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Orders</h1>
//       <p className="text-gray-600">Track your sales and orders.</p>
//     </div>
//   );
// }


"use client";

import {
  Check,
  ChevronRight,
  Clock3,
  Package,
  Truck,
} from "lucide-react";

const orders = [
  {
    id: "KN-2026-00124",
    product: "Tomato",
    quantity: "500 kg",
    buyer: "Bulk Buyer",
    price: "₹24/kg",
    status: "AGGREGATING",
  },
  {
    id: "KN-2026-00117",
    product: "Onion",
    quantity: "400 kg",
    buyer: "Retail Buyer",
    price: "₹28/kg",
    status: "DISPATCHED",
  },
  {
    id: "KN-2026-00098",
    product: "Potato",
    quantity: "340 kg",
    buyer: "Wholesale Buyer",
    price: "₹21/kg",
    status: "DELIVERED",
  },
];

const stages = [
  "PENDING",
  "CONFIRMED",
  "AGGREGATING",
  "DISPATCHED",
  "DELIVERED",
];

export default function FarmerOrders() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">

      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Orders
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Track your matched produce orders from confirmation to delivery.
        </p>
      </div>

      <div className="mt-8 space-y-5">

        {orders.map((order) => {
          const currentIndex = stages.indexOf(order.status);

          return (
            <div
              key={order.id}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >

              <div className="flex flex-col justify-between gap-5 md:flex-row">

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">
                    <Package className="h-5 w-5 text-emerald-700" />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-slate-400">
                      {order.id}
                    </p>

                    <h2 className="mt-1 font-semibold">
                      {order.product} · {order.quantity}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      {order.buyer} · {order.price}
                    </p>
                  </div>

                </div>

                <span className="inline-flex h-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                  <Truck className="h-3.5 w-3.5" />
                  {order.status}
                </span>

              </div>

              {/* Timeline */}
              <div className="mt-8 overflow-x-auto">
                <div className="flex min-w-162.5 items-start">

                  {stages.map((stage, index) => {
                    const complete = index <= currentIndex;
                    const current = index === currentIndex;

                    return (
                      <div
                        key={stage}
                        className="relative flex flex-1 flex-col items-center"
                      >

                        {index !== stages.length - 1 && (
                          <div
                            className={`absolute left-1/2 top-4 h-0.5 w-full ${
                              index < currentIndex
                                ? "bg-emerald-500"
                                : "bg-slate-200"
                            }`}
                          />
                        )}

                        <div
                          className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                            complete
                              ? "border-emerald-600 bg-emerald-600 text-white"
                              : "border-slate-200 bg-white text-slate-300"
                          } ${current ? "ring-4 ring-emerald-100" : ""}`}
                        >
                          {complete ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Clock3 className="h-3.5 w-3.5" />
                          )}
                        </div>

                        <p
                          className={`mt-2 text-[10px] font-semibold ${
                            complete
                              ? "text-emerald-700"
                              : "text-slate-400"
                          }`}
                        >
                          {stage}
                        </p>

                      </div>
                    );
                  })}

                </div>
              </div>

              <button
                type="button"
                className="mt-6 flex items-center gap-1 text-sm font-semibold text-emerald-700"
              >
                View order details
                <ChevronRight className="h-4 w-4" />
              </button>

            </div>
          );
        })}

      </div>

    </div>
  );
}