import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
            <h1>Helping Victims Affected</h1>
            <Link to="/programs" className="border-solid border-4 border-white hover:bg-white hover:text-black rounded-full px-4 py-2">Read More</Link>
        </div>
      </section>

      <div className="bg-purple-700">
        <div className="container mx-auto md:grid grid-cols-2 gap-6">
          <div className="text-white text-center p-16 mt-16">
            <h3 className="text-3xl font-bold py-3">About Our Organisation</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, est illum! Asperiores minima rerum sequi ducimus voluptas placeat, 
              soluta perspiciatis, eligendi consequuntur atque adipisci, aperiam fuga ut molestias cum vero.
            </p>
            <br />
            <span className="border-solid border-2 border-white rounded-full px-4 py-2 hover:bg-white hover:text-black"><Link to="/about">Read More</Link></span>
          </div>
          <img src="https://static.wixstatic.com/media/baac51_15632bdbf5be49bb902fd5088ccbcd0e~mv2_d_5692_3460_s_4_2.jpg/v1/fill/w_490,h_640,fp_0.50_0.21,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_15632bdbf5be49bb902fd5088ccbcd0e~mv2_d_5692_3460_s_4_2.jpg" alt="" />
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="md:grid grid-cols-4 text-center p-4 mx-4">
          <div>
            <h2 className="font-bold text-lg text-purple-700">KSH 2M</h2>
            <p>Raised Through Our Campaigns</p>
          </div>
          <div>
            <h2 className="font-bold text-lg text-purple-700">500,000</h2>
            <p>People Served by Helping Hands</p>
          </div>
          <div>
            <h2 className="font-bold text-lg text-purple-700">60</h2>
            <p>Programs Initiated Since 2010</p>
          </div>
          <div>
            <h2 className="font-bold text-lg text-purple-700">5,000</h2>
            <p>Volunteers Across Kenya</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="md:grid grid-cols-2 gap-6 text-center py-6">
          <div>
            <img src="https://static.wixstatic.com/media/baac51_d59f3354898e4d48971cb2b7776537d9~mv2_d_5400_3600_s_4_2.jpg/v1/fill/w_853,h_400,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_d59f3354898e4d48971cb2b7776537d9~mv2_d_5400_3600_s_4_2.jpg" alt="" />
            <p className="font-bold text-2xl text-purple-700 p-4">Forest Restoration</p>
            <p className="hover:text-purple-600"><u><Link to="/programs">Read More</Link></u></p>
          </div>
          <div>
            <img src="https://static.wixstatic.com/media/baac51_f5c122ea7b6f4aec88218ba8283af6e9~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_853,h_400,fp_0.69_0.40,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_f5c122ea7b6f4aec88218ba8283af6e9~mv2_d_5760_3840_s_4_2.jpg" alt="" />
            <p className="font-bold text-2xl text-purple-700 p-4">The Clean-up Team</p>
            <p className="hover:text-purple-600"><u><Link to="/programs">Read More</Link></u></p>
          </div>
        </div>
        <div className="md:grid grid-cols-2 gap-6 text-center">
          <div>
            <img src="https://static.wixstatic.com/media/baac51_10a2c90f70204fec983f6c7e211f2d4b~mv2_d_5123_3419_s_4_2.jpg/v1/fill/w_853,h_400,fp_0.69_0.23,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_10a2c90f70204fec983f6c7e211f2d4b~mv2_d_5123_3419_s_4_2.jpg" alt="" />
            <p className="font-bold text-2xl text-purple-700 p-4">Supplies Packaging</p>
            <p className="hover:text-purple-600"><u><Link to="/programs">Read More</Link></u></p>
          </div>
          <div>
            <img src="https://static.wixstatic.com/media/baac51_765c7cd795af47078946aa8287f53658~mv2_d_6720_4480_s_4_2.jpg/v1/fill/w_853,h_400,fp_0.54_0.40,q_80,usm_0.66_1.00_0.01,enc_auto/baac51_765c7cd795af47078946aa8287f53658~mv2_d_6720_4480_s_4_2.jpg" alt="" />
            <p className="font-bold text-2xl text-purple-700 p-4">Storm Shelter Volunteers</p>
            <p className="hover:text-purple-600"><u><Link to="/programs">Read More</Link></u></p>
          </div>
        </div>
      </div>

      <div className="bg-purple-700">
        <div className="container mx-auto p-12">
          <h1 className="text-white text-4xl font-bold text-center">Get Involved - Rebuid Our Community</h1>
          <div className="md:grid grid-cols-2 gap-8 text-white text-center p-6">
            <div>
              <h3 className="font-bold text-lg"><u>Donate</u></h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos assumenda doloremque omnis aut, 
                consequatur, iusto amet earum quod vitae dolorem voluptate quibusdam. Voluptatum impedit magnam, itaque suscipit rerum facilis nostrum?
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg"><u>Volunteer</u></h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos assumenda doloremque omnis aut, 
                consequatur, iusto amet earum quod vitae dolorem voluptate quibusdam. Voluptatum impedit magnam, itaque suscipit rerum facilis nostrum?
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )

}

export default Home
