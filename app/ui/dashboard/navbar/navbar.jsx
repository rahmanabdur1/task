"use client"

import React, { useState } from 'react';
import styles from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import OverlaySidebar from '../overlaySidebar/overlaySidebar';

const Navbar = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(true);

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  return (
    <>
      <div className={styles.container}>
        <div>
          <GiHamburgerMenu className={styles.opensidebar} onClick={toggleOverlay} />
        </div>
        <div className={styles.about}>
          <div className={styles.users}>
            <IoIosNotifications className={styles.notification} />
            <FaUserAlt />
            <span className={styles.name}>Rahman</span>
          </div>
        </div>
      </div>
      <div className={isOverlayOpen ? styles.overlay_content : styles.overlay}>
        <>
          {!isOverlayOpen && (
            <OverlaySidebar toggleOverlay={toggleOverlay} />
          )}
        </>

      </div>

    </>
  );
};

export default Navbar;
