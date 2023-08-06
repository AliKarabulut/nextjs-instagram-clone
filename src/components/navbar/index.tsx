import IconCheck from "../iconCheck";
import HomeIcon from "../icons/homeIcon";
import HomeIconFilled from "../icons/homeIconFilled";
import MessengerIcon from "../icons/messengerIcon";
import MessengerIconFilled from "../icons/messengerIconFilled";

const Navbar = () => {
  return (
    <nav className="w-1/6 border-r h-screen">
      <IconCheck firstIcon={<HomeIcon />} SecondIcon={<HomeIconFilled />}>
        Ana Sayfa
      </IconCheck>
      <IconCheck
        firstIcon={<MessengerIcon />}
        SecondIcon={<MessengerIconFilled />}
      >
        Mesajlar
      </IconCheck>
    </nav>
  );
};

export default Navbar;
