import LoginFormLayout from "@/components/layouts/loginFormLayout/page";
import HomeSlider from "@/components/login/homeSlider";

type LayoutTypes = {
  children: React.ReactNode;
  params: any;
};

const LoginLayout = ({ children, params }: LayoutTypes) => {
  console.log(params);
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
