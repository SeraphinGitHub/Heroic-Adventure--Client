import "./App.css"
import Panel from "./Components/Panel/panel"
import Stats from "./Components/Panel/Contents/Stats/stats"

const App = () => {

   return(<>
      <Panel
         name        ="Stats"
         translate   ="-10%, -10%"
         scale       ="65%, 65%"
         showCorners ={true}
         content     ={<Stats/>}
      />
   </>);
}

export default App
