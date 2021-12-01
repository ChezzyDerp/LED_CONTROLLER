import { chooseLed } from '../chooseLed';
import { wobble } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
    lightSpeedIn: {
    animation: 'x 1.3s',
    animationName: Radium.keyframes(wobble, 'wobble')
  }
}

const BtnLed = ({name, id, color, description }) =>{
   
    return(
        <StyleRoot><div style={styles.lightSpeedIn}  onClick={() => chooseLed(id)}data-aos-duration="1000"  data-aos="zoom-out-down" className="btnBody">
            <div className={color + " btnGradient"}></div>
            <div className="nameBtn">{name}</div>
            <div className="des"> {description} </div>
        </div> </StyleRoot>
    )
}

export default BtnLed