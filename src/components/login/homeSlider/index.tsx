import Image from "next/image";

const HomeSlider = () => {
  return (
    <div
      className="bg-cover bg-center h-[635px] w-[430px] relative mr-8 "
      style={{ backgroundImage: "url(/img/home-phones.png)" }}
    >
      <Image
        src={"/img/screenshot1.png"}
        height={541}
        width={250}
        alt="screenshot1"
        className="absolute top-[26px] right-[24px] animate-[opacity_12s_ease-in-out_infinite] z-[-1]"
      ></Image>
      <Image
        src={"/img/screenshot2.png"}
        height={541}
        width={250}
        alt="screenshot2"
        className="absolute top-[26px] right-[24px] animate-[opacity_12s_ease-in-out_4s_infinite] z-[-1]"
      ></Image>
      <Image
        src={"/img/screenshot3.png"}
        height={541}
        width={250}
        alt="screenshot3"
        className="absolute top-[26px] right-[24px] animate-[opacity_12s_ease-in-out_8s_infinite] z-[-1]"
      ></Image>
    </div>
  );
};

export default HomeSlider;
