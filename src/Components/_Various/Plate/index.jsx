import "./style.css";
import PlateColor from "../PlateColor";

const Template = (props) => {

   const clickPlate = props.isClickable ? "clickPlate" : "";
   const style = {
      plate: {
         transform: `scale(${props.plateScale}) translate(${props.plateTrans})`,
      },

      text: {
         color: `${props.textColor}`,
         transform: `scale(${props.textScale})`,
      }
   }
   
   return(<>
      <div style={style.plate} className={`Flex Img plate ${props.frameColor} ${clickPlate}`}>
         <PlateColor color={props.plateColor}/>
         <p style={style.text} className="Flex">{props.value}</p>
      </div>
   </>);
}

export default Template;