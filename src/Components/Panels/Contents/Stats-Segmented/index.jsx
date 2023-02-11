import "./style.css"
import { useRef } from "react";
import StyleVar   from "../../../../StyleVar";
import Plate      from "../../Frame/Plate";

const Template = (props) => {
   
   const segmentRef = useRef(null);
   const listSegRef = useRef(null);

   const plateStyle = [
      {
         title:     "Name",
         color:     StyleVar.plate.red,
         trans:     "-36%, -15%",
         scale:     "81%, 70%",
         textScale: "110%, 100%",
      },
      
      {
         title:     "Value",
         color:     StyleVar.plate.grey,
         trans:     "79%, -15%",
         scale:     "54%, 70%",
         textScale: "160%, 100%",
      },
   ];

   const reduceSegment = (trigger) => {

      if(trigger) {
         segmentRef.current.classList.add("hideStatSeg"),
         listSegRef.current.classList.add("hideStatPlate")
      }

      else {
         segmentRef.current.classList.remove("hideStatSeg"),
         listSegRef.current.classList.remove("hideStatPlate")
      }
   }

   return(<>
      <div className={`Flex statSegment`}>

         <Plate
            value       ={props.title}
            frameColor  ={StyleVar.frame.gold}
            plateColor  ={props.plateColor}
            textColor   ={StyleVar.text.white}
            plateScale  ={plateStyle[0].scale}
            textScale   ={plateStyle[0].textScale}
            isUnsetPos  ={true}
            isClickable ={true}
            callback    ={(trigger) => reduceSegment(trigger)}
         />

         <div ref={segmentRef} className={`Flex segContainer`}>
         <ul  ref={listSegRef} className={`Flex`}>
         {props.data.map(statsPair => (

            <li key={statsPair[0]} className={`Flex`}>
            {plateStyle.map((plate, index) => (

               <Plate
                  key        ={plate.title}
                  value      ={statsPair[index]}
                  plateTrans ={plate.trans}
                  plateScale ={plate.scale}
                  plateColor ={plate.color}
                  textScale  ={plate.textScale}
                  textColor  ={StyleVar.text.white}
                  frameColor ={StyleVar.frame.gold}
               />
            ))}
            </li>
         ))}
         </ul>
         </div>
         
      </div>
   </>);
}

export default Template;