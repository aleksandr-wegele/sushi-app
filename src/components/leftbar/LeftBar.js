import Nav from '../nav/Nav';
import style from '../styles/LeftBar.module.scss'

function LeftBar() {
  return (
    <div className={style.LeftBar}>
      <div className={style.LeftBar__logo}>
        <img src="/img/logo.png" alt="Logo" className={style.LeftBar__logo_img}/>
        <p className={style.LeftBar__logo_text}>romsem</p>
      </div>
      <Nav/>
    </div>
  );
}

export default LeftBar;