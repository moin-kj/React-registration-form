import React from 'react'
import { Link, NavLink } from "react-router-dom";
import ApplePay from "../../assets/images/icons8-apple-pay-50.png";
import VisaPay from "../../assets/images/icons8-visa-50.png";
import MasterCard from "../../assets/images/icons8-mastercard-48.png";


const BuyInformation = () => {
  return (
    <div className="flex justify-center items-center align-middle h-screen">
    <div className="reg-content w-[70%]">
      <h1 className="text-white text-[32px] font-[600] uppercase text-center tracking-[5px]">
        Buy Informations
      </h1>
      <div className="social-links flex items-center justify-between pt-4">
        <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700 w-[25%]" />
        <p className="text-lg font-[500] text-white">Select a payment Method</p>
        <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700 w-[25%]" />
      </div>

    <div className='flex justify-center pt-2'>
        <img className='w-[70px] h-[60px]' src={ApplePay}/>
        <img className='w-[70px] h-[60px] mx-10' src={VisaPay}/>
        <img className="w-[70px] h-[60px]" src={MasterCard}/>
    </div>



      <div className="pt-12">
        <form>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 pl-3 text-sm font-medium text-white dark:text-gray-300"
            >
              Card number
            </label>
            <input
              type="number"
              id="number"
              class="bg-[#cccccc] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="----  ----  ----  ----"
              required
            />
          </div>


          <div className='flex justify-between'>
          <div class="mb-6 w-[45%]">
            <label
              for="email"
              class="block mb-2 pl-3 text-sm font-medium text-white dark:text-gray-300"
            >
              Expiry date
            </label>
            <input
              type="number"
              id="number"
              class="bg-[#cccccc] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="mm / yy"
              required
            />
          </div>
          <div class="mb-6 w-[45%]">
            <label
              for="email"
              class="block mb-2 pl-3 text-sm font-medium text-white dark:text-gray-300"
            >
              CVV security code
            </label>
            <input
              type="number"
              id="number"
              class="bg-[#cccccc] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="CVV"
              required
            />
          </div>
          </div>
      
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              class="text-white uppercase bg-tarnspirent focus:ring-4 focus:outline-none border-white border-2 font-medium rounded-lg text-xl w-full sm:w-auto px-10 py-2 text-center"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>

   
    </div>
  </div>
  )
}

export default BuyInformation;