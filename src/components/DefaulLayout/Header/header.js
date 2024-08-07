// src/components/Navbar.js
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import { useAuth } from "../../../AuthContext";
import './style.css';
const Navbar = () => {
    const { isLoggedIn, logout } = useAuth();
    const username = localStorage.getItem('us');
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white p-4 navbar-responsive relative z-50">

 <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-lg font-bold flex">
            <div className='mt-2'>
                <img className="h-10 w-15" alt='' src="/img/logo_footer.png" />
            </div>
            <p className='mt-2 ml-1 text-xl justify-center'>Saigon Waterbus</p>
        </div>
        <div className="block lg:hidden">
            <button onClick={toggleMenu} className="hover:text-white focus:outline-none">
                {isOpen ? <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/delete-sign--v1.png" alt="delete-sign--v1"/>:<img width="24" height="24" src="https://img.icons8.com/ios-filled/36/menu--v1.png" alt="menu--v1"/>}
            </button>
        </div>
        <div
            className={`lg:flex lg:flex-row lg:items-center ${isOpen ? 'flex bg-slate-300' : 'hidden'} flex-col lg:static absolute top-16 left-0 lg:top-0 w-full lg:w-auto border-t lg:border-none`}
        >
            <div className="flex flex-col items-start py-2 w-full lg:hidden">
                {isLoggedIn ? (
                    <div className="w-full">
                        <div className="flex flex-col items-center">
                            <img src="/img/icon/account.png" alt="User" className="rounded-full mb-2" />
                            <a href='/profile' alt='thong tin ca nhan'>
                                <h3 className="text-black font-semibold">Tài khoản: <span className='text-sky-700'>{username}</span></h3>
                            </a>
                        </div>
                        <div className="flex w-full mt-2 justify-center">
                            <a className="flex items-center bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 focus:outline-none" href='/profile'>
                                <div className='mr-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                    </svg>
                                </div>
                                Thông tin
                            </a>
                            <button onClick={logout} className="flex items-center bg-blue-500 text-white rounded px-4 py-2 ml-2 hover:bg-blue-600 focus:outline-none">
                                <div className='mr-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M14 4.75A2.75 2.75 0 0 0 11.25 2h-3A2.75 2.75 0 0 0 5.5 4.75v.5a.75.75 0 0 0 1.5 0v-.5c0-.69.56-1.25 1.25-1.25h3c.69 0 1.25.56 1.25 1.25v6.5c0 .69-.56 1.25-1.25 1.25h-3c-.69 0-1.25-.56-1.25-1.25v-.5a.75.75 0 0 0-1.5 0v.5A2.75 2.75 0 0 0 8.25 14h3A2.75 2.75 0 0 0 14 11.25v-6.5Zm-9.47.47a.75.75 0 0 0-1.06 0L1.22 7.47a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06l-.97-.97h7.19a.75.75 0 0 0 0-1.5H3.56l.97-.97a.75.75 0 0 0 0-1.06Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                Đăng xuất
                            </button>
                        </div>
                    </div>
                ) : (
                    <a className="flex w-full font-bold md:text-base justify-center hover:text-gray-600 gap-2" href="/login" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Đăng nhập
                    </a>
                )}
            </div>
            <ul className="flex flex-col lg:flex-row lg:items-center lg:ml-auto w-full lg:w-auto lg:py-0 py-2 font-semibold">
                <li className="lg:ml-4 ml-4">
                    <a href="/" className="block py-2 px-4 text-black hover:text-red">Trang Chủ</a>
                </li>
                <li className="lg:ml-4 ml-4">
                    <a href="/ben-tau" className="block py-2 px-4 text-black hover:text-red">Bến tàu</a>
                </li>
                <li className="lg:ml-4 ml-4">
                    <a href="/lich" className="block py-2 px-4 text-black hover:text-red">Lịch khởi hành</a>
                </li>
                <li className="lg:ml-4 ml-4">
                    <a href="/dat-ve" className="block py-2 px-4 text-black hover:text-red">Đặt vé</a>
                </li>
                <li className="lg:ml-4 ml-4">
                    <a href="/contact" className="block py-2 px-4 text-black hover:text-red">Liên hệ</a>
                </li>
                {isLoggedIn && (
                    <li className="lg:ml-4 ml-4">
                        <a className="block py-2 px-4 text-black hover:text-red" href="/lich-su-dat-ve">Lịch sử đặt vé</a>
                    </li>
                )}
            </ul>
        </div>
        {isLoggedIn ? (
            <div className="hidden lg:flex items-center space-x-4 lg:space-x-6 font-semibold">
                <div className="text-black flex items-center">
                    <a href='/profile' alt='thong tin ca nhan'>
                        <img src='/img/icon/userheader.png' className='inline-block' alt='user'></img>
                        <span className='ml-2'>{username}</span> 
                    </a>
                </div>
                <button onClick={logout} className="text-black hover:text-green focus:outline-none flex">
                    <div className='text-black flex items-center'>
                        <img src='/img/icon/log-out.png' className='inline-block' alt='user'></img>
                    </div>
                    <p className='ml-2'>Đăng xuất</p>
                </button>
            </div>
        ) : (
            <a className="hidden lg:flex items-center hover:text-gray-200" href="/login">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Đăng nhập
            </a>
        )}
    </div>

        </nav>
    );
};

export default Navbar;
