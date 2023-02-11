import PlateSection from "../../PlateSection/plateSection"
import StyleVar     from "../../../../StyleVar";

/* Props:
   
*/

const Template = () => {

   const statsData = [
      {
         title: "Health",
         plateColor:  StyleVar.plate.green,
         statsPair: [
            ["Max Health",     3000],
            ["Current Health", 566],
            ["Regen Health",   "50/s"],
         ],
      },

      {
         title: "Mana",
         plateColor:  StyleVar.plate.blue,
         statsPair: [
            ["Max Mana",     2200],
            ["Current Mana", 758],
            ["Regen Mana",   "70/s"],
         ],
      },

      {
         title: "Energy",
         plateColor:  StyleVar.plate.yellow,
         statsPair: [
            ["Max Energy",     3500],
            ["Current Energy", 1780],
            ["Regen Energy",   "90/s"],
         ],
      },

      {
         title: "Attack",
         // plateColor:  StyleVar.plate.violet,
         plateColor:  StyleVar.plate.orange,
         statsPair: [
            ["Attack Speed", "0.6s"],
            ["Damages",      "270 - 420"],
         ],
      },

      {
         title: "Movements",
         // plateColor:  StyleVar.plate.orange,
         plateColor:  StyleVar.plate.violet,
         statsPair: [
            ["Walk Speed", "100%"],
            ["Run Speed",  "200%"],
         ],
      },
   ];

   return(<>
   {statsData.map(section => (
      <PlateSection
         key        ={section.title}
         title      ={section.title}
         plateColor ={section.plateColor}
         data       ={section.statsPair}
      />
   ))}
   </>);
}

export default Template;