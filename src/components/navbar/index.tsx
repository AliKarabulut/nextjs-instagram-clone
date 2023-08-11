import IconCheck from "../iconCheck";
import CompassIcon from "../icons/compassIcon";
import CompassIconFilled from "../icons/compassIconFilled";
import CreateIcon from "../icons/createIcon";
import CreateIconFilled from "../icons/createIconFilled";
import HeartIconFilled from "../icons/heartIconFilled";
import HeartIcon from "../icons/heartıcon";
import HomeIcon from "../icons/homeIcon";
import HomeIconFilled from "../icons/homeIconFilled";
import MessengerIcon from "../icons/messengerIcon";
import MessengerIconFilled from "../icons/messengerIconFilled";
import ReelsIcon from "../icons/reelsIcon";
import ReelsIconFilled from "../icons/reelsIconFilled";
import SearchIcon from "../icons/searchIcon";
import SearchIconFilled from "../icons/searchIconFilled";

const Navbar = () => {
  return (
    <nav className="w-1/6 border-r h-screen px-3 pt-2 pb-5">
      <IconCheck firstIcon={<HomeIcon />} secondIcon={<HomeIconFilled />}>
        Ana Sayfa
      </IconCheck>
      <IconCheck firstIcon={<SearchIcon />} secondIcon={<SearchIconFilled />}>
        Ara
      </IconCheck>
      <IconCheck firstIcon={<CompassIcon />} secondIcon={<CompassIconFilled />}>
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
    </nav>
  );
};

export default Navbar;
