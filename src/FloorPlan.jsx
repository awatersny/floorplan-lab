import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

const FloorPlan = (props) => {
  return ( 
    <div>
      <Bedroom />
      <Kitchen />
      <Bath />
      <Bedroom />
      <LivingRoom />
      <Bath />
      <Bedroom />
    </div>
  );
}

export default FloorPlan;