import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = (props) => {
  return ( 
    <div id={props.id} className="kitchen">
      <div id='oven-sink'>
        <Oven id='oven' />
        <Sink id='sink' />
      </div>
        <h1 id="kitchen-label">Kitchen</h1>
    </div>
  );
}

export default Kitchen;