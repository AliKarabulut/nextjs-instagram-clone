import HomeSlider from "@/components/login/homeSlider";

type Layout = {
  children: React.ReactNode;
};

const LoginLayout = ({ children }: Layout) => {
  return (
    <article className="w-full h-screen flex justify-center items-center">
      <HomeSlider />
      {children}
    </article>
  );
};

export default LoginLayout;
