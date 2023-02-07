import "./style.css";
import { useEffect, useRef } from "react";
import PlateColor from "../PlateColor";

const Template = (props) => {

   const plateRef = useRef(null);
   const frameRef = useRef(null);
   const textRef  = useRef(null);
   const clickPlate = props.isClickable ? "clickPlate" : "";

   useEffect(() => {      
      frameRef.current.style.transform = `scale(${props.frameScale})`;
      plateRef.current.style.width     = `${props.plateWidth}`;
      frameRef.current.style.top       = `${props.frameTopPos}`;
      textRef.current.style.fontSize   = props.textSize;
      textRef.current.style.color      = props.textColor;
   }, []);
   
   return(<>
      <div ref={plateRef} className={`Flex plate ${clickPlate}`}>
         <div ref={frameRef} className={`Img frame ${props.frameColor}`}>
            <PlateColor color={props.plateColor}/>
         </div>

         <p ref={textRef} className="Flex">{props.value}</p>
      </div>
   </>);
}

export default Template;