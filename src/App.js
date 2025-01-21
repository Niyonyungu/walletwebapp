import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";


import SignIn from "./pages/Account/SignIn";
import Dashboard from "./components/Dashboard";
import OverView from "./components/OverView";
import Transactions from "./components/Transactions";
import Reports from "./components/Reports";
import Settings from "./components/Settings";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index path="/" element={<SignIn />}></Route>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<OverView />} />
      </Route>
      <Route path="/transactions" element={<Dashboard />}>  
        <Route index element={<Transactions />} />    
      </Route>
      <Route path="/reports" element={<Dashboard />}>
        <Route index element={<Reports />} />
      </Route>
      <Route path="/settings" element={<Dashboard />}>
        <Route index element={<Settings />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
