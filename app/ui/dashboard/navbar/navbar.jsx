
import styles from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
const Navbar = () => {


  return (
    <div className={styles.container}>
      <div>
      <GiHamburgerMenu />
      </div>
      <div className={styles.about}>
        <div className={styles.users}>
        <IoIosNotifications className={styles.notification} />
        <FaUserAlt />
        <span className={styles.name}>Rahman</span>
        </div>
      </div>
  
    </div>
  );
};

export default Navbar;