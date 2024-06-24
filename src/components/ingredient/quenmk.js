import React, { useState } from 'react';
import forgetService from '../../services/forgetpass';
import Popup from '../Popup';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [inputCode, setInputCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [timer, setTimer] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPopup, setShowPopup] = useState(false); // State to manage Popup visibility

    const handleGetMailCode = async () => {
        setError('');
        setSuccess('');
        setLoading(true);
        try {
            const response = await forgetService.sendMailCode(email);
            if (response.data.code === 200) {
                setSuccess('Đã gửi mã xác nhận');
                setTimer(60); // Start a 60 seconds timer
                const interval = setInterval(() => {
                    setTimer(prev => {
                        if (prev === 1) clearInterval(interval);
                        return prev - 1;
                    });
                }, 1000);
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            console.error('Network Error:', error);
            setError('Lỗi mạng. Vui lòng thử lại.');
        } finally {
            setLoading(false);
        }
    };

    const handleChangePassword = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (newPassword !== confirmPassword) {
            setError('Passwords do not match!');
            return;
        }
        setLoading(true);
        try {
            const response = await forgetService.resetPassword(inputCode, email, newPassword);
            if (response.data.code === 200) {
                setSuccess('Đổi mật khẩu thành công!');
                setShowPopup(true); // Show Popup on success

                // Clear form fields
                setInputCode('');
                setNewPassword('');
                setConfirmPassword('');
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            console.error('Network Error:', error);
            setError('Lỗi mạng. Vui lòng thử lại.');
        } finally {
            setLoading(false);
        }
    };

    const handleClosePopup = () => {
        setShowPopup(false); // Function to close Popup
           window.location.href = '/login'; 
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center"
            style={{
                backgroundImage: `url(https://secure3.vncdn.vn/ttnew/r/2021/04/01/waterbus5-1617259851.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="max-w-md w-full mx-auto p-8 bg-white shadow-md rounded-md">
                {error && <div className="mb-4 text-center text-red-500 font-bold">{error}</div>}
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <svg className="animate-spin h-5 w-5 mx-auto mb-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0c4.418 0 8 3.582 8 8s-3.582 8-8 8v-4H4zm2 5v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1H7a1 1 0 00-1 1zm2-9a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1V8z"></path>
                            </svg>
                            <p className="text-center text-gray-700">Đang xử lý...</p>
                        </div>
                    </div>
                )}

                <h2 className="text-xl font-bold mb-6 text-center">Quên mật khẩu</h2>
                <form onSubmit={handleChangePassword}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4 flex items-center space-x-4">
                        <input
                            placeholder='Nhập mã xác nhận gửi về email'
                            type="text"
                            name="inputCode"
                            value={inputCode}
                            onChange={(e) => setInputCode(e.target.value)}
                            required
                            className="border border-gray-300 rounded-md p-2 w-60 focus:outline-none"
                        />
                        <button
                            type="button"
                            onClick={handleGetMailCode}
                            className={`text-red-700 transition duration-200 ${loading || timer > 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={email === '' || loading || timer > 0}
                        >
                            {timer > 0 ? `Gửi lại sau ${timer}s` : 'Lấy mã xác nhận'}
                        </button>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Mật khẩu mới</label>
                        <input
                            type="password"
                            name="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Xác nhận mật khẩu mới</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loading}
                    >
                        Đặt lại mật khẩu
                    </button>
                </form>
                <div className='text-center'>
                    <a href='/login' className='text-blue-500 underline hover:text-blue-700 transition duration-300'>Quay lại đăng nhập</a>
                </div>
                {/* Render Popup if showPopup is true */}
                {showPopup && <Popup message={"Đổi mật khẩu thành công!"} onClose={handleClosePopup} />}
            </div>
        </div>
    );
};

export default ForgotPassword;
