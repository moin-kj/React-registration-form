import React from "react";
import facebook from "../../../assets/images/icons8-facebook-f-30.png";
import instagram from "../../../assets/images/icons8-instagram-50.png";
import twitter from "../../../assets/images/icons8-twitter-30.png";
import { Link, NavLink } from "react-router-dom";



const Registration = () => {
  return (
    <div className="flex justify-center items-center align-middle h-screen">
      <div className="reg-content w-[70%]">
        <h1 className="text-white text-[32px] font-[600] uppercase text-center tracking-[5px]">
          Registration
        </h1>

        <div className="pt-12">
          <form>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 pl-3 text-sm font-medium text-white dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                class="bg-[#cccccc] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="username@gmail.com"
                required
              />
            </div>
            <div class="mb-6 pt-4">
              <label
                for="password"
                class="block mb-2 pl-3 text-sm font-medium text-white dark:text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                class="bg-[#cccccc] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-900 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="password"
                required
              />
            </div>
            <div className="flex justify-center pt-4">
              <Link to="/PersonalInformation">
              <button
                type="submit"
                class="text-white uppercase bg-tarnspirent focus:ring-4 focus:outline-none border-white border-2 font-medium rounded-lg text-xl w-full sm:w-auto px-12 py-2 text-center"
              >
                Next
              </button>
              </Link>
            </div>
          </form>
        </div>
        <div className="social-links flex items-center justify-between pt-4">
          <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700 w-[33%]" />
          <p className="text-lg font-[500] text-white">Sign in with</p>
          <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700 w-[33%]" />
        </div>
        <div className="social-icon flex justify-center pt-4">
            <img className="w-[40px] h-[40px] cursor-pointer"  src={facebook}/>
            <img className="w-[40px] h-[40px] mx-8 cursor-pointer" src={instagram}/>
            <img className="w-[40px] h-[40px] ml-2 cursor-pointer" src={twitter}/>

        </div>
      </div>
    </div>
  );
};

export default Registration;
