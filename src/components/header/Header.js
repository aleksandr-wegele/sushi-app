import style from '../styles/Header.module.scss';
import Contacts from './contacts/Contacts';
import LinkGrup from './linkgrup/LinkGrup';
import Location from './location/Location';
import Search from './search/Search';

function Header() {
    return (
      <header className={style.Header}>
        <Contacts/>
        <Location/>
        <LinkGrup/>
        <Search/>
      </header>
    );
  }
  
  export default Header;