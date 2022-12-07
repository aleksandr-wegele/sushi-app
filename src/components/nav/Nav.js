import style from '../styles/Nav.module.scss'

function Nav() {
  return (
    <nav className={style.Nav}>
        <ul className={style.Nav__list}>
            <li className={style.Nav__list_item}><img src='/img/icons/pizza.png' alt='' className={style.Nav__list_item__img}/>Пицца</li>
            <li className={style.Nav__list_item}><img src='/img/icons/sets.png' alt='' className={style.Nav__list_item__img}/>Сеты</li>
            <li className={style.Nav__list_item}><img src='/img/icons/wok.png' alt='' className={style.Nav__list_item__img}/>WOK</li>
            <li className={style.Nav__list_item}><img src='/img/icons/rol.png' alt='' className={style.Nav__list_item__img}/>Ролы</li>
            <li className={style.Nav__list_item}><img src='/img/icons/sushi.png' alt='' className={style.Nav__list_item__img}/>Суши</li>
            <li className={style.Nav__list_item}><img src='/img/icons/drink.png' alt='' className={style.Nav__list_item__img}/>Напитки</li>
            <li className={style.Nav__list_item}><img src='/img/icons/sales.png' alt='' className={style.Nav__list_item__img}/>Акции</li>
        </ul>
    </nav>
  );
}

export default Nav;