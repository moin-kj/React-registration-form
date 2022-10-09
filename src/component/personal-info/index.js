import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import PlusIcon from "../../assets/images/icons8-plus-96.png";
import Dropicon from "../../assets/images/dropicon.png";
import { Link, NavLink } from "react-router-dom";
const PersonalData = () => {
  const [value, setValue] = useState();
  return (
    <div className="flex justify-center items-center align-middle h-screen">
      <form className="reg-content w-[70%]">
        <h1 className="text-white text-[32px] font-[600] uppercase text-center tracking-[5px]">
          Personal Informations
        </h1>

        <div className="pt-12 flex justify-between">
          <div className="w-[50%]">
            <label class="inline-block mb-2 text-white">Your photo</label>
            <div class="flex items-center w-full justify-between">
              <label class="flex flex-col h-32 bg-[#cccccc] w-[80%] rounded-xl">
                <div class="flex items-center justify-center pt-4 cursor-pointer">
                  <img src={PlusIcon} />
                </div>
                <input type="file" class="opacity-0" />
              </label>
            </div>
          </div>
          <div className="info-field mt-[6px]">
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
            <label
              for="email"
              class="block mb-2 pl-3 mt-4 text-sm font-medium text-white dark:text-gray-300"
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
        </div>

        <div className="pt-6">
          <label
            for="phoneNumber"
            class="block mb-2 pl-3 text-sm font-medium text-white dark:text-gray-300"
          >
            Phone number
          </label>
          <div class="bg-[#cccccc] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <PhoneInput
              placeholder="(--) --- -- --"
              className="bg-[#cccccc]"
              value={value}
              onChange={setValue}
            />
          </div>
        </div>
<div className="flex justify-between">
        <div className="pt-6 w-[30%]">
          <label
            for="phoneNumber"
            class="block mb-2 pl-3 text-sm font-medium text-white dark:text-gray-300"
          >
            Day
          </label>
          <div class="bg-[#cccccc] items-center flex border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <img className="w-[15px] h-[10px]" src={Dropicon} />{" "}
            <div class="vl mx-2"></div>
            <select
              id="day"
              className="bg-[#cccccc] outline-none w-full select-opt"
            >
              <option value="volvo">01</option>
              <option value="saab">02</option>
              <option value="opel">03</option>
              <option value="audi">04</option>
            </select>
          </div>
        </div>
        <div className="pt-6 w-[30%]">
          <label
            for="phoneNumber"
            class="block mb-2 pl-3 text-sm font-medium text-white dark:text-gray-300"
          >
            Month
          </label>
          <div class="bg-[#cccccc] items-center flex border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <img className="w-[15px] h-[10px]" src={Dropicon} />{" "}
            <div class="vl mx-2"></div>
            <select
              id="day"
              className="bg-[#cccccc] outline-none w-full select-opt"
            >
              <option value="volvo">1</option>
              <option value="saab">2</option>
              <option value="opel">3</option>
              <option value="audi">4</option>
              <option value="volvo">5</option>
              <option value="saab">6</option>
              <option value="opel">7</option>
              <option value="audi">8</option>
              <option value="volvo">9</option>
              <option value="saab">10</option>
              <option value="opel">11</option>
              <option value="audi">12</option>
            </select>
          </div>
        </div>
        <div className="pt-6 w-[30%]">
          <label
            for="phoneNumber"
            class="block mb-2 pl-3 text-sm font-medium text-white dark:text-gray-300"
          >
            Year
          </label>
          <div class="bg-[#cccccc] items-center flex border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <img className="w-[15px] h-[10px]" src={Dropicon} />{" "}
            <div class="vl mx-2"></div>
            <select
              id="day"
              className="bg-[#cccccc] outline-none w-full select-opt"
            >
              <option value="volvo">2000</option>
              <option value="saab">2020</option>
              <option value="opel">2021</option>
              <option value="audi">2022</option>
            </select>
          </div>
        </div>
      </div>


      <div className="flex justify-center pt-8">
              <Link to="/DeliveryInfo">
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
  );
};

export default PersonalData;
