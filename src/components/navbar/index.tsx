import IconCheck from "../iconCheck";
import CompassIcon from "../icons/compassIcon";
import CompassIconFilled from "../icons/compassIconFilled";
import CreateIcon from "../icons/createIcon";
import CreateIconFilled from "../icons/createIconFilled";
import HeartIconFilled from "../icons/heartIconFilled";
import HeartIcon from "../icons/heartıcon";
import HomeIcon from "../icons/homeIcon";
import HomeIconFilled from "../icons/homeIconFilled";
import InstagramIcon from "../icons/instagramIcon";
import InstagramLogoIcon from "../icons/instagramLogoIcon";
import MenuIcon from "../icons/menuIcon";
import MenuIconFilled from "../icons/menuIconFilled";
import MessengerIcon from "../icons/messengerIcon";
import MessengerIconFilled from "../icons/messengerIconFilled";
import ReelsIcon from "../icons/reelsIcon";
import ReelsIconFilled from "../icons/reelsIconFilled";
import SearchIcon from "../icons/searchIcon";
import SearchIconFilled from "../icons/searchIconFilled";

const Navbar = () => {
  return (
    <nav className="w-[350px] min-w-fit border-0 border-r border-ig-seperator border-solid h-screen px-3 pt-2 pb-5  flex  flex-col">
      <IconCheck
        firstIcon={<InstagramIcon />}
        secondIcon={<InstagramLogoIcon />}
        type={2}
        className="mt-4 pb-6"
      />

      <div className="gap-1.5 flex flex-col">
        <IconCheck firstIcon={<HomeIcon />} secondIcon={<HomeIconFilled />} >
          Ana Sayfa
        </IconCheck>
        <IconCheck firstIcon={<SearchIcon />} secondIcon={<SearchIconFilled />}>
          Ara
        </IconCheck>
        <IconCheck
          firstIcon={<CompassIcon />}
          secondIcon={<CompassIconFilled />}
        >
          Keşfet
        </IconCheck>
        <IconCheck firstIcon={<ReelsIcon />} secondIcon={<ReelsIconFilled />}>
          Reels
        </IconCheck>
        <IconCheck
          firstIcon={<MessengerIcon />}
          secondIcon={<MessengerIconFilled />}
        >
          Mesajlar
        </IconCheck>
        <IconCheck firstIcon={<HeartIcon />} secondIcon={<HeartIconFilled />}>
          Bildirimler
        </IconCheck>
        <IconCheck firstIcon={<CreateIcon />} secondIcon={<CreateIconFilled />}>
          Oluştur
        </IconCheck>
      </div>
      <IconCheck firstIcon={<MenuIcon />} secondIcon={<MenuIconFilled />} className="mt-auto">
        Daha Fazla
      </IconCheck>
    </nav>
  );
};

export default Navbar;
