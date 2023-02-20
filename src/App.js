import AIAButtonGroup from "./AIAButtonGroup";
import './App.css';

function App() {
  return(
    <div className="App">

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
    
    <div className="App-header">
        <div className="App-text">Our Sun now</div>
    </div>
    
    <AIAButtonGroup />
    <br/ >
    <p className="App-text"> This data is from the <a href="https://sdo.gsfc.nasa.gov/"> <code> Solar Dynamics Observatory </code> </a> </p>
    </div>
  )
}

export default App;
// render(<ToggleButtonExample />);