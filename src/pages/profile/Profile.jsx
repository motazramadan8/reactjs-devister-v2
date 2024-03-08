import { Avatar, Button } from "@material-tailwind/react";
import Header from "../../components/Header/Header";
import { IoTime } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { FaSquareThreads } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import Post from "../../components/Post/Post";

const Profile = () => {
  return (
    <div>
      <Header />
      <div className="bg-[url('https://r4.wallpaperflare.com/wallpaper/967/867/776/abstract-brain-science-artwork-wallpaper-1980e8ad018aed7bd667487f6031760d.jpg')] blur-[90px] bg-no-repeat bg-center object-cover h-[300px] relative -top-5 -z-10"></div>
      <div className="container mx-auto relative">
        <img
          src="https://r4.wallpaperflare.com/wallpaper/967/867/776/abstract-brain-science-artwork-wallpaper-1980e8ad018aed7bd667487f6031760d.jpg"
          className="w-[100rem] h-[25rem] relative -top-[18.6rem] object-cover rounded-b-lg"
          alt="wallpaper"
        />

        <div className="flex -mt-28 md:mt-0 flex-col justify-center lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center flex-col md:flex-row -mt-[21rem] text-center md:text-left gap-5 lg:-mt-[29rem] ml-0 lg:ml-24 relative">
            <img
              src="/src/assets/images/User2.jpg"
              alt="user"
              className="w-56 h-56 rounded-full border-4 border-postsColor object-cover object-top"
            />
            <div className="info">
              <h1 className="text-[40px] font-[600]">Motaz Ramadan</h1>
              <h3 className="text-[20px] font-[500] mb-2">900K Followers</h3>
              <div className="flex items-center ml-16 md:ml-0 -space-x-2 -mb-5">
                <Avatar
                  variant="circular"
                  alt="user 1"
                  className="hover:z-10 focus:z-10 w-10 h-10"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
                <Avatar
                  variant="circular"
                  alt="user 2"
                  className="hover:z-10 focus:z-10 w-10 h-10"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                />
                <Avatar
                  variant="circular"
                  alt="user 3"
                  className="hover:z-10 focus:z-10 w-10 h-10"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                />
                <Avatar
                  variant="circular"
                  alt="user 4"
                  className="hover:z-10 focus:z-10 w-10 h-10"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                />
                <Avatar
                  variant="circular"
                  alt="user 5"
                  className="hover:z-10 focus:z-10 w-10 h-10"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
                />
              </div>
            </div>
          </div>
          <div className="justify-center mt-10 lg:m-0 flex items-center gap-5 lg:-mt-[22rem] lg:mr-24">
            <Button className="bg-mainColor text-blackColor">follow</Button>
            <Button className="bg-shapesColor text-whiteColor">Whatsapp</Button>
          </div>
        </div>
      </div>

      <section className="container mx-auto mt-6 md:mt-7 lg:-mt-20 mb-5 text-center grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-postsColor rounded-md max-h-[25rem] md:sticky md:top-4">
          <div className="p-5">
            <h1 className="text-[30px] font-[600] text-left">Bio</h1>
            <p className="text-left">
              Software engineer & Js Developer & CEO & Founder of ©DEVISTER
            </p>
          </div>
          <div className="w-full h-[3px] bg-[#18191A]"></div>
          <ul className="text-left p-5 leading-10">
            <li className="flex items-center gap-2">
              <IoTime className="size-6" /> Joined on Oct 2023
            </li>
            <li className="flex items-center gap-2">
              <IoLogoWhatsapp className="size-6" /> 01153802977
            </li>{" "}
            <li className="flex items-center gap-2">
              <FaYoutube className="size-6" /> @ElzeroWebSchool
            </li>{" "}
            <li className="flex items-center gap-2">
              <FaSquareThreads className="size-6" /> @ElzeroWebSchool
            </li>{" "}
            <li className="flex items-center gap-2">
              <BsTwitterX className="size-6" /> @ElzeroWebSchool
            </li>{" "}
            <li className="flex items-center gap-2">
              <BiWorld className="size-6" /> motaz.vercel.app
            </li>
          </ul>
        </div>
        <div className="-mt-3 text-left">
          <Post />
        </div>
      </section>
    </div>
  );
};

export default Profile;
