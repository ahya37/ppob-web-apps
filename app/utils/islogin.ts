const IsLogin = () => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  return !!token;
};

export { IsLogin };
