import React from 'react'

const Contact = () => {
  return (
    <main>
      <div className="bg-slate-100">
        <div className="container mx-auto p-4">
          <div className="m-12">
            <h3 className="text-purple-700 font-bold text-center text-2xl p-4">Contact Us</h3>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ut tempore quam incidunt, repellendus praesentium doloremque est ipsam! Veritatis corrupti laborum libero quam dicta quis temporibus magnam praesentium nam animi!
              Quis quisquam, velit expedita in pariatur modi voluptas eum, ducimus nesciunt fuga doloribus dolores eaque eos. Obcaecati perspiciatis esse, iure eos placeat eveniet labore accusantium rem possimus provident, numquam autem.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-700">
        <div className="container mx-auto p-28 text-center text-white text-lg">
          <p>info@helpinghands.com</p>
          <p>+254 7985-51778</p>
          <p>Nairobi,Kenya</p>
        </div>
      </div>
      <div className="bg-purple-800 p-8 ">
        <div className="container mx-auto">
          <form >
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                  <label className="text-white dark:text-gray-200">First Name</label>
                  <input type="text" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
              </div>
              <div>
                  <label className="text-white dark:text-gray-200" >Last Name</label>
                  <input type="text" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
              </div>
              <div>
                  <label className="text-white dark:text-gray-200">Email</label>
                  <input type="email" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
              </div>
              <div>
                  <label className="text-white dark:text-gray-200">Subject</label>
                  <input type="text" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
              </div>
              <div className="col-span-2">
                <label className="text-white  dark:text-gray-200">Message</label>
                <textarea name="message" required id="" cols="40" rows="5" className="block  w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
              </div><br />
            </div>
            <div className=" flex justify-center">
              <button className="px-8 py-2  leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Contact
