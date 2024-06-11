import React, { useEffect, useState } from 'react';
import LoginService from '../../services/loginServices';
import { useAuth } from '../../AuthContext';

function Login() {
  const { isLoggedIn, login } = useAuth();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorLogin, setErrorLogin] = useState('');

  useEffect(() => {
    if (isLoggedIn) {
      console.log('User đã đăng nhập');
      console.log("user", isLoggedIn);
      setShowSuccessMessage(true);
      setTimeout(() => {
        window.location.href = '/';
      }, 2000); // Chờ 2 giây trước khi chuyển hướng
    }
  }, [isLoggedIn]);

  const handleUsernameChange = (e) => {
    const { value } = e.target;
    setCredentials(prevState => ({
      ...prevState,
      username: value
    }));
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setCredentials(prevState => ({
      ...prevState,
      password: value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Ngăn chặn hành động mặc định của sự kiện
    try {
      // Gọi hàm login với đối tượng chứa thông tin đăng nhập
      await LoginService.LoginProcess(credentials.username, credentials.password);
      login();
      console.log(login());
    } catch (error) {
        setErrorLogin('sai')
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="LoginPage">
{showSuccessMessage && (
  <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
    <div className="bg-black text-white px-8 py-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out">
      <button type="button" className="h-12 w-48 rounded-lg flex items-center justify-center" disabled>
        <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeDasharray="31.4 31.4" strokeLinecap="round" />
        </svg>
        <span className="text-lg font-semibold">Đang đăng nhập...</span>
      </button>
    </div>
  </div>
)}


      <div className="flex flex-wrap min-h-screen w-full content-center justify-center py-10">
        <div className="flex shadow-md">
          <div
            className="flex flex-wrap content-center justify-center rounded-l-md bg-white"
            style={{ width: '24rem', height: '32rem' }}
          >
            <div className="w-72">
              <h1 className="text-xl font-semibold">
                Chào mừng đến với
                <br />
                Saigon Waterbus
              </h1>
              <small className="text-gray-400">Đăng nhập để tận hưởng dịch vụ</small>
              <form className="mt-4">
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">Tài khoản</label>
                  <input
                    type="text"
                    placeholder="Nhập tên tài khoản"
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    value={credentials.username}
                    onChange={handleUsernameChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">Mật khẩu</label>
                  <input
                    type="password"
                    placeholder="*****"
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                    value={credentials.password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="mb-3 flex flex-wrap content-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="mr-1 checked:bg-purple-700"
                  />
                  <a href="#" className="text-xs font-semibold text-purple-700">
                    Quên mật khẩu?
                  </a>
                </div>
                <div className="mb-3">
                  <button
                    onClick={handleLogin}
                    className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md"
                  >
                    Đăng nhập
                  </button>
                  <b className='btitle'>hoặc</b>
                </div>
              </form>
              <div className="text-center">
                <span className="text-xs text-gray-400 font-semibold">
                  Khách hàng mới? 
                </span>
                <a href="/dang-ky" className="text-xs font-semibold text-purple-700">
                  Đăng ký
                </a>
              </div>
                        <div className='text-center'>
            <span className='font-bold text-red-500'>{errorLogin ? 'Tài khoản hoặc mật khẩu sai':''}</span>
          </div>
            </div>
          </div>
          <div
            className="flex flex-wrap content-center justify-center rounded-r-md"
            style={{ width: '24rem', height: '32rem' }}
          >
            <img
              className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
              src="https://cdn.anvui.vn/upload/web/2020/11/25/1606287028_waterbus-3.png.png"
              alt="Background"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
