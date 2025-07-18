import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <Toaster />
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
