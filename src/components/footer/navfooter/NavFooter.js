import style from '../../styles/NavFooter.module.scss';

function NavFooter() {
    return (
      <div className={style.NavFooter}>
        <nav className={style.NavFooter__nav}>
          <ul className={style.NavFooter__nav__list}>
            <li className={style.NavFooter__nav__list_item}>О компании</li>
            <li className={style.NavFooter__nav__list_item}>Доставка и оплата</li>
            <li className={style.NavFooter__nav__list_item}>Лента материалов</li>
            <li className={style.NavFooter__nav__list_item}>Политика возврата</li>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default NavFooter;