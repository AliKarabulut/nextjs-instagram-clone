import LoginFormLayout from "@/components/layouts/loginFormLayout/page";
import HomeSlider from "@/components/login/homeSlider";

type LayoutTypes = {
  children: React.ReactNode;
};

const LoginLayout = ({ children }: LayoutTypes) => {
  return (
    <article className="w-full h-screen flex justify-center items-center">
      <HomeSlider />
      <LoginFormLayout>
        {children}
      </LoginFormLayout>
    </article>
  );
};

export default LoginLayout;
