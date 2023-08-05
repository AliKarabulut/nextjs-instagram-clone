import Button from "@/components/button";
import Input from "@/components/input";
import Link from "next/link";
import { AiFillFacebook } from "react-icons/ai";

const Register = () => {
  return (
    <>
      <h2 className="text-neutral-500 font-semibold text-lg text-center">Arkadaşlarının fotoğraf ve videolarını görmek için kaydol</h2>
      <Button className="flex items-center justify-center bg-primary-button font-medium text-sm mt-3">
        <AiFillFacebook className="w-5 h-5 mr-2" /> Facebook ile Giriş Yap
      </Button>
      <div className="w-full flex items-center my-4">
        <hr className="h-0.5 w-full " />
        <div className="whitespace-nowrap font-semibold text-sm text-neutral-500 mx-5">
          YA DA
        </div>
        <hr className="h-0.5 w-full " />
      </div>
      <Input type="text" placeholder="Cep Telefonu Numarası veya E-posta" />
      <Input type="text" placeholder="Adı Soyadı" />
      <Input type="text" placeholder="Kullanıcı Adı" />
      <Input type="password" placeholder="Şifre" />
      <p className="text-xs text-neutral-500">
        Hizmetimizi kullanan kişiler senin iletişim bilgilerini Instagram'a
        yüklemiş olabilir.{" "}
        <span className="font-medium text-ig-link">Daha Fazla Bilgi Al</span>
      </p>
      <p className="text-xs text-neutral-500 my-4">
        Kaydolarak,{" "}
        <span className="font-medium text-ig-link">Koşullarımızı, Gizlilik İlkemizi</span> ve
        <span className="font-medium text-ig-link ">Çerezler İlkemizi</span> kabul etmiş
        olursun.
      </p>
      <Button type="submit">Kaydol</Button>
      <Link href="resetpassword" className="text-ig-link text-xs my-4">
        Şifreni mi unuttun?
      </Link>
    </>
  );
};

export default Register;
