import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href='/'>
          {/* 
      optimized image: 
      - lazy loading (loading="lazy")
      - automatic image size detection (width="1024" height="1024")
      - different image size depending on device and viewport (srcset="")
      - priority: if image MUST be rendered
       */}
          <Image src={logoImg} alt='A plate with food on it' priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
          <li>

            <NavLink href="/meals">Browse Meals</NavLink>
            </li>

            <li>
              <NavLink href='/community'>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
