import style from '@/styles/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  //filter function
  return (
    <div className="navbar">
        <Image
          className={style.logo}
          src='/logo.png'
          alt='logo'
          width={180}
          height={37}
          priority  
        />
        
        <nav className={style.nav}>
          <ul className={style.navList}>
            <li className={style.navItem}>
              <Link href="/">
              Home
              </Link> 
            </li>
            <li className={style.navItem}>
              <Link href="/about">
                About
              </Link>
            </li>
            <li className={style.navItem}>
              <Link href="/post/blog">
              Post
              </Link>
            </li>
            <li className={style.navItem}>
              <Link href="/contact">
              Contact
              </Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar