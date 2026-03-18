import { useState } from "react";
import { Product, View } from "@/types";

const PRODUCTS: Product[] = [
  { id: "1", nominal: "10.000", price: 11200 },
  { id: "2", nominal: "25.000", price: 25500 },
  { id: "3", nominal: "50.000", price: 50100, label: "BEST SELLER" },
  { id: "4", nominal: "100.000", price: 99000, label: "PROMO" },
  { id: "5", nominal: "150.000", price: 148500 },
  { id: "6", nominal: "200.000", price: 198000 },
];

interface TopUpProps {
  // Make product optional to match App.tsx navigateTo signature and allow passing to BottomNav
  onNavigate: (view: View, product?: Product, phone?: string) => void;
  phone: string;
}

export const DominationsTopUp: React.FC<TopUpProps> = ({
  onNavigate,
  phone,
}) => {
  const [selected, setSelected] = useState<string>("3");
  const activeProduct = PRODUCTS.find((p) => p.id === selected) || PRODUCTS[2];

  return (
    <section>
      <section className="px-4">
        <h2 className="text-sm font-bold mb-4 text-slate-700 dark:text-slate-300">
          Select Denomination
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {PRODUCTS.map((prod) => (
            <button
              key={prod.id}
              onClick={() => setSelected(prod.id)}
              className={`relative text-left p-4 rounded-xl transition-all ${
                selected === prod.id
                  ? "bg-primary/5 dark:bg-primary/10 border-2 border-primary shadow-lg ring-1 ring-primary/20"
                  : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800"
              }`}
            >
              {prod.label && (
                <div
                  className={`absolute -top-2 right-2 px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase ${
                    prod.label === "BEST SELLER"
                      ? "bg-orange-500 text-white"
                      : "bg-primary text-white"
                  }`}
                >
                  {prod.label}
                </div>
              )}
              <div className="text-xs font-semibold text-slate-400 mb-1">
                Nominal
              </div>
              <div className="text-xl font-extrabold mb-2 dark:text-white">
                {prod.nominal}
              </div>
              <div
                className={`text-sm font-bold ${selected === prod.id ? "text-primary" : "text-slate-primary/70"}`}
              >
                Rp {prod.price.toLocaleString("id-ID")}
              </div>
            </button>
          ))}
        </div>
      </section>
      <div className="fixed bottom-20 left-0 right-0 max-w-[430px] mx-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-5 pt-4 pb-4 shadow-2xl z-50">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
              Total Payment
            </div>
            <div className="text-2xl font-black text-slate-900 dark:text-white leading-tight">
              Rp {activeProduct.price.toLocaleString("id-ID")}
            </div>
          </div>
          <button
            onClick={() => onNavigate("checkout", activeProduct, phone)}
            className="px-10 bg-primary hover:bg-primary/90 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
          >
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};
