import Styles from './styles.module.css';

export default function NavMenu(props) {
  return (
    <ul className={Styles.menu} {...props}>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#careers">Careers</a>
      </li>
      <li>
        <a href="#events">Events</a>
      </li>
      <li>
        <a href="#creations">Products</a>
      </li>
      <li>
        <a href="#footer">Support</a>
      </li>
    </ul>
  );
}
