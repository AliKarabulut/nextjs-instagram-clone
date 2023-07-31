import Link from "next/link";
import { AiFillFacebook } from "react-icons/ai";
const Login = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Telefon numarası, kullanıcı adı veya e-posta"
      />
      <input type="password" placeholder="Şifre" />
      <button type="submit">Giriş yap</button>
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
