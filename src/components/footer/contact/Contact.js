import style from '../../styles/Contact.module.scss';

function Contact() {
    return (
      <div className={style.Contact}>
        <ul className={style.Contact__list}>
          <li className={style.Contact__list_item}>Тел: <a href="tel:+79000000000" className={style.Contact__list_link}>+7 (900) 000 00 00</a></li>
          <li className={style.Contact__list_item}>Тел: <a href="tel:+79000000000" className={style.Contact__list_link}>+7 (900) 000 00 00</a></li>
          <li className={style.Contact__list_item}>Адрес: Иванова 1в</li>
        </ul>
      </div>
    );
  }
  
  export default Contact;