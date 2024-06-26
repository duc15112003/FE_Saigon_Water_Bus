import React, { useEffect, useState } from 'react';
import LoginService from '../../services/loginServices';
import { useAuth } from '../../AuthContext';
import axios from 'axios';

function Login() {
  const { isLoggedIn, login } = useAuth();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorLogin, setErrorLogin] = useState('');

  useEffect(() => {
    const handleGoogleRedirect = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      console.log("code", code);

      if (code) {
        try {
          await LoginService.LoginGoogle(code);
          login();
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
            window.location.href = '/';
          }, 2000);
        } catch (error) {
          console.error('Error occurred while processing Google redirect:', error);
        }
      }
    };

    handleGoogleRedirect();
  }, []); // Chỉ chạy một lần khi component được mount

  useEffect(() => {
    if (isLoggedIn) {
      setShowSuccessMessage(true);
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
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
    } catch (error) {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000);
      setErrorLogin('sai');
      console.error('Login failed:', error);
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/saigonwaterbus/login/google');
      const authorizationUri = response.data; // Nếu API trả về URI dưới dạng text
      console.log("Redirecting to: ", authorizationUri);
      window.location.href = authorizationUri;
    } catch (error) {
      console.error('Error occurred while logging in with Google:', error);
    }
  };

  return (
<div className="LoginPage">
  {showSuccessMessage && (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out">
        <div className="flex items-center mb-4">
          <svg className="animate-spin h-5 w-5 mr-3 text-purple-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0c4.418 0 8 3.582 8 8s-3.582 8-8 8v-4H4zm2 5v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1H7a1 1 0 00-1 1zm2-9a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1V8z"></path>
          </svg>
          <span className="text-lg font-semibold text-purple-700">Đang đăng nhập...</span>
        </div>
      </div>
    </div>
  )}
  <div className="flex flex-wrap min-h-screen w-full content-center justify-center py-10">
    <div className="flex shadow-md">
      <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white" style={{ width: '24rem', height: '32rem' }}>
        <div className="w-80 ">
          <h1 className="text-xl text-center font-semibold mb-4">
            Chào mừng đến với  <p className='font-bold text-blue-600'>Saigon Waterbus</p>
          </h1>
          <small className="text-gray-400 block mb-4">Đăng nhập để tận hưởng dịch vụ</small>
                    <div className="text-center mt-2 ">
            {errorLogin && <span className="font-bold text-xl text-red-500">Tài khoản hoặc mật khẩu sai</span>}
          </div>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="block text-xs font-semibold mb-2">Tài khoản</label>
              <input
                id="username"
                type="text"
                placeholder="Nhập tên tài khoản"
                className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-2 text-gray-500"
                value={credentials.username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="block text-xs font-semibold mb-2">Mật khẩu</label>
              <input
                id="password"
                type="password"
                placeholder="Nhập mật khẩu"
                className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-2 text-gray-500"
                value={credentials.password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="mb-3 flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="mr-2 checked:bg-purple-700"
              />
              <label htmlFor="remember" className="text-xs font-semibold text-gray-600">Nhớ mật khẩu</label>
              <a href="/quen-mat-khau" className="text-xs font-semibold text-purple-700 ml-auto">Quên mật khẩu?</a>
            </div>
          <div className="mb-3">
            <button
              onClick={handleLogin}
              className="block w-full text-white bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-md"
            >
              Đăng nhập
            </button>
          </div>
<div className="mb-3 text-center flex items-center">

  <button
    onClick={handleLoginWithGoogle}
    className=" flex hover:bg-sky-200 text-base px-4 py-2 items-center gap-4 w-full"
  >
    <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNGRkMxMDciIGQ9Ik00My42MTEsMjAuMDgzSDQyVjIwSDI0djhoMTEuMzAzYy0xLjY0OSw0LjY1Ny02LjA4LDgtMTEuMzAzLDhjLTYuNjI3LDAtMTItNS4zNzMtMTItMTJjMC02LjYyNyw1LjM3My0xMiwxMi0xMmMzLjA1OSwwLDUuODQyLDEuMTU0LDcuOTYxLDMuMDM5bDUuNjU3LTUuNjU3QzM0LjA0Niw2LjA1MywyOS4yNjgsNCwyNCw0QzEyLjk1NSw0LDQsMTIuOTU1LDQsMjRjMCwxMS4wNDUsOC45NTUsMjAsMjAsMjBjMTEuMDQ1LDAsMjAtOC45NTUsMjAtMjBDNDQsMjIuNjU5LDQzLjg2MiwyMS4zNSw0My42MTEsMjAuMDgzeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNGRjNEMDAiIGQ9Ik02LjMwNiwxNC42OTFsNi41NzEsNC44MTlDMTQuNjU1LDE1LjEwOCwxOC45NjEsMTIsMjQsMTJjMy4wNTksMCw1Ljg0MiwxLjE1NCw3Ljk2MSwzLjAzOWw1LjY1Ny01LjY1N0MzNC4wNDYsNi4wNTMsMjkuMjY4LDQsMjQsNEMxNi4zMTgsNCw5LjY1Niw4LjMzNyw2LjMwNiwxNC42OTF6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzRDQUY1MCIgZD0iTTI0LDQ0YzUuMTY2LDAsOS44Ni0xLjk3NywxMy40MDktNS4xOTJsLTYuMTktNS4yMzhDMjkuMjExLDM1LjA5MSwyNi43MTUsMzYsMjQsMzZjLTUuMjAyLDAtOS42MTktMy4zMTctMTEuMjgzLTcuOTQ2bC02LjUyMiw1LjAyNUM5LjUwNSwzOS41NTYsMTYuMjI3LDQ0LDI0LDQ0eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMxOTc2RDIiIGQ9Ik00My42MTEsMjAuMDgzSDQyVjIwSDI0djhoMTEuMzAzYy0wLjc5MiwyLjIzNy0yLjIzMSw0LjE2Ni00LjA4Nyw1LjU3MWMwLjAwMS0wLjAwMSwwLjAwMi0wLjAwMSwwLjAwMy0wLjAwMmw2LjE5LDUuMjM4QzM2Ljk3MSwzOS4yMDUsNDQsMzQsNDQsMjRDNDQsMjIuNjU5LDQzLjg2MiwyMS4zNSw0My42MTEsMjAuMDgzeiI+PC9wYXRoPgo8L3N2Zz4="/>

    Đăng nhập bằng Google
  </button>
</div>

          </form>
          <div className="text-center">
            <span className="text-xs text-gray-400 font-semibold block mb-2">Khách hàng mới?</span>
            <a href="/dang-ky" className="text-xs font-semibold text-purple-700">Đăng ký</a>
          </div>

        </div>
      </div>
      <div className="flex flex-wrap content-center justify-center rounded-r-md bg-slate-50" style={{ width: '24rem', height: '32rem' }}>
        <img
          className=" bg-center bg-no-repeat bg-cover rounded-r-md"
          src="/img/logo_footer.png"
          alt="Background"
        />
      </div>
    </div>
  </div>
</div>

  );
}

export default Login;