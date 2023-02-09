import "./style.css";
import StyleVar   from "../../../StyleVar";
import Plate      from "./Plate";

const Template = (props) => {

   return(<>
      <section className="Flex Img panel">
         { props.displayPaper
            && <div className="Img paperSheet"/>
         }

         { props.displayCorners
            && <div className="Img corner"/>
            && <div className="Img corner"/>
            && <div className="Img corner"/>
            && <div className="Img corner"/>
         }
         
         {/* Panel Name */}
         <Plate
            value       ={props.panelName}
            plateTrans  ="0%, -60%"
            plateScale  ="95%, 90%"
            plateColor  ={StyleVar.plate.blue}
            textScale   ="130%, 100%"
            textColor   ={StyleVar.text.yellow}
            frameColor  ={StyleVar.frame.gold}
            isClickable ={true}
         />


         {/* Panel Content */}
         <div className="Flex content">
            {props.panelContent}
         </div>

      </section>
   </>);
}

export default Template;