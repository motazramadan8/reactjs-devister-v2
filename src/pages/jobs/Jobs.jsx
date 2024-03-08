import Ads from "../../components/Ads/Ads";
import Header from "../../components/Header/Header";
import SideProfile from "../../components/SideProfile/SideProfile";
import FullTimeJobs from "./FullTimeJobs";
import RemoteJobs from "./RemoteJobs";

const Jobs = () => {
  return (
    <>
      <Header active="jobs" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-0 sm:px-4 lg:px-8 sm:-mt-2 md:mt-3">
        <div>
          <SideProfile />
        </div>
        <div className="xl:-ml-0 2xl:-ml-20">
          <RemoteJobs />
          <FullTimeJobs />
        </div>
        <div>
          <Ads />
        </div>
      </div>
    </>
  );
};

export default Jobs;
