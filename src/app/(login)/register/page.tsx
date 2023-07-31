import Link from "next/link";
import { AiFillFacebook } from "react-icons/ai";
const Register = () => {
  return (
    <>
      <h2>
        <hr className="h-0.5 w-full " />
        <span>YA DA</span>
        <hr className="h-0.5 w-full " />
      </h2>
      <button className="flex items-center">
        <AiFillFacebook /> Facebook ile Giriş Yap
      </button>
      <input type="text" placeholder="Cep Telefonu Numarası veya E-posta" />
      <input type="text" placeholder="Adı Soyadı" />
      <input type="text" placeholder="Kullanıcı Adı" />
      <input type="password" placeholder="Şifre" />
      <p>
        Hizmetimizi kullanan kişiler senin iletişim bilgilerini Instagram'a
        yüklemiş olabilir.{" "}
        <span className="font-bold">Daha Fazla Bilgi Al</span>
      </p>
      <p>
        Kaydolarak,{" "}
        <span className="font-bold">Koşullarımızı, Gizlilik İlkemizi</span> ve
        <span className="font-bold">Çerezler İlkemizi</span> kabul etmiş
        olursun.
      </p>
      <button type="submit">Kaydol</button>


      <Link href="resetpassword">Şifreni mi unuttun?</Link>
    </>
  );
};

export default Register;
