import "./style.css";

const Template = (props) => {

   return(<>
      <span className={`Img plateColor ${props.color}`}/>
      <span className= "Img plateColor whitePlate"/>
   </>);
}

export default Template;