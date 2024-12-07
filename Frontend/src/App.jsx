import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { Transfer } from "./pages/Transfer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element= {<Signup />} />
          <Route path="/signin" element= {<Signin />} />
          <Route path="/dashboard" element= {<Dashboard />} />
          <Route path="/transfer" element= {<Transfer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
