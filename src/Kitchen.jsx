import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = (props) => {
  return ( 
    <div id={props.id} className="kitchen">
      <h1>Kitchen</h1>\
        <Oven id='oven' />
        <Sink id='sink' />
    </div>
  );
}

export default Kitchen;