import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm relative px-20 max-sm:px-0">
               <div className="navbar-start">
                  <div className="dropdown">
                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                          </svg>
                     </div>
                    <ul tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                      <li><a className='text-[#000000e6]'>Home</a></li>
                      <li><a className='text-[#000000e6]'>FAQ</a></li>
                      <li><a className='text-[#000000e6]'>Changelog</a></li>
                      <li><a className='text-[#000000e6]'>Blog</a></li>
                      <li><a className='text-[#000000e6]'>Download</a></li>
                      <li><a className='text-[#000000e6]'>Contact</a></li>
                    </ul>
                 </div>

                 <a className="btn btn-ghost text-2xl max-sm:text-xl font-bold">CS — Ticket System</a>
              </div>

              <div className="absolute right-4 top-3 lg:hidden">
                 <a className="btn px-4 py-2 rounded-md text-white transition bg-[linear-gradient(125.07deg,_rgba(99,_46,_227,_1),_rgba(159,_98,_242,_1)_100%)] hover:opacity-90">
                     + New Ticket
                 </a>
              </div>

              <div className="navbar-end hidden lg:flex gap-4">
                 <ul className="menu menu-horizontal px-1">
                      <li><a className='text-[#000000e6]'>Home</a></li>
                      <li><a className='text-[#000000e6]'>FAQ</a></li>
                      <li><a className='text-[#000000e6]'>Changelog</a></li>
                      <li><a className='text-[#000000e6]'>Blog</a></li>
                      <li><a className='text-[#000000e6]'>Download</a></li>
                      <li><a className='text-[#000000e6]'>Contact</a></li>
                </ul>
               <a className="btn px-4 py-2 rounded-md text-white transition bg-[linear-gradient(125.07deg,_rgba(99,_46,_227,_1),_rgba(159,_98,_242,_1)_100%)] hover:opacity-90">
                   + New Ticket
               </a>

             </div>
        </div>

        </div>
    );
};

export default Navbar;