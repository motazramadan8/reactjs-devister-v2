import { Button } from "@material-tailwind/react";
import Header from "../../components/Header/Header";

const Friends = () => {
  return (
    <>
      <Header active="friends" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 px-0 sm:px-4 lg:px-8 my-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <section
            className="bg-postsColor w-full py-3 rounded-md min-h-48"
            key={index}
          >
            <div className="relative">
              <img
                src="/src/assets/images/Wallpaper.png"
                alt="wallpaper"
                className="w-full -mt-3"
              />
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%]">
                <img
                  src="/src/assets/images/User.png"
                  alt="user"
                  className="w-32 h-32 md:w-32 sm:size-40 md:h-32 lg:size-36 xl:size-32 rounded-full -mt-3 border-4 border-postsColor"
                />
              </div>
            </div>
            <div className="content px-5 text-center">
              <h1 className="text-[30px] font-[600] mt-20 text-center">
                Motaz Ramadan
              </h1>
              <p className="text-[1rem] font-[500] text-center pb-5 sm:pb-0">
                Software engineer & Js Developer & CEO & Founder of ©DEVISTER
              </p>
              <Button className="bg-mainColor text-blackColor my-2">
                follow
              </Button>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default Friends;
