import { Outlet } from "react-router-dom";
import Directory from "../common/Directory/Directory";

const Home = () => {
  //Homepage Layout:
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
