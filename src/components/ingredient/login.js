import React from 'react';
import {GoogleLogin} from '@react-oauth/google';
import { jwtDecode } from "jwt-decode"


const decodeGoogleToken = (token) => {
    try {
        const decoded = jwtDecode(token);
        const emailGet = decoded.email;
        return emailGet;
    } catch (error) {
        console.error("Lỗi khi giải mã token:", error);
        return null;
    }
};


function Login() {
    const handleGoogleLoginSuccess = (response) => {
        const token = response.credential; // Trích xuất token từ response
        console.log(token);
        const userEmail = decodeGoogleToken(token); // Sử dụng token để giải mã và lấy email
        console.log("Email của người dùng:", userEmail)
    };

    return (
        <div className="LoginPage">
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
                                    <label className="mb-2 block text-xs font-semibold">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="mb-2 block text-xs font-semibold">Password</label>
                                    <input
                                        type="password"
                                        placeholder="*****"
                                        className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                                    />
                                </div>
                                <div className="mb-3 flex flex-wrap content-center">
                                    <input
                                        id="remember"
                                        type="checkbox"
                                        className="mr-1 checked:bg-purple-700"
                                    />
                                    <label htmlFor="remember" className="mr-auto text-xs font-semibold">
                                        Remember for 30 days
                                    </label>
                                    <a href="#" className="text-xs font-semibold text-purple-700">
                                        Forgot password?
                                    </a>
                                </div>
                                <div className="mb-3">
                                    <button
                                        className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">
                                        Sign in
                                    </button>
                                    <b className='btitle'>OR</b>
                                    <div className='testButton'>
                                        <GoogleLogin
                                            onSuccess={handleGoogleLoginSuccess}
                                            onError={() => {
                                                console.log('Login Failed');
                                            }}
                                        /></div>
                                </div>
                            </form>
                            <div className="text-center">
                              <span className="text-xs text-gray-400 font-semibold">
                                Don't have account?
                              </span>
                                <a href="#" className="text-xs font-semibold text-purple-700">
                                    Sign up
                                </a>
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
