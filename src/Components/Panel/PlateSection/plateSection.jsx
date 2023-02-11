import "./plateSection.css"
import { useRef } from "react";
import StyleVar   from "../../../StyleVar";
import Plate      from "../Plate/plate";

/* Props:
   * title      => String
   * plateColor => String
   * data       => Array
*/

const Template = (props) => {
   
   const sectionRef = useRef(null);
   const listRef = useRef(null);

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

   const reduceSection = (trigger) => {

      if(trigger) {
         listRef.current.classList.add("hideList");
         sectionRef.current.classList.add("hideSection");
      }

      else {
         listRef.current.classList.remove("hideList");
         sectionRef.current.classList.remove("hideSection");
      }
   }

   return(<>
      <div className={`Flex plateSection`}>

         {props.title &&
            <Plate
               value       ={props.title}
               scale       ={plateStyle[0].scale}
               color       ={props.plateColor}
               textScale   ={plateStyle[0].textScale}
               textColor   ={StyleVar.text.white}
               frameColor  ={StyleVar.frame.gold}
               isUnsetPos  ={true}
               isClickable ={true}
               callback    ={(trigger) => reduceSection(trigger)}
            />
         }

         <div ref={sectionRef} className={`Flex plateList`}>
         <ul  ref={listRef}    className={`Flex`}>
         {props.data.map(statsPair => (

            <li key={statsPair[0]} className={`Flex`}>
            {plateStyle.map((plate, index) => (

               <Plate
                  key        ={plate.title}
                  value      ={statsPair[index]}
                  translate  ={plate.trans}
                  scale      ={plate.scale}
                  color      ={plate.color}
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