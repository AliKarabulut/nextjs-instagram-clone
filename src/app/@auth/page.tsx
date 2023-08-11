"use client";
import LoginFormLayout from "@/components/layouts/loginFormLayout/page";
import HomeSlider from "@/components/login/homeSlider";
import Button from "@/components/button";
import Input from "@/components/input";
import Link from "next/link";
import { AiFillFacebook } from "react-icons/ai";
import { useRouter } from "next/navigation";


const Login = () => {

  const router = useRouter();

  const requestHandler = async () => {

    await fetch("api/login", {
      method: "POST",
      body: JSON.stringify("asd"),

    });
    router.refresh();
  }


  return (
    <>
    <button onClick={requestHandler}>Token</button>
    <article className="w-full h-screen flex justify-center items-center">
      <HomeSlider />
      <LoginFormLayout>
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
          <div className="whitespace-nowrap font-semibold text-sm text-neutral-500 mx-5">
            YA DA
          </div>
          <hr className="h-0.5 w-full " />
        </div>
        <div className="flex items-center text-sm font-medium text-facebook-logo">
          <AiFillFacebook className="text-blue-900 text-lg" /> Facebook ile
          Giriş Yap
        </div>
        <Link href="resetpassword" className="text-ig-link text-xs my-4">
          Şifreni mi unuttun?
        </Link>
      </LoginFormLayout>
    </article>
    </>
  );
};

export default Login;
