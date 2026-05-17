import CostCalculation from "./CostCalculation";
import Dictionary from "./Dictionary";
import NewWord from "./NewWord";

function App() {
  
  return (<>
    <div className="m-3"><Dictionary /></div>
    <div className="m-3"><CostCalculation /></div>
    <div className="m-3"><NewWord /></div>
  </>);

}

export default App;