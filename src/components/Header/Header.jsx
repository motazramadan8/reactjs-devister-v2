import { useEffect, useState } from "react";
import {
  Typography,
  IconButton,
  Avatar,
  Button,
  MobileNav,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { MdHomeFilled } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { PiBagSimpleFill } from "react-icons/pi";
import { IoIosNotifications } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Header = ({ active }) => {
  const [openNav, setOpenNav] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  function ClockIcon() {
    return (
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.99998 14.9C9.69736 14.9 11.3252 14.2257 12.5255 13.0255C13.7257 11.8252 14.4 10.1974 14.4 8.49998C14.4 6.80259 13.7257 5.17472 12.5255 3.97449C11.3252 2.77426 9.69736 2.09998 7.99998 2.09998C6.30259 2.09998 4.67472 2.77426 3.47449 3.97449C2.27426 5.17472 1.59998 6.80259 1.59998 8.49998C1.59998 10.1974 2.27426 11.8252 3.47449 13.0255C4.67472 14.2257 6.30259 14.9 7.99998 14.9ZM8.79998 5.29998C8.79998 5.0878 8.71569 4.88432 8.56566 4.73429C8.41563 4.58426 8.21215 4.49998 7.99998 4.49998C7.7878 4.49998 7.58432 4.58426 7.43429 4.73429C7.28426 4.88432 7.19998 5.0878 7.19998 5.29998V8.49998C7.20002 8.71213 7.28434 8.91558 7.43438 9.06558L9.69678 11.3288C9.7711 11.4031 9.85934 11.4621 9.95646 11.5023C10.0536 11.5425 10.1577 11.5632 10.2628 11.5632C10.3679 11.5632 10.472 11.5425 10.5691 11.5023C10.6662 11.4621 10.7544 11.4031 10.8288 11.3288C10.9031 11.2544 10.9621 11.1662 11.0023 11.0691C11.0425 10.972 11.0632 10.8679 11.0632 10.7628C11.0632 10.6577 11.0425 10.5536 11.0023 10.4565C10.9621 10.3593 10.9031 10.2711 10.8288 10.1968L8.79998 8.16878V5.29998Z"
          fill="#90A4AE"
        />
      </svg>
    );
  }

  const navList = (
    <ul className="mt-2 mb-4 -ml-[5rem] hidden flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:flex">
      <Typography
        as="li"
        variant="h3"
        className={`relative flex items-center gap-x-2 p-1 font-medium text-[#B0B3B8] ${
          active === "home" &&
          "text-mainColor after:absolute after:h-[3px] after:w-[100%] after:left-0 after:bottom-[-10px] after:bg-mainColor"
        }`}
      >
        <a href="/" className="flex items-center">
          <MdHomeFilled />
        </a>
      </Typography>
      <Typography
        as="li"
        variant="h3"
        className={`relative flex items-center gap-x-2 p-1 font-medium text-[#B0B3B8] ${
          active === "friends" &&
          "text-mainColor after:absolute after:h-[3px] after:w-[100%] after:left-0 after:bottom-[-10px] after:bg-mainColor"
        }`}
      >
        <a href="/friends" className="flex items-center">
          <FaUserFriends />
        </a>
      </Typography>
      <Typography
        as="li"
        variant="h3"
        className={`relative flex items-center gap-x-2 p-1 font-medium text-[#B0B3B8] ${
          active === "jobs" &&
          "text-mainColor after:absolute after:h-[3px] after:w-[100%] after:left-0 after:bottom-[-10px] after:bg-mainColor"
        }`}
      >
        <a href="/jobs" className="flex items-center">
          <PiBagSimpleFill />
        </a>
      </Typography>
    </ul>
  );

  return (
    <nav className="px-4 py-2 lg:px-8 lg:py-2 bg-postsColor border-none rounded-none">
      <div className="flex items-center justify-between">
        <div className="flex text-textColor items-center">
          <Typography as="a" href="/" className="py-1.5">
            <img
              src="/src/assets/images/Logo.png"
              alt="logo"
              className="max-w-[35px] mr-3"
            />
          </Typography>
          <div>
            <input
              type="text"
              className="hidden sm:block bg-shapesColor rounded-xl color-textColor border-none px-3 h-[2.5rem] w-[14rem] outline-none"
              placeholder="Search Devister"
            />
            <IconButton
              className="rounded-full bg-shapesColor block sm:hidden"
              size="lg"
              onClick={() => setOpenSearch((prev) => !prev)}
            >
              {openSearch ? (
                <IoMdClose
                  size="lg"
                  color="#B0B3B8"
                  className="size-[1.7rem]"
                />
              ) : (
                <IoSearchSharp
                  size="lg"
                  color="#B0B3B8"
                  className="size-[1.7rem]"
                />
              )}
            </IconButton>
            {openSearch && (
              <input
                type="text"
                className="bg-shapesColor color-textColor border-none pl-3 h-[3rem] w-full outline-none absolute left-0 top-[4rem] z-50"
                placeholder="Search Devister"
              />
            )}
          </div>
        </div>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-4">
          <Menu>
            <MenuHandler>
              <IconButton
                className="rounded-full bg-shapesColor relative"
                size="lg"
              >
                <IoSettings size="lg" color="#B0B3B8" className="size-6" />
              </IconButton>
            </MenuHandler>
            <MenuList className="bg-shapesColor text-textColor border-none">
              <MenuItem className="flex items-center gap-1 hover:!bg-[#1e1e1e] hover:!text-textColor">
                <CiLogout className="size-4" /> Logout
              </MenuItem>
              <MenuItem className="flex items-center gap-1 hover:!bg-[#1e1e1e] hover:!text-textColor">
                <MdDashboard className="size-4" /> Dashboard
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuHandler>
              <IconButton className="rounded-full bg-shapesColor" size="lg">
                <IoIosNotifications
                  size="lg"
                  color="#B0B3B8"
                  className="size-7"
                />
              </IconButton>
            </MenuHandler>
            <MenuList className="flex flex-col gap-2 bg-shapesColor border-none ">
              <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8 hover:!bg-[#1e1e1e] ">
                <Avatar
                  variant="circular"
                  alt="tania andrew"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
                <div className="flex flex-col gap-1">
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-semibold text-textColor"
                  >
                    Tania send you a message
                  </Typography>
                  <Typography className="flex items-center gap-1 text-sm font-medium text-textColor">
                    <ClockIcon />
                    13 minutes ago
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8 hover:!bg-[#1e1e1e]">
                <Avatar
                  variant="circular"
                  alt="natali craig"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                />
                <div className="flex flex-col gap-1">
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-semibold text-textColor"
                  >
                    Tania send you a message
                  </Typography>
                  <Typography className="flex items-center gap-1 text-sm font-medium text-textColor">
                    <ClockIcon />
                    13 minutes ago
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8 hover:!bg-[#1e1e1e]">
                <Avatar
                  variant="circular"
                  alt="paypal"
                  src="https://dwglogo.com/wp-content/uploads/2016/08/PayPal_Logo_Icon.png"
                />
                <div className="flex flex-col gap-1">
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-semibold text-textColor"
                  >
                    Tania send you a message
                  </Typography>
                  <Typography className="flex items-center gap-1 text-sm font-medium text-textColor">
                    <ClockIcon />
                    13 minutes ago
                  </Typography>
                </div>
              </MenuItem>
            </MenuList>
          </Menu>
          <Avatar
            variant="circular"
            alt="user-img"
            src="/src/assets/images/user.png"
            className="w-11 cursor-pointer"
            onClick={() => navigate("/profile")}
          />
          <IconButton
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden "
            size="lg"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>

      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1 mt-5">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </div>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </div>
      </MobileNav>
    </nav>
  );
};

export default Header;
