import React from 'react';
import styles from "./overlaysidebar.module.css";
import { IoSearchCircle } from "react-icons/io5";
import { CgLogOut } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { RiContactsBook3Fill } from "react-icons/ri";
import { FaUserNurse } from "react-icons/fa";
import { TbReportMoney } from "react-icons/tb";
import { RiLuggageDepositFill } from "react-icons/ri";
import { IoRocketOutline } from "react-icons/io5";

const menuItems = [
  {
    title: "Home",
    path: "/home",
    icon: <FaHome />,
  },
  {
    title: "My Booking",
    path: "/dashboard/bokking",
    icon: <RiContactsBook3Fill />,
  },
  {
    title: "Traveler",
    path: "/dashboard/traveler",
    icon: <IoRocketOutline />,
  },
  {
    title: "  Deposite",
    path: "/dashboard/deposite",
    icon: <RiLuggageDepositFill />,
  },
  {
    title: "Ledger Report",
    path: "/dashboard/ledger",
    icon: <TbReportMoney />,
  },
  {
    title: "My Profile",
    path: "/dashboard/profile",
    icon: <FaUserNurse />,
  },
  {
    title: "Logout",
    path: "/dashboard/logout",
    icon: <CgLogOut />,
  },
];

const OverlaySidebar = ({ toggleOverlay }) => {
  return (
    <>
      <div className={styles.overlayContent}>
        <div className={styles.userDetail}>
          <span className={styles.userTitle}>BOOKING.COM</span>
        </div>
        <div className={styles.menuItems}>
          {menuItems.map((item, index) => (
            <div key={index} className={styles.menuItem}>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
       
      </div>
      <span onClick={toggleOverlay} className={styles.closebtn}>&times;</span>
    </>
  );
};

export default OverlaySidebar;
