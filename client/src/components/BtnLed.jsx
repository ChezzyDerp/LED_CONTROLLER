import { chooseLed } from '../chooseLed';

const BtnLed = ({name, id, color}) =>{
    return(
        <div onClick={() => chooseLed(id)} className="btnBody">
            <div className={color + " btnGradient"}></div>
            <div className="nameBtn">{name}</div>
        </div>
    )
}

export default BtnLed