"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./Header.module.css"

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link
          href="/"
          className={`${styles.navItem} ${pathname === "/" ? styles.active : ""}`}
        >
          Home
        </Link>
        <Link
          href="/profile"
          className={`${styles.navItem} ${pathname === "/profile" ? styles.active : ""}`}
        >
          Profile
        </Link>
      </nav>
    </header>
  )
}