import IconCheck from "../iconCheck";
import CompassIcon from "../icons/compassIcon";
import CompassIconFilled from "../icons/compassIconFilled";
import HomeIcon from "../icons/homeIcon";
import HomeIconFilled from "../icons/homeIconFilled";
import MessengerIcon from "../icons/messengerIcon";
import MessengerIconFilled from "../icons/messengerIconFilled";
import SearchIcon from "../icons/searchIcon";
import SearchIconFilled from "../icons/searchIconFilled";


const Navbar = () => {
  return (
    <nav className="w-1/6 border-r h-screen px-3 pt-2 pb-5">
      <IconCheck firstIcon={<HomeIcon/>} secondIcon={<HomeIconFilled />}>
        Ana Sayfa
      </IconCheck>
      <IconCheck firstIcon={<SearchIcon />  } secondIcon={<SearchIconFilled/>}>
        Ara
      </IconCheck>
      <IconCheck firstIcon={<CompassIcon />  } secondIcon={<CompassIconFilled/>}>
        Keşfet
      </IconCheck>

      <IconCheck
        firstIcon={<MessengerIcon />}
        secondIcon={<MessengerIconFilled />}
      >
        Mesajlar
      </IconCheck>
    </nav>
  );
};

export default Navbar;
