import Link from "next/link";



type MiniNavProps = {
  children?: React.ReactNode;
  className?: string;
};

const MiniNav = ({ children, className }: MiniNavProps) => {
  return (
    <div
      className={`w-fit h-fit p-2 rounded-2xl bg-white shadow-md absolute bottom-14 left-0  flex flex-col items-center cursor-pointer ${className}`}
    >
      <div>
        <div className="whitespace-nowrap text-sm w-[15.5rem] h-[3.125rem] flex items-center font-normal hover:bg-ig-hover p-4 rounded-lg">
          <Link href="/logout" className="no-underline text-black">Çıkış yap</Link>
        </div>
      </div>
    </div>
  );
};

export default MiniNav;
