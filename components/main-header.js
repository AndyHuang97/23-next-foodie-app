import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href='/'>
        {/* 
        optimized image: 
        - lazy loading (loading="lazy")
        - automatic image size detection (width="1024" height="1024")
        - different image size depending on device and viewport (srcset="")
        - priority: if image MUST be rendered
         */}
        <Image src={logoImg} alt='A plate with food on it' priority/>
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href='/meals'>Browse Meals</Link>
          </li>
          <li>
            <Link href='/community'>Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
