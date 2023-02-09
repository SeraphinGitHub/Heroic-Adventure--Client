import "./style.css";
import Plate from "../Plate"; 

const Template = (props) => {
   
   return(<>
      <div className={`Flex statPlates`}>

         {/* Name */}
         <Plate
            value       ={props.name}
            plateTrans  ={props.namePlateTrans}
            plateScale  ={props.namePlateScale}
            plateColor  ={props.namePlateColor}
            textScale   ={props.nameTextScale}
            textColor   ={props.textColor}
            frameColor  ={props.frameColor}
            isClickable ={false}
         />


         {/* Value */}
         <Plate
            value       ={props.value}
            plateTrans  ={props.valuePlateTrans}
            plateScale  ={props.valuePlateScale}
            plateColor  ={props.valuePlateColor}
            textScale   ={props.valueTextScale}
            textColor   ={props.textColor}
            frameColor  ={props.frameColor}
            isClickable ={false}
         />
      </div>
   </>);
}

export default Template;