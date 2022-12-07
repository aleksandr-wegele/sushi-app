import style from '../styles/RightBar.module.scss'
import DrawerBtn from './drawer_btn/DrawerBtn';
import Map from './map/Map';

function RightBar() {
    return (
      <div className={style.RightBar}>
        <DrawerBtn/>
        <Map/>
      </div>
    );
  }
  
  export default RightBar;