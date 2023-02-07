import "./App.css"
import StatPlates from "./Components/_Various/StatPlates";

import StyleVar from "./StyleVar";

const App = () => {

   return(<>
      <div className="Flex aze">
         <div className="Img pict woodPanel"/>

         <StatPlates
            name  ="Health"
            value ="3000"
            nameColor  ={StyleVar.plate.red}
            valueColor ={StyleVar.plate.grey}
         />

         <StatPlates
            name  ="Mana"
            value ="2200"
            nameColor  ={StyleVar.plate.red}
            valueColor ={StyleVar.plate.grey}
         />

         <StatPlates
            name  ="Energy"
            value ="3500"
            nameColor  ={StyleVar.plate.red}
            valueColor ={StyleVar.plate.grey}
         />

      </div>

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
