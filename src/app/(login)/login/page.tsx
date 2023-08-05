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
      <Button type="submit" disabled>Giriş yap</Button>
      <hr className="h-0.5 w-full " />
      <span>YA DA</span>
      <hr className="h-0.5 w-full " />
      <div className="flex items-center">
        <AiFillFacebook /> Facebook ile Girş Yap
      </div>
      <Link href="resetpassword">Şifreni mi unuttun?</Link>
    </>
  );
};

export default Login;
