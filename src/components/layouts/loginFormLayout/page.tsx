"use client";
import BottomBox from "@/components/login/bottom-box";
import Image from "next/image";
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
      <div className="flex items-center flex-col">
        <div className="text-sm mb-3">Uygulamayı indir.</div>
        <div className="flex gap-2">
        <Image src="/img/googleplay.png" alt="Google Play'den Edin" height={40} width={134}/>
        <Image src="/img/microsoft.png" alt="Microsoft'tan Playden Edin" height={40} width={110}/>
        </div>
      </div>
    </div>
  );
};
export default LoginFormLayout;
