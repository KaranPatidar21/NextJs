"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import style from "../style/navbar.module.css"
function Navbar() {
  const [activeLink, setActiveLink] = useState(""); // Track active link

  const handleLinkClick = (link) => {
    setActiveLink(link); // Update active link
  };

  return (
    // <nav className={`w-2/12  ${style.sideBar}`}>
    //   <ul className={`${style.navItems}`}>
    //     <li className={style.navLists}>
    //       <Link href="/dashboard" className={style.navLinks} >Dashboard</Link>
    //     </li>
    //     <li className={style.navLists}>
    //       <Link href="/skillstab" className={style.navLinks}>Skill Tab</Link>
    //     </li>
    //     <li className={style.navLists}>
    //       <Link href="/internship" className={style.navLinks}>Internship</Link>
    //     </li>
    //   </ul>
    // </nav>
    <nav className={`w-2/12 ${style.sideBar}`}>
    <ul className={`${style.navItems}`}>
      <li
        className={`${style.navLists} ${
          activeLink === "/dashboard" ? style.active : ""
        }`}
        onClick={() => handleLinkClick("/dashboard")}
      >
        <Link href="/dashboard" className={style.navLinks}>
          Dashboard
        </Link>
      </li>
      <li
        className={`${style.navLists} ${
          activeLink === "/skillstab" ? style.active : ""
        }`}
        onClick={() => handleLinkClick("/skillstab")}
      >
        <Link href="/skillstab" className={style.navLinks}>
          Skill Tab
        </Link>
      </li>
      <li
        className={`${style.navLists} ${
          activeLink === "/internship" ? style.active : ""
        }`}
        onClick={() => handleLinkClick("/internship")}
      >
        <Link href="/internship" className={style.navLinks}>
          Internship
        </Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar
