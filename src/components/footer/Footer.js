import style from '../styles/Footer.module.scss';
import Contact from './contact/Contact';
import Feedback from './feedback/Feedback';
import NavFooter from './navfooter/NavFooter';

function Footer() {
    return (
      <div className={style.Footer}>
        <div className={style.content__container}>
          <NavFooter/>
          <Feedback/>
          <Contact/>
        </div>
      </div>
    );
  }
  
  export default Footer;