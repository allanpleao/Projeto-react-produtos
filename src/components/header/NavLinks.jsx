import { Link } from "react-router-dom";
import styles from './NavLinks.module.css'
const NavLinks = () => {
  return (
    <div className={styles.navLinks}>
      <li>
        <Link to={"/Produtos"}>Produtos</Link>
      </li>
      <li>
        <Link to={"/SignIn"}>Entrar</Link>
      </li>
    </div>
  );
};

export default NavLinks;
