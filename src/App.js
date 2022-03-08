import logo from "./logo.svg";
import "./App.css";
import { Box } from "@material-ui/core";
import RoiCalculator from "./Components/RoiCalculator";

function App() {
  return (
    <div className="App">
      <Box>
        <RoiCalculator />
      </Box>
    </div>
  );
}

export default App;
