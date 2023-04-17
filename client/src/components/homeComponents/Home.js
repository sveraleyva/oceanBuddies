import HomeInfo from "./HomeInfo";
import HomeMission from "./HomeMission";
import homePagePhoto from "./../../images/palm-tree.jpg";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <>
      <div className="relative">
        <img style={{ height: "800px", width: "100%" }} src={homePagePhoto} />
        <div className="absolute bottom-28 right-2/4">
          <h1 className="text-white  p-4 text-4xl font-bold">Water pollution needs a fast solution.</h1>
          <Link to="/about">
            <button className="bg-white text-[#19376D] bottom-14 left-5 mb-5 ml-5 p-4 text-2xl font-bold">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <HomeMission />
      <HomeInfo />
    </>
  );
};

export default Home;
