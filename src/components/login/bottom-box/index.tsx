import Link from "next/link";

type BottomBoxProps = {
  link?: string;
};

const BottomBox = ({ link }: BottomBoxProps) => {
  return (
    <div className="h-fit border-[1px] text-center p-4  my-3 text-sm">
      {link === "register" ? "Hesabın var mı? " : "Hesabın yok mu? "}
      <Link
        href={`/${link === "login" ? "register" : "login"}`}
        className="text-primary-button font-semibold"
      >
        {link === "register" ? "Giriş Yap" : "Kaydol"}
      </Link>
    </div>
  );
};

export default BottomBox;
