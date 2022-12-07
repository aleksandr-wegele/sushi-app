import style from '../../styles/Contacts.module.scss';

function Contacts() {
    return (
      <div className={style.Contacts}>
        <div className={style.content}>
            <h3 className={style.Contacts__tell}>Наш телефон</h3>
            <a  href="tel:+79000000000" className={style.Contacts__link}> +7 (900) 000 00 00</a>
            <a  href="tel:+79000000000" className={style.Contacts__link}> +7 (900) 000 00 00</a>
            <p className={style.Cotacts__clockWork}><img src='/img/time.png' alt='Часы работы' className={style.Cotacts__clockWork_img}/>работаем с 10:00 до 00:00</p>
        </div>
      </div>
    );
  }
  
  export default Contacts;