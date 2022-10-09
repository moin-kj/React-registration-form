import React from 'react';
import { Link, NavLink } from "react-router-dom";
import Dropicon from "../../assets/images/dropicon.png";

const DeliveryInfo = () => {
  return (
    <div className="flex justify-center items-center align-middle h-screen">
    <div className="reg-content w-[70%]">
      <h1 className="text-white text-[32px] font-[600] uppercase text-center tracking-[5px]">
        Delivery Informations
      </h1>

      <div className="pt-4">
        <form>
        <div className="pt-6 w-full">
          <label
            for="phoneNumber"
            class="block mb-2 pl-3 text-sm font-medium text-white dark:text-gray-300"
          >
            Country
          </label>
          <div class="bg-[#cccccc] items-center flex border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <img className="w-[15px] h-[10px]" src={Dropicon} />{" "}
            <div class="vl mx-2"></div>
            <select
              id="day"
              className="bg-[#cccccc] outline-none w-full select-opt"
            >
              <option value="volvo">Ukrain</option>
              <option value="saab">Pakistan</option>
              <option value="opel">UAE</option>
              <option value="audi">UK</option>
            </select>
          </div>
        </div>
        <div className="pt-6 w-full">
          <label
            for="phoneNumber"
            class="block mb-2 pl-3 text-sm font-medium text-white dark:text-gray-300"
          >
            City
          </label>
          <div class="bg-[#cccccc] items-center flex border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {/* <img className="w-[15px] h-[10px]" src={Dropicon} />{" "}
            <div class="vl mx-2"></div> */}
            <select
              id="day"
              className="bg-[#cccccc] outline-none w-full select-opt pl-4"
            >
              <option value="volvo">Kyiv</option>
              <option value="saab">Islambad</option>
              <option value="opel">Karachi</option>
              <option value="audi">Abbottabad</option>
            </select>
          </div>
        </div>
        <div className="pt-6 w-full">
          <label
            for="phoneNumber"
            class="block mb-2 pl-3 text-sm font-medium text-white dark:text-gray-300"
          >
            Street
          </label>
          <div class="bg-[#cccccc] items-center flex border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {/* <img className="w-[15px] h-[10px]" src={Dropicon} />{" "}
            <div class="vl mx-2"></div> */}
            <select
              id="day"
              className="bg-[#cccccc] outline-none w-full select-opt pl-4"
            >
              <option value="volvo">Palaton Mayborda Street</option>
              <option value="saab">Islambad</option>
              <option value="opel">Karachi</option>
              <option value="audi">Abbottabad</option>
            </select>
          </div>
        </div>

        <div className='flex justify-between'>
        <div className="pt-6 w-[45%]">
          <label
            for="phoneNumber"
            class="block mb-2 pl-3 text-sm font-medium text-white dark:text-gray-300"
          >
            Home
          </label>
          <div class="bg-[#cccccc] items-center flex border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

            <input type="text" placeholder='25' className="bg-[#cccccc] outline-none w-full select-opt pl-4"/>
          </div>
        </div>
        <div className="pt-6 w-[45%]">
          <label
            for="phoneNumber"
            class="block mb-2 pl-3 text-sm font-medium text-white dark:text-gray-300"
          >
            Flat
          </label>
          <div class="bg-[#cccccc] items-center flex border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

            <input type="text" placeholder='6' className="bg-[#cccccc] outline-none w-full select-opt pl-4"/>
          </div>
        </div>
        </div>
            
          <div className="flex justify-center pt-8">
            <Link to="/BuyInfo">
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

     
    </div>
  </div>
  )
}

export default DeliveryInfo;