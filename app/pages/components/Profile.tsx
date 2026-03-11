import Image from "next/image";

export const Profile = () => {
  return (
    <div className="relative z-10 flex justify-between items-center mb-6">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full border-2 border-white/30 overflow-hidden bg-white/20">
          <Image
            alt="Profile"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu2dDxD_55vzo7uuUPxW5mdjW0HCQHO3yrdZ99fX4ukldXod9XbiT_oC8XAX9h6ll7RoASD3qjDGmU3p00HCPZ2ipFrW9IztJTtICl1tXZkKhdYjVdXHBseOiRJbBDPLYrF-jh96vxobLdxhjmsBvSISlqBRfgrWHETct0vnkHlBTQ4EaftGzAETePpWy4LKeUMkE9OmIynK7qCDinMqpMvbsbf14U3Ujxhrs5-XxJyw1i3vCO-eG2dO_4frHcBgTkU7lcyR_Rbg"
            width={40}
            height={40}
          />
        </div>
        <div>
          <p className="text-white/70 text-[10px] font-medium uppercase tracking-widest">
            Good Morning,
          </p>
          <h2 className="text-white font-bold text-lg">Alex Johnson</h2>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-white/40 font-black text-xs uppercase tracking-tighter">
          Muara Digital
        </span>
        <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
          <span className="material-icons-round">notifications</span>
        </button>
      </div>
    </div>
  );
};
