import "./style.css";
import Plate from "../Plate"; 

const Template = (props) => {
   
   return(<>
      <div className={`Flex statPlates`}>

         {/* Name */}
         <Plate
            value       ={props.name}
            plateTrans  ={props.nameStyle.trans}
            plateScale  ={props.nameStyle.scale}
            plateColor  ={props.nameStyle.color}
            textScale   ={props.nameStyle.textScale}
            textColor   ={props.textColor}
            frameColor  ={props.frameColor}
         />


         {/* Value */}
         <Plate
            value       ={props.value}
            plateTrans  ={props.valueStyle.trans}
            plateScale  ={props.valueStyle.scale}
            plateColor  ={props.valueStyle.color}
            textScale   ={props.valueStyle.textScale}
            textColor   ={props.textColor}
            frameColor  ={props.frameColor}
         />
      </div>
   </>);
}

export default Template;