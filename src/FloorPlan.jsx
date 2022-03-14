import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

const FloorPlan = (props) => {
  return ( 
    <div id='floor-plan'>
      <Bedroom id='bedroom1' name='Bedroom 1' />
      <Kitchen id='kitchen' />
      <Bath id='full-bath' name='Full Bath' />
      <Bedroom id='bedroom2' name='Bedroom 2' />
      <LivingRoom id='living-room' />
      <Bath id='half-bath' name='Half Bath' />
      <Bedroom id='bedroom3' name='Bedroom 3' />
    </div>
  );
}

export default FloorPlan;