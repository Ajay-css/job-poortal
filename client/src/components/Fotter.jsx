import React from 'react'
import { assets } from '../assets/assets'

const Fotter = () => {
    return (
        <div className='container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20'>
            <img width={160} src={assets.logo} alt="" />
            <p className='flex-1 border-1 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @Ajay.dev | All Rights Reserved</p>
            <div className='flex gap-2.5'>
                <img width={30} src={assets.facebook_icon} alt="" />
                <img width={30} src={assets.twitter_icon} alt="" />
                <img width={30} src={assets.instagram_icon} alt="" />
            </div>
        </div>
    )
}

export default Fotter