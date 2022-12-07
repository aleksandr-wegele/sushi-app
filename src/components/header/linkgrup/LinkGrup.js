import style from '../../styles/LinkGrup.module.scss';


function LinkGrup() {
    return (
      <div className={style.LinkGrup}>
        <span className={style.LinkGrup__link}>Отзывы</span>
        <span className={style.LinkGrup__link}>Доставка и оплата</span>
      </div>
    );
  }
  
  export default LinkGrup;