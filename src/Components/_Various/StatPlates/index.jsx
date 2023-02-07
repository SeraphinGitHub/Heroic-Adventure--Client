import "./style.css";
import StyleVar from "../../../StyleVar";
import Plate    from "../Plate"; 

const Template = (props) => {
   
   return(<>
      <div className="Flex statPlates">

         {/* Name */}
         <Plate
            frameColor  ={StyleVar.frame.silver}
            frameScale  ={"65%, 50%"}
            plateColor  ={StyleVar.plate.red}
            textOffset  ={"45%"}
            textSize    ={StyleVar.text.medium}
            textColor   ={StyleVar.text.white}
            value       ={props.name}
            isClickable ={false}
         />


         {/* Value */}
         <Plate
            frameColor  ={StyleVar.frame.silver}
            frameScale  ={"45%, 50%"}
            plateColor  ={StyleVar.plate.grey}
            textOffset  ={"45%"}
            textSize    ={StyleVar.text.medium}
            textColor   ={StyleVar.text.white}
            value       ={props.value}
            isClickable ={false}
         />

         {/* <Plate value={props.name}  color={props.nameColor ? props.nameColor :"red" }/>
         <Plate value={props.value} color={props.valueColor? props.valueColor:"grey"}/> */}
      </div>
   </>);
}

export default Template;