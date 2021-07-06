import Styles from './styles.module.css'
import Logo from '../../assets/logo.svg'
import Hero from '../../assets/desktop/image-hero.jpg'

export default function Header() {
  return(
      <div className={Styles.container}>
        <header>
          <img src={Logo} alt='Logotipo da empresa'/>
          <ul className={Styles.menu}>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </header>
        <div className={Styles.description}>
          <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
        </div>
      </div>
  )
}