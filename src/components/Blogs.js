import React from 'react'

const Blogs = () => {
  return (
    <main>
      <h3 className="text-center text-purple-700 text-lg font-bold">Helping Hands Blog</h3>
      <div className="container mx-auto">
        <p>All Posts</p>
      </div>
      <div className="container mx-auto">
        <div className="md:grid grid-cols-2 gap-6 border border-black my-8">
          <img className="w-full" src="https://static.wixstatic.com/media/7e479d05d6e340e890bb5f4245eca025.jpg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90,enc_auto/7e479d05d6e340e890bb5f4245eca025.jpg" alt="" /> 
          <div className="m-4 py-12">
            <h3 className="text-2xl font-bold py-4">How To Prepare For Hurricans</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequatur quibusdam esse excepturi quis maxime illo deserunt dolores eos, 
              voluptatibus officia. Magnam quos sed perspiciatis cupiditate saepe explicabo laboriosam odio.
            </p>
            <hr />
          </div>
        </div>
        <div className="md:grid grid-cols-2 gap-6 border border-black my-8">
          <img className="w-full" src="https://static.wixstatic.com/media/95843f8b981545b2bbda41070d56c007.jpg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90,enc_auto/95843f8b981545b2bbda41070d56c007.webp" alt="" /> 
          <div className="m-4 py-12">
            <h3 className="text-2xl font-bold py-4">Join Our New Program: Forest Recovery</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequatur quibusdam esse excepturi quis maxime illo deserunt dolores eos, 
              voluptatibus officia. Magnam quos sed perspiciatis cupiditate saepe explicabo laboriosam odio.
            </p>
            <hr />
          </div>
        </div>
        <div className="md:grid grid-cols-2 gap-6 border border-black my-8">
          <img className="w-full" src="https://static.wixstatic.com/media/9e31db51a8d545bd9241f10871199ec7.jpg/v1/fill/w_454,h_341,fp_0.50_0.50,q_90,enc_auto/9e31db51a8d545bd9241f10871199ec7.webp" alt="" /> 
          <div className="m-4 py-12">
            <h3 className="text-2xl font-bold py-4">Kenya Forests Restoration, Where Do We Start</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequatur quibusdam esse excepturi quis maxime illo deserunt dolores eos, 
              voluptatibus officia. Magnam quos sed perspiciatis cupiditate saepe explicabo laboriosam odio.
            </p>
            <hr />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Blogs
