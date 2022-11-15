import React from 'react'

const Header = () => {
  return (
    <main>
      <div className="container mx-auto px-4">
        <div className="md:flex items-center justify-between py-4">
          <div className="flex gap-6">
            <img className="w-14" src="https://img.icons8.com/dotty/344/tied-hands.png" alt="logo" />
            <p className="font-bold text-3xl py-3 text-purple-700">Helping Hands</p>
          </div>
          <div >
            <button className="bg-purple-700 hidden text-white rounded-full px-6 py-3">Get Involved</button>
          </div>
        </div>
      </div>
      <hr className="border-black"/>
    </main>
  )
}
export default Header
