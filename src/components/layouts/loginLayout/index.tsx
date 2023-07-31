import HomeSlider from "@/components/login/homeSlider";

type Layout = {
  children: React.ReactNode;
};

const loginLayout = ({ children }: Layout) => {
  <article>
    <HomeSlider />
  </article>;
};

export default loginLayout;
