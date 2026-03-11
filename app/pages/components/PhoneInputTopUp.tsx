import Image from "next/image";

interface PhoneInputProps {
  phone: string;
  setPhone: (phone: string) => void;
}

export const PhoneInputTopUp: React.FC<PhoneInputProps> = ({
  phone,
  setPhone,
}) => {
  return (
    <section className="p-4">
      <div className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
          Phone Number
        </label>
        <div className="relative flex items-center">
          <input
            className="w-full bg-transparent border-none p-0 text-xl font-bold focus:ring-0 placeholder:text-slate-300 dark:placeholder:text-slate-700"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="08xx xxxx xxxx"
            type="tel"
          />
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-600">
            <div className="w-5 h-5 rounded-full bg-red-600 overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSPCRNT2jJOmixbBPKlwjNVPBjDJTiJAP5AHoFS4d9iE1-Z0lcUXgedOnz3T3Q5djNjhfoGJLpbF0YutouuvnAH4F_Sb5uZkyKeKxaihE9-ZNtL5sT3jGuN2YdFZxQawOjVjRMBVwyblOoKM7hJoVf7KrgOiXWF6AEpQ5OSz6JHDquEHmBlUSyRsYQI4VClBXH-i3kwdOcO6vXQU5lanPYEdvWOKzQ1lzivKtARYHgFCObBosTQIREau5h9-gtsx2ZS2G9uiyRWA"
                alt="Provider"
                width={20}
                height={20}
              />
            </div>
            <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase">
              TELKOMSEL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
