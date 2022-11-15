import React from 'react'
import {Link} from 'react-router-dom'
import {FaFacebookF,FaTwitter,FaYoutube,FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <main>
      <div className="container mx-auto text-center">
        <h3 className="font-semibold text-2xl p-4">Helping Hands</h3>
        <p>+254 7985-51778</p>
        <p>gregorymark254@gmail.com</p>
        <p>Nairobi,Kenya</p>
        <div className="flex text-center ">
          <Link to="" className="p-2 hover:text-blue-700"><FaFacebookF/></Link>
          <Link to="" className="p-2 hover:text-blue-700"><FaTwitter/></Link>
          <Link to="" className="p-2 hover:text-red-700"><FaYoutube/></Link>
          <Link to="" className="p-2 hover:text-purple-700"><FaInstagram/></Link>
        </div>
      </div>
      <div className="bg-slate-200 p-4">
        <div className="container mx-auto text-center"> 
          <p>&copy;2023 By Helping Hands. Created by Gregory.</p>
        </div>
      </div>
    </main>
  )
}

export default Footer
