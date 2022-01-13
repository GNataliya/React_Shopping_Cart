import style from './style.module.css';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className={style.footer}>
      <p>Copyrights</p>
      <ul>
        <li>
           <NavLink to='/about' >The company</NavLink>
        </li>
        <li>
           <NavLink to='/home' >Shopping</NavLink>
        </li>
        <li>
          <NavLink to='/home' >Customer care</NavLink>
        </li>
        <li>
          <NavLink to='/home' >Contact</NavLink>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;