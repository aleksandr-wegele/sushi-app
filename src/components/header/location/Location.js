import style from '../../styles/Location.module.scss';


function Location() {
    return (
      <div className={style.Location}>
        <p className={style.Location__text}>Город:</p>
        <p className={style.Location__selekt}>Ростов-на-Дону</p>
      </div>
    );
  }
  
  export default Location;