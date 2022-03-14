import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

const FloorPlan = (props) => {
  return ( 
    <div>
      <Bedroom name='Bedroom 1' />
      <Kitchen />
      <Bath name='Full Bath' />
      <Bedroom name='Bedroom 2' />
      <LivingRoom />
      <Bath name='Half Bath' />
      <Bedroom name='Bedroom 3' />
    </div>
  );
}

export default FloorPlan;