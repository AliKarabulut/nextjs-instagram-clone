import Image from "next/image";

const HomeSlider = () => {
  return (
    <div
      className="bg-cover bg-center h-[635px] w-[385px] relative "
      style={{ backgroundImage: "url(/img/home-phones.png)" }}
    >
      <Image
        src={"/img/screenshot1.png"}
        height={541}
        width={250}
        alt="screenshot1"
        className="absolute top-[30px] right-[19px]"
      ></Image>
      <Image
        src={"/img/screenshot2.png"}
        height={541}
        width={250}
        alt="screenshot2"
        className="absolute top-[30px] right-[19px]"
      ></Image>
      <Image
        src={"/img/screenshot3.png"}
        height={541}
        width={250}
        alt="screenshot3"
        className="absolute top-[30px] right-[19px]"
      ></Image>
    </div>
  );
};

export default HomeSlider;
