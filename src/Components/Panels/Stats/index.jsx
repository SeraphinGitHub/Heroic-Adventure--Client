import "./style.css";
import { useRef } from "react";

const Template = () => {
   
   const themeRef = useRef(null);
   
   return(<>
      {/* ========== Stats Panel ========== */}
      <section className="wood-pane fluid panel-right player-stats">

         {/* Name Plate */}
         <div className="Flex name-plate hide-player-stats">
            <div className="background-plate"></div>
            <div className="blue-plate"></div>
            <div className="white-plate"></div>
            <p>Stats</p>
         </div>

         {/* Stats Container */}
         <div className="Flex stats-container">

            {/* Max Health */}
            <div className="stat">
                  <div className="stat-name">
                     <div className="background-plate"></div>
                     <div className="red-plate"></div>
                     <div className="white-plate"></div>
                     <p>Max Health</p>
                  </div>

                  <div className="stat-value">
                     <div className="background-plate"></div>
                     <div className="grey-plate"></div>
                     <div className="white-plate"></div>
                     <p className="health-value"></p>
                  </div>
            </div>

            {/* Max Mana */}
            <div className="stat">
                  <div className="stat-name">
                     <div className="background-plate"></div>
                     <div className="red-plate"></div>
                     <div className="white-plate"></div>
                     <p>Max Mana</p>
                  </div>

                  <div className="stat-value">
                     <div className="background-plate"></div>
                     <div className="grey-plate"></div>
                     <div className="white-plate"></div>
                     <p className="mana-value"></p>
                  </div>
            </div>

            {/* Regen Mana */}
            <div className="stat">
                  <div className="stat-name">
                     <div className="background-plate"></div>
                     <div className="red-plate"></div>
                     <div className="white-plate"></div>
                     <p>Reg. Mana</p>
                  </div>

                  <div className="stat-value">
                     <div className="background-plate"></div>
                     <div className="grey-plate"></div>
                     <div className="white-plate"></div>
                     <p className="mana-regen-value"></p>
                  </div>
            </div>
            
            {/* Max Energy */}
            <div className="stat">
                  <div className="stat-name">
                     <div className="background-plate"></div>
                     <div className="red-plate"></div>
                     <div className="white-plate"></div>
                     <p>Max Energy</p>
                  </div>

                  <div className="stat-value">
                     <div className="background-plate"></div>
                     <div className="grey-plate"></div>
                     <div className="white-plate"></div>
                     <p className="energy-value"></p>
                  </div>
            </div>

            {/* Regen Energy */}
            <div className="stat">
                  <div className="stat-name">
                     <div className="background-plate"></div>
                     <div className="red-plate"></div>
                     <div className="white-plate"></div>
                     <p>Reg. Energy</p>
                  </div>

                  <div className="stat-value">
                     <div className="background-plate"></div>
                     <div className="grey-plate"></div>
                     <div className="white-plate"></div>
                     <p className="energy-regen-value"></p>
                  </div>
            </div>

            {/* Attack Speed */}
            <div className="stat">
                  <div className="stat-name">
                     <div className="background-plate"></div>
                     <div className="red-plate"></div>
                     <div className="white-plate"></div>
                     <p>Attack Speed</p>
                  </div>

                  <div className="stat-value">
                     <div className="background-plate"></div>
                     <div className="grey-plate"></div>
                     <div className="white-plate"></div>
                     <p className="attackSpeed-value"></p>
                  </div>
            </div>

            {/* Damages */}
            <div className="stat">
                  <div className="stat-name">
                     <div className="background-plate"></div>
                     <div className="red-plate"></div>
                     <div className="white-plate"></div>
                     <p>Damages</p>
                  </div>

                  <div className="stat-value">
                     <div className="background-plate"></div>
                     <div className="grey-plate"></div>
                     <div className="white-plate"></div>
                     <p className="damage-value"></p>
                  </div>
            </div>

            {/* Walk Speed */}
            <div className="stat">
                  <div className="stat-name">
                     <div className="background-plate"></div>
                     <div className="red-plate"></div>
                     <div className="white-plate"></div>
                     <p>Walk Speed</p>
                  </div>

                  <div className="stat-value">
                     <div className="background-plate"></div>
                     <div className="grey-plate"></div>
                     <div className="white-plate"></div>
                     <p className="walkSpeed-value"></p>
                  </div>
            </div>

            {/* Run Speed */}
            <div className="stat">
                  <div className="stat-name">
                     <div className="background-plate"></div>
                     <div className="red-plate"></div>
                     <div className="white-plate"></div>
                     <p>Run Speed</p>
                  </div>

                  <div className="stat-value">
                     <div className="background-plate"></div>
                     <div className="grey-plate"></div>
                     <div className="white-plate"></div>
                     <p className="runSpeed-value"></p>
                  </div>
            </div>
         </div>
      </section>
   </>);
}

export default Template;