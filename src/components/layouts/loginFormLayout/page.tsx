"use client"
import Link from "next/link";
import { useParams } from "next/navigation";

type LayoutTypes = {
  children: React.ReactNode;
};

const LoginFormLayout = ({ children }: LayoutTypes) => {
  const params = useParams();
  return (
    <div className="w-[350px] h-fit flex justify-center flex-col">
      <div className="border-[1px]  ">
        <div className="w-full flex justify-center py-8">
          <div
            className="w-44 h-14 bg-no-repeat  bg-logo bg-pos"
            style={{ backgroundImage: "url(/img/instagramLogo.png)" }}
          ></div>
        </div>
        <form className="flex items-center  flex-col">
          {children}
        </form>
      </div>
      <div className="h-fit border-[1px] text-center p-4">
        Hesabın yok mu?{" "}
        <Link href="/register" className="text-blue-600">
          {" "}
          Kaydol
        </Link>
      </div>
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
