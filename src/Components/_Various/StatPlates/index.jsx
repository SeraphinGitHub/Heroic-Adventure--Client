import "./style.css";
import StyleVar from "../../../StyleVar";
import Plate    from "../Plate"; 

const Template = (props) => {
   
   return(<>
      <div className="Flex statPlates">

         {/* Name */}
         <Plate
            value       ={props.name}
            plateWidth  ={"250px"}
            frameScale  ={"70%, 60%"}
            frameTopPos ={"-18px"}
            frameColor  ={StyleVar.frame.silver}
            plateColor  ={props.nameColor}
            textSize    ={StyleVar.text.small}
            textColor   ={StyleVar.text.white}
            isClickable ={false}
         />


         {/* Value */}
         <Plate
            value       ={props.value}
            plateWidth  ={"178px"}
            frameScale  ={"50%, 60%"}
            frameTopPos ={"-18px"}
            frameColor  ={StyleVar.frame.silver}
            plateColor  ={props.valueColor}
            textSize    ={StyleVar.text.small}
            textColor   ={StyleVar.text.white}
            isClickable ={false}
         />
      </div>
   </>);
}

export default Template;