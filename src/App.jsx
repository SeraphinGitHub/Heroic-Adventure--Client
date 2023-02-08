import "./App.css"
import StatPlates from "./Components/_Various/StatPlates";
import Plate from "./Components/_Various/Plate";

import StyleVar from "./StyleVar";

const App = () => {

   const nameColor = {
      // stat:  StyleVar.plate.violet,
      stat:  StyleVar.plate.red,
      score: StyleVar.plate.orange,
      fame:  StyleVar.plate.violet,
   }

   const style = {
      
      // frameColor: StyleVar.frame.silver,
      frameColor: StyleVar.frame.gold,
      textColor:  StyleVar.text.white,
      
      name: {
         trans:     "-38%, 71%",
         scale:     "80%, 70%",
         textScale: "110%, 110%",
      },

      value: {
         color:     StyleVar.plate.grey,
         trans:     "77%, -71%",
         scale:     "55%, 70%",
         textScale: "160%, 110%",
      },
   }

   return(<>
      <div className="Flex aze">
         <div className="Img pict woodPanel"/>

         <StatPlates
            name            ="Max Health"
            namePlateColor  ={nameColor.stat}
            namePlateTrans  ={style.name.trans}
            namePlateScale  ={style.name.scale}
            nameTextScale   ={style.name.textScale}

            value           ={3000}
            valuePlateColor ={style.value.color}
            valuePlateTrans ={style.value.trans}
            valuePlateScale ={style.value.scale}
            valueTextScale  ={style.value.textScale}

            frameColor ={style.frameColor}
            textColor  ={style.textColor}
         />

         <StatPlates
            name            ="Health Regen"
            namePlateColor  ={nameColor.stat}
            namePlateTrans  ={style.name.trans}
            namePlateScale  ={style.name.scale}
            nameTextScale   ={style.name.textScale}

            value           ="50/s"
            valuePlateColor ={style.value.color}
            valuePlateTrans ={style.value.trans}
            valuePlateScale ={style.value.scale}
            valueTextScale  ={style.value.textScale}

            frameColor ={style.frameColor}
            textColor  ={style.textColor}
         />

         <StatPlates
            name            ="Max Mana"
            namePlateColor  ={nameColor.stat}
            namePlateTrans  ={style.name.trans}
            namePlateScale  ={style.name.scale}
            nameTextScale   ={style.name.textScale}

            value           ={2200}
            valuePlateColor ={style.value.color}
            valuePlateTrans ={style.value.trans}
            valuePlateScale ={style.value.scale}
            valueTextScale  ={style.value.textScale}

            frameColor ={style.frameColor}
            textColor  ={style.textColor}
         />

         <StatPlates
            name            ="Mana Regen"
            namePlateColor  ={nameColor.stat}
            namePlateTrans  ={style.name.trans}
            namePlateScale  ={style.name.scale}
            nameTextScale   ={style.name.textScale}

            value           ="70/s"
            valuePlateColor ={style.value.color}
            valuePlateTrans ={style.value.trans}
            valuePlateScale ={style.value.scale}
            valueTextScale  ={style.value.textScale}

            frameColor ={style.frameColor}
            textColor  ={style.textColor}
         />

         <StatPlates
            name            ="Max Energy"
            namePlateColor  ={nameColor.stat}
            namePlateTrans  ={style.name.trans}
            namePlateScale  ={style.name.scale}
            nameTextScale   ={style.name.textScale}

            value           ={3500}
            valuePlateColor ={style.value.color}
            valuePlateTrans ={style.value.trans}
            valuePlateScale ={style.value.scale}
            valueTextScale  ={style.value.textScale}

            frameColor ={style.frameColor}
            textColor  ={style.textColor}
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
