import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = (props) => {
  return ( 
    <div id={props.id} className="kitchen">
        <h1 id="kitchen-label">Kitchen</h1>
      <div id='oven-sink'>
        <Oven id='oven' />
        <Sink id='sink' />
      </div>
    </div>
  );
}

export default Kitchen;