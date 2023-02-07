import "./App.css"
import StatPlates from "./Components/_Various/StatPlates";


import StyleVar from "./StyleVar";
import Plate    from "./Components/_Various/Plate"; 
const App = () => {

   return(<>
      {/* <div className="aze">

         <StatPlates name="MaxHealth" value="1500"/>
      </div> */}

      <Plate
         frameColor  ={StyleVar.frame.silver}
         frameScale  ={"70%, 70%"}
         plateColor  ={StyleVar.plate.red}
         textOffset  ={"45%"}
         textSize    ={StyleVar.text.medium}
         textColor   ={StyleVar.text.white}
         value       ={"Max Health"}
         isClickable ={false}
      />

      {/* <OneStat name="Max Health"   value="2500"/>
      <OneStat name="Regen Health" value="50/s"/>
      <OneStat name="Max Mana"     value="2000"/>
      <OneStat name="Regen Mana"   value="80/s"/>
      <OneStat name="Max Energy"   value="3500"/>
      <OneStat name="Regen Energy" value="90/s"/>
      <OneStat name="Attack Speed" value="0.6s"/>
      <OneStat name="Walk Speed"   value="100%"/> */}

   </>);
}

export default App
