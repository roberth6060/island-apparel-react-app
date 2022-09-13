import Navbar from "../../navbar-component/navbar-componet";
import Categories from "../../categories-component/categories-component";

const Home = () => {
  //Homepage Layout:
  return (
    <div className="main-container">
      <Navbar />
      <Categories />
    </div>
  );
};
export default Home;
