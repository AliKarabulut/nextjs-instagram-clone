import Link from "next/link";
import { Children } from "react";

type BottomBoxProps = {
  children: React.ReactNode;
  link: "register" | "login";
};

const BottomBox = ({ link, children }: BottomBoxProps) => {
  return (
    <div className="h-fit border-[1px] text-center p-4  my-3 text-sm">
      {children}{" "}
      <Link href={`/${link}`} className="text-primary-button font-semibold">
        {link === "register" ? "Kaydol" : "Giriş Yap"}
      </Link>
    </div>
  );
};

export default BottomBox;
