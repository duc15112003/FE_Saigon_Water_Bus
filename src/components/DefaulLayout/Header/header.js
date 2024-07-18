
import { useState } from "react";
import { useAuth } from "../../../AuthContext";


function Header() {
  const { isLoggedIn, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


            const username = localStorage.getItem('us');
            // console.log(sessionStorage.getItem('us'))
    return (
        <div className="Header  bg-white w-full  fixed " style={{zIndex:'9999'}}>

      <div className={`fixed w-3/4 h-full top-0 right-0 bg-white shadow-lg rounded-md transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
        <button onClick={toggleMenu} className="absolute right-4 top-4 text-gray-600 hover:text-gray-800">
          Đóng
        </button>
        <ul className="w-full px-4 py-8 text-base font-semibold space-y-4 bg-gray-50 rounded-lg">
          <li>
            <a className="block hover:text-gray-600" href="/">Trang Chủ</a>
          </li>
          <li>
            <a className="block hover:text-gray-600" href="/ben-tau">Bến Tàu</a>
          </li>
          <li>
            <a className="block hover:text-gray-600" href="/lich">Lịch khởi hành</a>
          </li>
          <li>
            <a className="block hover:text-gray-600" href="/dat-ve">Đặt Vé</a>
          </li>
          <li>
            <a className="block hover:text-gray-600" href="/contact">Liên Hệ</a>
          </li>
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <a className="flex items-center hover:text-gray-600" href="/profile">
                <img src="/img/icon/user.png" alt="User Icon" className="h-6 w-6 mr-2"/>
                <span>{username}</span>
              </a>
              <button
                className="flex items-center hover:text-gray-600"
                onClick={logout}
              >
                <img src="/img/icon/logout.png" alt="Logout Icon" className="h-6 w-6 mr-2"/>
                <span>Đăng xuất</span>
              </button>
            </div>
          ) : (
            <a className="flex items-center hover:text-gray-600" href="/login">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Đăng nhập
            </a>
          )}
        </ul>
      </div>

            <section className="relative mx-auto">
                <nav className="flex justify-between bg-slate-50 text-black w-full shadow-lg">
                    <div className="px-5 xl:px-12 py-2 flex w-full items-center">
                        <div className="w-2/12 justify-center flex">
                            <a className="text-3xl font-bold font-heading" href="/">
                            <img className="h-12 w-15" alt='' src="/img/logo_footer.png" />
                        </a>
                        </div>
                        
                        <div className="w-8/12 ">
                                <ul className="hidden md:flex px-1 mx-auto xl:text-base text-sm lg:gap-2 font-semibold font-heading space-x-12 justify-center">
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
                        
                        <div className="hidden xl:flex space-x-5 items-center w-2/12 justify-end">


                    {isLoggedIn ? (
        <div className="flex items-center">
          <a className="flex items-center hover:text-gray-200" href="/profile">
            <img src="/img/icon/user.png" alt="" className="px-1"/>
           <label className="font-bold  font-bold text-sm">{username}</label>
          </a>
          <button
            className="flex items-center hover:text-gray-200 ml-4"
            onClick={logout}
          >
            
                   <img src="/img/icon/logout.png" alt="" className="px-1"/>
                              <label className=" font-bold text-sm">Đăng xuất</label>


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
   
                    <button onClick={toggleMenu} className="navbar-burger xl:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                  

                </nav>
            </section>
        </div>
    );
}

export default Header;
