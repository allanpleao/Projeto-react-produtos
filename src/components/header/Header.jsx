import NavLinks from "./NavLinks"
import Logo from "./Logo"
import styles from './Header.module.css'


const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Logo />
        <NavLinks />
      </nav>
    </header>
  )
}

export default Header