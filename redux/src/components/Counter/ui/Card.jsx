import { memo } from "react";
import { useSelector } from "react-redux";


const Card = () => {


    const stateValue = useSelector((state) => state);
    console.log(stateValue);
  return <div>card value ---- {stateValue.countReducer.count}</div>;
  
};

export default memo(Card);
