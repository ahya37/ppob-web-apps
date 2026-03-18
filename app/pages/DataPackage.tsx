import { View, Product } from "@/types";
import React, { useState } from "react";
import { useSession } from "../utils";
import { LoginRequired } from "./components";

interface DataPackageProps {
  onNavigate: (view: View, product: Product) => void;
  onBack: () => void;
}

const DATA_PRODUCTS: Product[] = [
  {
    id: "d1",
    nominal: "Internet 5GB",
    price: 25000,
    description: "Quota Main 5GB + 2GB Chat",
    validity: "30 Days",
  },
  {
    id: "d2",
    nominal: "Internet 12GB",
    price: 52000,
    label: "POPULAR",
    description: "Quota Main 12GB",
    validity: "30 Days",
  },
  {
    id: "d3",
    nominal: "Internet 30GB",
    price: 95000,
    label: "BEST VALUE",
    description: "Quota Main 30GB + Unlimited Video",
    validity: "30 Days",
  },
  {
    id: "d4",
    nominal: "Daily 1GB",
    price: 5000,
    description: "Quota Main 1GB",
    validity: "1 Day",
  },
];

const DataPackage: React.FC<DataPackageProps> = ({ onNavigate, onBack }) => {
  const [phone, setPhone] = useState("0812 3456 7890");
  const [selectedId, setSelectedId] = useState("d2");
  const { isLogin } = useSession();

  if (!isLogin) {
    return (
      <LoginRequired
        description="Silahkan login untuk mengakses paket data dan melanjutkan transaksi."
        onNavigate={(v) => onNavigate(v, DATA_PRODUCTS[0])}
        onBack={onBack}
      />
    );
  }

  const activeProduct =
    DATA_PRODUCTS.find((p) => p.id === selectedId) || DATA_PRODUCTS[0];

  return (
    <div className="flex-1 bg-background-light dark:bg-background-dark min-h-screen">
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 h-16 flex items-center justify-between">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full"
        >
          <span className="material-icons-round">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold">Data Packages</h1>
        <div className="w-10"></div>
      </header>

      <main className="pb-40">
        <section className="p-4">
          <div className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Phone Number
            </label>
            <div className="relative flex items-center">
              <input
                className="w-full bg-transparent border-none p-0 text-xl font-bold focus:ring-0"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
              />
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 px-3 py-1.5 rounded-lg">
                <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400">
                  TELKOMSEL
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 space-y-3">
          {DATA_PRODUCTS.map((prod) => (
            <button
              key={prod.id}
              onClick={() => setSelectedId(prod.id)}
              className={`w-full relative text-left p-5 rounded-2xl transition-all border-2 ${
                selectedId === prod.id
                  ? "bg-primary/5 border-primary shadow-lg"
                  : "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-800"
              }`}
            >
              {prod.label && (
                <div className="absolute -top-2 right-4 px-2 py-0.5 rounded-full text-[8px] font-black bg-orange-500 text-white uppercase tracking-wider">
                  {prod.label}
                </div>
              )}
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                    {prod.nominal}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {prod.description}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-primary font-black text-lg">
                    Rp {prod.price.toLocaleString("id-ID")}
                  </p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    {prod.validity}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-5 pt-4 pb-10 shadow-2xl z-50">
        <button
          onClick={() => onNavigate("checkout", activeProduct)}
          className="w-full bg-primary hover:bg-primary/90 text-white font-extrabold py-4 rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
        >
          Buy {activeProduct.nominal}
        </button>
      </div>
    </div>
  );
};

export { DataPackage };
