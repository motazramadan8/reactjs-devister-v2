import { useNavigate } from "react-router-dom";
import "./login.css";
import { Button, Input } from "@material-tailwind/react";

const Login = () => {
  const navigate = useNavigate();
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-5">
        <div className="flex gap-4 justify-center">
          <img src="/src/assets/images/Logo.png" alt="logo" className="w-14" />
          <h1 className="text-[35px] font-[600] text-mainColor">DEVISTER</h1>
        </div>
        <form className="p-5 rounded-md bg-postsColor min-w-[350px] max-w-[470px]">
          <Input
            color="amber"
            label="Email"
            className="!text-textColor !bg-[#1e1e1e] !border-none"
            type="email"
          />
          <br />
          <Input
            color="amber"
            label="Password"
            className="!text-textColor !bg-[#1e1e1e] !border-none"
            type="password"
          />
          <br />
          <Button fullWidth className="bg-mainColor text-blackColor">
            Login
          </Button>
          <div className="relative flex py-4 items-center">
            <div className="flex-grow border-t border-[#B0B3B836]" />
            <span className="flex-shrink mx-4 text-[#B0B3B836]">or</span>
            <div className="flex-grow border-t border-[#B0B3B836]" />
          </div>
          <div className="flex justify-center">
            <Button
              className="text-center py-4 bg-[#1e1e1e] text-textColor"
              onClick={() => navigate("/signup")}
            >
              Create new account
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
