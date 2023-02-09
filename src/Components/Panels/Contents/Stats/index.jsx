import StyleVar   from "../../../../StyleVar";
import StatPlates from "../../Frame/StatPlates";

const Template = () => {
   
   const style = {
      
      name: {
         color:      StyleVar.plate.red,
         trans:     "-38%, -15%",
         scale:     "80%, 70%",
         textScale: "120%, 105%",
      },

      value: {
         color:     StyleVar.plate.grey,
         trans:     "77%, -15%",
         scale:     "55%, 70%",
         textScale: "150%, 100%",
      },

      frameColor: StyleVar.frame.gold,
      textColor:  StyleVar.text.white,
   }

   return(<>
      <StatPlates
         name            ="Health"
         namePlateColor  ={style.name.color}
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
         name            ="Regen Health"
         namePlateColor  ={style.name.color}
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
         name            ="Mana"
         namePlateColor  ={style.name.color}
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
         name            ="Regen Mana"
         namePlateColor  ={style.name.color}
         namePlateTrans  ={style.name.trans}
         namePlateScale  ={style.name.scale}
         nameTextScale   ={style.name.textScale}

         value           ={"70/s"}
         valuePlateColor ={style.value.color}
         valuePlateTrans ={style.value.trans}
         valuePlateScale ={style.value.scale}
         valueTextScale  ={style.value.textScale}

         frameColor ={style.frameColor}
         textColor  ={style.textColor}
      />

      <StatPlates
         name            ="Energy"
         namePlateColor  ={style.name.color}
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

      <StatPlates
         name            ="Regen Energy"
         namePlateColor  ={style.name.color}
         namePlateTrans  ={style.name.trans}
         namePlateScale  ={style.name.scale}
         nameTextScale   ={style.name.textScale}

         value           ="90/s"
         valuePlateColor ={style.value.color}
         valuePlateTrans ={style.value.trans}
         valuePlateScale ={style.value.scale}
         valueTextScale  ={style.value.textScale}

         frameColor ={style.frameColor}
         textColor  ={style.textColor}
      />

      <StatPlates
         name            ="Attack Speed"
         namePlateColor  ={style.name.color}
         namePlateTrans  ={style.name.trans}
         namePlateScale  ={style.name.scale}
         nameTextScale   ={style.name.textScale}

         value           ={"0.6s"}
         valuePlateColor ={style.value.color}
         valuePlateTrans ={style.value.trans}
         valuePlateScale ={style.value.scale}
         valueTextScale  ={style.value.textScale}

         frameColor ={style.frameColor}
         textColor  ={style.textColor}
      />

      <StatPlates
         name            ="Damages"
         namePlateColor  ={style.name.color}
         namePlateTrans  ={style.name.trans}
         namePlateScale  ={style.name.scale}
         nameTextScale   ={style.name.textScale}

         value           ="270 - 430"
         valuePlateColor ={style.value.color}
         valuePlateTrans ={style.value.trans}
         valuePlateScale ={style.value.scale}
         valueTextScale  ={style.value.textScale}

         frameColor ={style.frameColor}
         textColor  ={style.textColor}
      />

      <StatPlates
         name            ="Walk Speed"
         namePlateColor  ={style.name.color}
         namePlateTrans  ={style.name.trans}
         namePlateScale  ={style.name.scale}
         nameTextScale   ={style.name.textScale}

         value           ="100%"
         valuePlateColor ={style.value.color}
         valuePlateTrans ={style.value.trans}
         valuePlateScale ={style.value.scale}
         valueTextScale  ={style.value.textScale}

         frameColor ={style.frameColor}
         textColor  ={style.textColor}
      />

      <StatPlates
         name            ="Run Speed"
         namePlateColor  ={style.name.color}
         namePlateTrans  ={style.name.trans}
         namePlateScale  ={style.name.scale}
         nameTextScale   ={style.name.textScale}

         value           ="200%"
         valuePlateColor ={style.value.color}
         valuePlateTrans ={style.value.trans}
         valuePlateScale ={style.value.scale}
         valueTextScale  ={style.value.textScale}

         frameColor ={style.frameColor}
         textColor  ={style.textColor}
      />
   </>);
}

export default Template;