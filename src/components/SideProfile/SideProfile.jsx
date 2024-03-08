import { Button } from "@material-tailwind/react";

const SideProfile = () => {
  const str = "Software engineer & Js Developer & CEO & Founder of ©DEVISTER";
  return (
    <section className="hidden sm:block bg-postsColor xl:w-full 2xl:w-[85%] py-3 rounded-md min-h-48 md:sticky md:top-4">
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
            className="w-36 h-36 rounded-full -mt-3 border-4 border-postsColor"
          />
        </div>
      </div>
      <div className="content px-5">
        <h1 className="text-[30px] font-[600] mt-20 text-center">
          Motaz Ramadan
        </h1>
        <p className="text-[1rem] font-[500] text-center pb-5 sm:pb-0">
          Software engineer & Js Developer & CEO & Founder of ©DEVISTER
        </p>
      </div>

      {[1, 2].map((index) => (
        <div key={index}>
          <div className="hidden sm:block w-full h-[3px] my-3 bg-[#18191A]"></div>
          <div className="hidden sm:flex w-full px-5 py-2 justify-between items-center ">
            <img
              src="/src/assets/images/User.png"
              alt="suggestion-image"
              className="w-[4rem] h-[4rem] rounded-full"
            />
            <div className="info px-2">
              <h3 className="text-[15px] font-[600]">Motaz Ramadan</h3>
              <p className="text-[11px] font-[600]">
                {"Software engineer & Js Developer & CEO & Founder of ©DEVISTER"
                  .length > 50
                  ? str.slice(0, 50) + "..."
                  : str}
              </p>
            </div>
            <div>
              <Button className="bg-mainColor text-blackColor">Follow</Button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SideProfile;
