import "./style.css";
import { useState } from "react";
import PlateColor from "../PlateColor";

const Template = (props) => {

   let clickPlate   = "";
   let clickHandler = null;
   const [trigger, setTrigger] = useState(false);
   
   if(props.isClickable) {
      clickPlate = "clickPlate";
      
      if(props.callback) clickHandler = () => {
         setTrigger(!trigger);
         props.callback(!trigger);
      }
   }

   const style = {
      plate: {
         transform:
            props.plateScale && props.plateTrans
            ?`scale(${props.plateScale}) translate(${props.plateTrans})`
            : props.plateScale? `scale(${props.plateScale})`
            : props.plateTrans? `translate(${props.plateTrans})`
            : ""
         ,

         position:  props.isUnsetPos? "unset" :"absolute",
      },

      text: {
         color: `${props.textColor}`,
         transform: `scale(${props.textScale})`,
      }
   }
   
   return(<>
      <button onClick={clickHandler} style={style.plate} className={`Flex plate ${clickPlate}`}>
         <div className={`Flex Img frame ${props.frameColor}`}>

            <PlateColor color={props.plateColor}/>
            <p style={style.text} className={`Flex`}>{props.value}</p>
            
         </div>
      </button>
   </>);
}

export default Template;