import React from 'react';
import twitter from '../assets/Twitter.png';
import facebook from '../assets/Facebook.png';
import linkedin from '../assets/LinkedIn.png';
import mail from '../assets/Mail.png';

const Footer = () => {
    return (
        <div className='bg-black px-20 text-white max-sm:px-2'>
            <div className='flex justify-between gap-26 py-20 max-sm:p-4 max-sm:flex-col max-sm:gap-9'>
                <div className='flex flex-col gap-4'>
                    <p className='text-2xl font-bold'>CS — Ticket System</p>
                    <p className='text-[#a1a1aa] w-82.5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-xl font-medium'>Company</p>
                    <p className="text-[#6c6e74] cursor-pointer transition duration-200 hover:text-[#9f62f2] active:scale-95">About Us</p>
                    <p className="text-[#6c6e74] cursor-pointer transition duration-200 hover:text-[#9f62f2] active:scale-95">Our Mission</p>
                    <p className="text-[#6c6e74] cursor-pointer transition duration-200 hover:text-[#9f62f2] active:scale-95">Contact Saled</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-xl font-medium'>Services</p>
                    <p className="text-[#6c6e74] cursor-pointer transition duration-200 hover:text-[#9f62f2] active:scale-95">Products & Services</p>
                    <p className="text-[#6c6e74] cursor-pointer transition duration-200 hover:text-[#9f62f2] active:scale-95">Customer Stories</p>
                    <p className="text-[#6c6e74] cursor-pointer transition duration-200 hover:text-[#9f62f2] active:scale-95">Download Apps</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-xl font-medium'>Information</p>
                    <p className="text-[#6c6e74] cursor-pointer transition duration-200 hover:text-[#9f62f2] active:scale-95">Privacy Policy</p>
                    <p className="text-[#6c6e74] cursor-pointer transition duration-200 hover:text-[#9f62f2] active:scale-95">Terms & Conditions</p>
                    <p className="text-[#6c6e74] cursor-pointer transition duration-200 hover:text-[#9f62f2] active:scale-95">Join Us</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-xl font-medium'>Social Links</p>
                    <p className="text-[#6c6e74] cursor-pointer transition duration-200 hover:text-[#9f62f2] active:scale-95 flex items-center gap-1"><img src={twitter} className='h-5'/>@CS — Ticket System</p>
                    <p className="text-[#6c6e74] cursor-pointer transition duration-200 hover:text-[#9f62f2] active:scale-95 flex items-center gap-1"><img src={linkedin} className='h-5'/>@CS — Ticket System</p>
                    <p className="text-[#6c6e74] cursor-pointer transition duration-200 hover:text-[#9f62f2] active:scale-95 flex items-center gap-1"><img src={facebook} className='h-5'/>@CS — Ticket System</p>
                    <p className="text-[#6c6e74] cursor-pointer transition duration-200 hover:text-[#9f62f2] active:scale-95 flex items-center gap-1"><img src={mail} className='h-5'/>support@cst.com</p>
                </div>

            </div>
            <div className='py-7 border-t-1 border-[#6c6e74]'>
                <p className='text-center text-[#a1a1aa]'>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;