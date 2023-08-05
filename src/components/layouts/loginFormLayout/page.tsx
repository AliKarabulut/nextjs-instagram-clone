"use client";
import BottomBox from "@/components/login/bottom-box";
import Link from "next/link";
import { useParams } from "next/navigation";

type LayoutTypes = {
  children: React.ReactNode;
};

const LoginFormLayout = ({ children }: LayoutTypes) => {
  const params = useParams();
  return (
    <div className="w-[350px] h-fit flex justify-center flex-col">
      <div className="border-[1px] px-9 ">
        <div className="w-full flex justify-center py-8">
          <div
            className="w-44 h-14 bg-no-repeat  bg-logo bg-pos"
            style={{ backgroundImage: "url(/img/instagramLogo.png)" }}
          ></div>
        </div>
        <form className="flex items-center  flex-col">{children}</form>
      </div>
      <BottomBox link="register">Hesabın yok mu</BottomBox>
      <div>
        <div>Uygulamayı indir</div>
        <div>
          <div>Google Play</div>
          <div>Microsofttan edin</div>
        </div>
      </div>
    </div>
  );
};
export default LoginFormLayout;
