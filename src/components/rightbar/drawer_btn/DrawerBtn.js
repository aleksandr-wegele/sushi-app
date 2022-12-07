import style from '../../styles/DrawerBtn.module.scss';

function DrawerBtn() {
    return (
      <div className={style.DrawerBtn}>
        <h3 className={style.DrawerBtn__head}>Ваша корзина пуста.</h3>
        <p className={style.DrawerBtn__text}>Добавьте же скорее что-нибудь!</p>
        <button className={style.DrawerBtn__btn}>Бесплатная доставка от 800 руб.</button>
      </div>
    );
  }
  
  export default DrawerBtn;