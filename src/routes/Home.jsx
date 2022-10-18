//Tells reactDOM where to render nested matching element:
// import { Outlet } from "react-router-dom";
//Outlet allows us to change portion of the code based on the routes and nested routes.
import Categories from "../components/Categories/Categories";

const Home = () => {
  //Homepage Layout:
  return (
    <div className="main-container">
      <Categories />
    </div>
  );
};
export default Home;
