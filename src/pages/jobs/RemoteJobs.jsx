import {
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FiMessageCircle } from "react-icons/fi";
import { GrHide } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { TiEdit } from "react-icons/ti";

const RemoteJobs = () => {
  const [love, setLove] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <h1
        className="pt-1 pb-2 text-[23px] font-[600]  cursor-pointer"
        onClick={() => navigate("/jobs/remote")}
      >
        Remote opportunities
      </h1>
      {[1, 2].map((index) => (
        <div key={index} className="bg-postsColor w-full">
          <div className="card-header flex justify-between items-center px-5 pt-5">
            <div className="post-info flex gap-2 items-center">
              <div className="image">
                <img
                  src="/src/assets/images/User.png"
                  alt="user"
                  className="w-14 h-14 rounded-full"
                />
              </div>
              <div className="info leading-[1.5rem]">
                <h4 className="font-[600]">Motaz Ramadan</h4>
                <h6 className="font-[300]">A month age</h6>
              </div>
            </div>
            <Menu>
              <MenuHandler>
                <IconButton
                  variant="text"
                  className="text-textColor p-2 rounded-full"
                  size="lg"
                >
                  <FaEllipsisH />
                </IconButton>
              </MenuHandler>
              <MenuList className="bg-shapesColor text-textColor border-none text-center">
                <MenuItem className="flex items-center gap-1 hover:!bg-[#1e1e1e] hover:!text-textColor">
                  <TiEdit className="size-4" /> Edit
                </MenuItem>
                <MenuItem className="flex items-center gap-1 hover:!bg-[#1e1e1e] hover:!text-textColor">
                  <MdDeleteOutline className="size-4" /> Delete
                </MenuItem>
                <MenuItem className="flex items-center gap-1 hover:!bg-[#1e1e1e] hover:!text-textColor">
                  <GrHide className="size-4" /> Hide
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div className="card-body my-2 px-5 py-1">
            Lorem ipsum is placeholder text commonly used in the graphic print,
            and publishing industries for previewing layouts and visual mockups
            placeholder text commonly used in the grap...{" "}
            <a href="#" className="hover:underline font-[500]">
              Read More
            </a>
          </div>
          <div className="card-img">
            <img
              src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
              alt="post"
            />
          </div>
          <div className="card-reacts flex justify-between items-center py-1 px-5">
            <div className="rich flex gap-1 items-center">
              <img src="/src/assets/images/love.svg" alt="love" />
              <p>20k</p>
            </div>
            <div className="comments hover:underline p-2 cursor-pointer">
              <p className="text-[13px]">4K comments</p>
            </div>
          </div>
          <div className="w-[94%] mx-5 h-[1px] bg-[#3E4042]"></div>
          <div className="card-reacts flex justify-between items-center py-1 px-20">
            <Button
              className="rich flex gap-1 items-center text-textColor"
              variant="text"
              onClick={() => setLove((prev) => !prev)}
            >
              {!love ? (
                <FaRegHeart className="size-5" />
              ) : (
                <img src="/src/assets/images/love.svg" alt="love" />
              )}
              <p>Love</p>
            </Button>
            <Button
              className="rich flex gap-1 items-center text-textColor"
              variant="text"
            >
              <FiMessageCircle className="size-5" />
              <p>Comment</p>
            </Button>
          </div>
        </div>
      ))}
      <div className="my-5"></div>
    </>
  );
};

export default RemoteJobs;
