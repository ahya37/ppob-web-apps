import { IsLogin } from "./islogin";
import { View } from "@/types";

const ReturnLogin = ({ onNavigate }: { onNavigate: (v: View) => void }) => {
  const isLogin = IsLogin();
  if (!isLogin) {
    onNavigate("login");
  }
};

export { ReturnLogin };
