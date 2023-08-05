import Button from "@/components/button";
import Input from "@/components/input";
import Link from "next/link";
import { AiFillFacebook } from "react-icons/ai";

const Login = () => {
  return (
    <>
      <Input
        type="text"
        placeholder="Telefon numarası, kullanıcı adı veya e-posta"
      />
      <Input type="password" placeholder="Şifre" />
      <Button type="submit" disabled>
        Giriş yap
      </Button>
      <div className="w-full flex items-center my-4">
        {" "}
        <hr className="h-0.5 w-full " />
        <div className="whitespace-nowrap font-semibold text-sm text-neutral-500 mx-5">YA DA</div>
        <hr className="h-0.5 w-full " />
      </div>
      <div className="flex items-center text-sm font-medium text-facebook-logo">
        <AiFillFacebook className="text-blue-900 text-lg" /> Facebook ile Giriş Yap
      </div>
      <Link href="resetpassword" className="text-ig-link text-xs my-4">Şifreni mi unuttun?</Link>
    </>
  );
};

export default Login;
