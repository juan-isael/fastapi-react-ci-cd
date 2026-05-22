import CostCalculation from "./CostCalculation";
import Dictionary from "./Dictionary";
import NewWord from "./NewWord";
import reactLogo from './assets/react.svg';
import fastAPILogo from './assets/FastAPI.svg';

function App() {
  
  return (<>
    <header className="py-5 text-center">
      <h1 className="display-4 fw-bold">
        React <img src={reactLogo} alt="" className="img-fluid" style={{ height: "1em" }} />
        + 
        FastAPI <img src={fastAPILogo} alt="" className="img-fluid" style={{ height: "1em" }} />
      </h1>
      <p className="text-muted mt-3">
        Try this FullStack app!
      </p>
    </header>
    <main className="container p-4">

      <div className="row g-5">

        <div className="col-lg-4">
          <Dictionary />
        </div>

        <div className="col-lg-4">
          <CostCalculation />
        </div>

        <div className="col-lg-4">
          <NewWord />
        </div>

      </div>
    </main>
  </>);

}

export default App;