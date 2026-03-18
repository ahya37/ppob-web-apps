import { useState } from "react";
import {
  BottomNav,
  DominationsTopUp,
  HeaderTopUp,
  PhoneInputTopUp,
  LoginRequired,
} from "./components";
import { View, Product } from "@/types";
import { useSession } from "../utils";

interface TopUpProps {
  onNavigate: (view: View, product?: Product, phone?: string) => void;
  onBack: () => void;
}
const TopUp: React.FC<TopUpProps> = ({ onNavigate, onBack }) => {
  const [phone, setPhone] = useState("0812 3456 7890");
  const { isLogin, loading } = useSession();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isLogin) {
    return (
      <LoginRequired
        description="Silahkan login untuk mengakses menu Top Up dan melanjutkan transaksi."
        onNavigate={onNavigate}
        onBack={onBack}
      />
    );
  }

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
