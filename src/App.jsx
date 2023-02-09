import "./App.css"
import Panel from "./Components/Panels/Frame"

import Stats    from "./Components/Panels/Contents/Stats";
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
      <Panel
         panelName    = "Inventory"
         displayPaper = {false}
         displayCorners = {false}
         
         panelContent = {<Stats/>}
      />
   </>);
}

export default App
