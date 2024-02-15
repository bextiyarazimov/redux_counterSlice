import { useSelector } from "react-redux";
import Counter from "./components/Counter/Counter";


const App = () => {

  const stateVal = useSelector((state) => state);
  console.log(stateVal);



  return (
   <>
  App---- counter value from inside component {stateVal.count}
  
  <Counter />
  <Card />
  
  </>
  );
  
};

export default App;




