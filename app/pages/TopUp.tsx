import { useState } from "react";
import {
  BottomNav,
  DominationsTopUp,
  HeaderTopUp,
  PhoneInputTopUp,
} from "./components";
import { View, Product } from "@/types";

interface TopUpProps {
  // Make product optional to match App.tsx navigateTo signature and allow passing to BottomNav
  onNavigate: (view: View, product?: Product, phone?: string) => void;
  onBack: () => void;
}
const TopUp: React.FC<TopUpProps> = ({ onNavigate, onBack }) => {
  const [phone, setPhone] = useState("0812 3456 7890");

  return (
    <div className="flex-1 bg-background-light dark:bg-background-dark min-h-screen">
      <HeaderTopUp onBack={onBack} />

      <main className="pb-56">
        {/* Phone Input */}
        <PhoneInputTopUp phone={phone} setPhone={setPhone} />
        {/* Denominations */}
        <DominationsTopUp onNavigate={onNavigate} phone={phone} />
      </main>

      {/* Sticky Bottom Summary */}

      <BottomNav onNavigate={onNavigate} current="home" />
    </div>
  );
};

export { TopUp };
