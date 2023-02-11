import "./style.css";
import StyleVar   from "../../../StyleVar";
import Plate      from "./Plate";

const Template = (props) => {

   const style = {
      panel: {
         transform:
            props.panelScale && props.panelTrans
            ?`scale(${props.panelScale}) translate(${props.panelTrans})`
            : props.panelScale? `scale(${props.panelScale})`
            : props.panelTrans? `translate(${props.panelTrans})`
            : ""
         ,
      },
   }

   return(<>
      <section style={style.panel} className={`Flex Img panel`}>

         {/* Toggle Paper */}
         {props.displayPaper &&
            <div className={`Img paperSheet`}/>
         }


         {/* Toggle Corners */}
         {props.displayCorners &&
            <div className={`Flex corners`}>
               <div className={`Img ${StyleVar.panelCorner.silver}`}/>
               <div className={`Img ${StyleVar.panelCorner.silver}`}/>
               <div className={`Img ${StyleVar.panelCorner.silver}`}/>
               <div className={`Img ${StyleVar.panelCorner.silver}`}/>
            </div>
         }
         

         {/* Panel Name */}
         {props.displayPlate &&
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
         }
         

         {/* Panel Content */}
         <div className={`Flex content`}>
            {props.panelContent}
         </div>

      </section>
   </>);
}

export default Template;