import "./App.css";
import CostCalculator from "./CostCalculator.tsx";

function App({priceOfSingleVMPerHour} : {priceOfSingleVMPerHour : number}) {
  return <div className="App">
      <CostCalculator priceOfSingleVMPerHour={priceOfSingleVMPerHour}/>
  </div>;
}

export default App;
