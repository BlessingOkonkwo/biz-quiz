import { BrowserRouter } from "react-router-dom";
// import Home from "./pages/Home";
import RouterConfig from "./navigation/RouterConfig";

function App() {
  return (
    <BrowserRouter>
      <RouterConfig />
    </BrowserRouter>
  );
}

export default App;
