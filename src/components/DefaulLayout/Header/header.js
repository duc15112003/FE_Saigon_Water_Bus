import logoapp from "../../../image/logo.png";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import { useAuth } from "../../../AuthContext";


function Header() {
  const { isLoggedIn, logout } = useAuth();


            const username = localStorage.getItem('us');
            // console.log(sessionStorage.getItem('us'))

    return (
        <div className="Header  bg-white w-full z-50">
            <section className="relative mx-auto">
                <nav className="flex justify-between bg-slate-50 text-black w-full shadow-lg">
                    <div className="px-5 xl:px-12 py-6 flex w-full items-center">
                        <div className="w-3/12">
                            <a className="text-3xl font-bold font-heading" href="/">
                            <img className="h-12 w-15" alt='' src={logoapp} />
                        </a>
                        </div>
                        
                        <div className="w-6/12">
                                <ul className="hidden md:flex px-4 mx-auto lg:gap-8 font-semibold font-heading space-x-12 justify-center">
                                    <li>
                                        <a className="hover:text-gray-200" href="/">Trang Chủ</a>
                                    </li>
                                    <li>
                                        <a className="hover:text-gray-200" href="/ben-tau">Bến Tàu</a>
                                    </li>
                                    <li>
                                        <a className="hover:text-gray-200" href="/lich">Lịch khởi hành</a>
                                    </li>
                                    <li>
                                        <a className="hover:text-gray-200" href="/dat-ve">Đặt Vé</a>
                                    </li>
                                    <li>
                                        <a className="hover:text-gray-200" href="/contact">Liên Hệ</a>
                                    </li>
                                    {isLoggedIn && (
                                        <li>
                                            <a className="hover:text-gray-200" href="/lich-su-dat-ve">Lịch sử đặt vé</a>
                                        </li>
                                    )}
                                </ul>
                        </div>
                        
                        <div className="hidden xl:flex space-x-5 items-center w-3/12 justify-end">


                    {isLoggedIn ? (
        <div className="flex items-center">
          <a className="flex items-center hover:text-gray-200" href="/profile">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
           {username}
          </a>
          <button
            className="flex items-center hover:text-gray-200 ml-4"
            onClick={logout}
          >
 
            Đăng xuất
                               <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    height="1.5em"
                    width="1.5em"
                    >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M14 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7a2 2 0 002-2v-2" />
                    <path d="M7 12h14l-3-3m0 6l3-3" />
                    </svg>
          </button>
        </div>
      ) : (
        <a className="flex items-center hover:text-gray-200" href="/login">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Đăng nhập
        </a>
      )}
                        </div>
                    </div>
                    <a className="xl:hidden flex mr-6 items-center" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="flex absolute -mt-5 ml-4">
                            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                        </span>
                    </a>
                    <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </a>
                </nav>
            </section>
        </div>
    );
}

export default Header;
