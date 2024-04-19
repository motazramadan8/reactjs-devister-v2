import Ads from "../../components/Ads/Ads";
import CreatePost from "../../components/CreatePost/CreatePost";
import Post from "../../components/Post/Post";
import SideProfile from "../../components/SideProfile/SideProfile";
import Stories from "../../components/Stories/Stories";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <>
      <Header active="home" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-0 sm:px-4 lg:px-8 sm:-mt-2 md:mt-3">
        <div>
          <SideProfile />
        </div>
        <div className="xl:-ml-0 2xl:-ml-20">
          <Stories />
          <CreatePost />
          <Post />
        </div>
        <div>
          <Ads />
        </div>
      </div>
    </>
  );
};

export default Home;
