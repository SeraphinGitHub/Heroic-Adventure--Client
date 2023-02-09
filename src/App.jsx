import "./App.css"
import Panel from "./Components/Panels/Frame"

import Stats    from "./Components/Panels/Contents/Stats";

const App = () => {

   return(<>
      <Panel
         panelName      = "Inventory"
         displayPaper   = {false}
         displayCorners = {true}
         
         panelContent = {<Stats/>}
      />
   </>);
}

export default App
