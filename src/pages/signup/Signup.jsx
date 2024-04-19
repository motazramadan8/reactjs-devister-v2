import { Button, Input, Option, Select } from "@material-tailwind/react";
import "./signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-5">
        <div className="flex gap-4 justify-center">
          <img src="/src/assets/images/Logo.png" alt="logo" className="w-14" />
          <h1 className="text-[35px] font-[600] text-mainColor">DEVISTER</h1>
        </div>
        <form className="p-5 rounded-md bg-postsColor min-w-[350px] max-w-[470px]">
          <div className="mb-2">
            <Input
              color="amber"
              label="Email"
              className="!text-textColor !bg-[#1e1e1e] !border-none"
              type="email"
            />
          </div>
          <div className="mb-2">
            <Input
              color="amber"
              label="Password"
              className="!text-textColor !bg-[#1e1e1e] !border-none"
              type="password"
            />
          </div>
          <div className="mb-2"></div>
          <div className="mb-2">
            <Input
              color="amber"
              label="Full name"
              className="!text-textColor !bg-[#1e1e1e] !border-none"
              type="text"
            />
          </div>
          <div className="mb-2">
            <Input
              color="amber"
              label="Phone"
              className="!text-textColor !bg-[#1e1e1e] !border-none"
              type="text"
            />
          </div>
          <div className="mb-2">
            <Select
              label="Gender"
              className="!text-textColor bg-[#1e1e1e] !border-none"
              color="amber"
            >
              <Option>Male</Option>
              <Option>Female</Option>
            </Select>
          </div>
          <div className="mb-2">
            <Select
              label="Day"
              className="!text-textColor bg-[#1e1e1e] !border-none"
              color="amber"
            >
              <Option>1</Option>
              <Option>2</Option>
              <Option>3</Option>
              <Option>4</Option>
              <Option>5</Option>
              <Option>6</Option>
              <Option>7</Option>
              <Option>8</Option>
              <Option>9</Option>
              <Option>10</Option>
              <Option>11</Option>
              <Option>12</Option>
              <Option>13</Option>
              <Option>14</Option>
              <Option>15</Option>
              <Option>16</Option>
              <Option>17</Option>
              <Option>18</Option>
              <Option>19</Option>
              <Option>20</Option>
              <Option>21</Option>
              <Option>22</Option>
              <Option>23</Option>
              <Option>24</Option>
              <Option>25</Option>
              <Option>26</Option>
              <Option>27</Option>
              <Option>28</Option>
              <Option>29</Option>
              <Option>30</Option>
              <Option>31</Option>
            </Select>
          </div>
          <div className="mb-2">
            <Select
              label="Month"
              className="!text-textColor bg-[#1e1e1e] !border-none"
              color="amber"
            >
              <Option>1</Option>
              <Option>2</Option>
              <Option>3</Option>
              <Option>4</Option>
              <Option>5</Option>
              <Option>6</Option>
              <Option>7</Option>
              <Option>8</Option>
              <Option>9</Option>
              <Option>10</Option>
              <Option>11</Option>
              <Option>12</Option>
            </Select>
          </div>
          <div className="mb-3">
            <Select
              label="Year"
              className="!text-textColor bg-[#1e1e1e] !border-none"
              color="amber"
            >
              <Option>1970</Option>
              <Option>1971</Option>
              <Option>1972</Option>
              <Option>1973</Option>
              <Option>1974</Option>
              <Option>1975</Option>
              <Option>1976</Option>
              <Option>1977</Option>
              <Option>1978</Option>
              <Option>1979</Option>
              <Option>1980</Option>
              <Option>1981</Option>
              <Option>1982</Option>
              <Option>1983</Option>
              <Option>1984</Option>
              <Option>1985</Option>
              <Option>1986</Option>
              <Option>1987</Option>
              <Option>1988</Option>
              <Option>1989</Option>
              <Option>1990</Option>
              <Option>1991</Option>
              <Option>1992</Option>
              <Option>1993</Option>
              <Option>1994</Option>
              <Option>1995</Option>
              <Option>1996</Option>
              <Option>1997</Option>
              <Option>1998</Option>
              <Option>1999</Option>
              <Option>2000</Option>
              <Option>2001</Option>
              <Option>2002</Option>
              <Option>2003</Option>
              <Option>2004</Option>
              <Option>2005</Option>
              <Option>2006</Option>
              <Option>2007</Option>
              <Option>2008</Option>
              <Option>2009</Option>
              <Option>2010</Option>
              <Option>2011</Option>
              <Option>2012</Option>
              <Option>2013</Option>
              <Option>2014</Option>
              <Option>2015</Option>
              <Option>2016</Option>
              <Option>2017</Option>
              <Option>2018</Option>
              <Option>2019</Option>
              <Option>2020</Option>
              <Option>2021</Option>
              <Option>2022</Option>
              <Option>2023</Option>
              <Option>2024</Option>
            </Select>
          </div>
          <Button fullWidth className="bg-mainColor text-blackColor">
            Signup
          </Button>
          <div className="relative flex py-4 items-center">
            <div className="flex-grow border-t border-[#B0B3B836]" />
            <span className="flex-shrink mx-4 text-[#B0B3B836]">or</span>
            <div className="flex-grow border-t border-[#B0B3B836]" />
          </div>
          <div className="flex justify-center">
            <Button
              className="text-center py-4 bg-[#1e1e1e] text-textColor"
              onClick={() => navigate("/login")}
            >
              You Have Account
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
