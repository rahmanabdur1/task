
import MenuLink from "./menuLink/menuLink";
import { IoSearchCircle } from "react-icons/io5";
import styles from "./sidebar.module.css";
import { CgLogOut } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { RiContactsBook3Fill } from "react-icons/ri";
import { FaUserNurse } from "react-icons/fa";
import { TbReportMoney } from "react-icons/tb";
import { RiLuggageDepositFill } from "react-icons/ri";
import { IoRocketOutline } from "react-icons/io5";
const menuItems = [
  {
    list: [
      {
        title: "Home",
        path: "/home",
        icon:<FaHome /> ,
      },
      {
        title: "My Booking",
        path: "/dashboard/bokking",
        icon: <RiContactsBook3Fill />,
      },
      {
        title: "Traveler",
        path: "/dashboard/traveler",
        icon:<IoRocketOutline />,
      },
      {
        title: "  Deposite",
        path: "/dashboard/deposite",
        icon: <RiLuggageDepositFill />,
      },
      {
        title:"Ledger Report",
        path: "/dashboard/ledger",
        icon:<TbReportMoney />        ,
      },
      {
        title: "My Profile",
        path: "/dashboard/profile",
        icon:<FaUserNurse />,
      },
      {
        title: "Logout",
        path: "/dashboard/logout",
        icon:<CgLogOut />        ,
      },
    ],
  },
];

const Sidebar = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        
        <div className={styles.userDetail}>

          <span className={styles.userTitle}>BOOKING.COM</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <div className={styles.search}>
                <IoSearchCircle  className={styles.Icon}/>
                <span>Search Pad</span>
            </div>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Sidebar;