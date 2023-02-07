import "./style.css";
import { useEffect, useRef, useState } from "react";
import PlateColor from "../PlateColor";

const Template = (props) => {

   const textRef  = useRef(null);
   const frameRef = useRef(null);
   const clickPlate = props.isClickable ? "clickPlate" : ""; 

   // const [isClicked, setIsClicked] = useState(props.isClickable);
   // const toggle = () => {
   //    setIsClicked(!isClicked);
   // }

   useEffect(() => {
      // frameRef.current.style.transform = `scale(${props.frameScale.x}, ${props.frameScale.y})`;
      // plateRef.current.style.width     = `${Math.floor(spriteSize.with   *props.frameScale.x)}px`;
      // plateRef.current.style.height    = `${Math.floor(spriteSize.height *props.frameScale.y)}px`;
      
      frameRef.current.style.transform = `scale(${props.frameScale})`;
      textRef.current.style.transform  = `translateY(${props.textOffset})`;
      textRef.current.style.fontSize   = props.textSize;
      textRef.current.style.color      = props.textColor;
   }, [textRef, frameRef]);
   
   return(<>
      {/* <div onClick={toggle} className="Flex plate"> */}
      
      <div className={`Flex plate ${clickPlate}`}>
         <div ref={frameRef} className={`Img frame ${props.frameColor}`}>
            <PlateColor color={props.plateColor}/>
         </div>

         <p ref={textRef} className="Flex">{props.value}</p>
      </div>
   </>);
}

export default Template;