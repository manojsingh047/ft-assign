import { Outlet } from "react-router";
import Navbar from "./../navbar/Navbar";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Home;
