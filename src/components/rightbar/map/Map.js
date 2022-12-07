import style from '../../styles/Map.module.scss';

function Map() {
    return (
      <div className={style.Map}>
        <div className={style.Map__img_container}><img src='/img/map.png' alt='Выбрать адрес доставки' className={style.Map__img}/></div>
        <h2 className={style.Map__head}>Укажите адрес</h2>
        <p className={style.Map__text}>И узнайте время доставки</p>
      </div>
    );
  }
  
  export default Map;