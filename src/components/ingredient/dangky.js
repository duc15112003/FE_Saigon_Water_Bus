import React, { useState, useEffect } from 'react';
import registerUser, { sendMailCode } from '../../services/register';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const [inputCode, setInputCode] = useState('');
    const [timer, setTimer] = useState(0);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

      const [showPassword, setShowPassword] = useState(false);
            const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);


const toggleShowPasswordRepeat = () => {
  setShowPasswordRepeat(!showPasswordRepeat);
};

const toggleShowPassword = () => {
  setShowPassword(!showPassword);
};


    // console.log("input cođe",inputCode)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleGetMailCode = async () => {
        try {
            setLoading(true);
            const response = await sendMailCode(formData.email);
                setTimer(120);
                setError('');
          
            
        } catch (error) {
            console.error('Gửi mã xác nhận thất bại', error);
            setError('Đã xảy ra lỗi khi gửi mã xác nhận');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        let countdown;
        if (timer > 0) {
            countdown = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 3000);
        }
        return () => clearInterval(countdown);
    }, [timer]);

    const handleRegisterAccount = async (e) => {
        e.preventDefault();


        if (formData.password !== formData.confirmPassword) {
            setError('Mật khẩu và xác nhận mật khẩu không trùng khớp');
            return;
        }

        setLoading(true);
        try {
            const response = await registerUser(formData,inputCode);
            if (response.data.code === 1004) {
                setError(response.data.message);
                setSuccess(false);
            } else {
                                setSuccess(true);
                setError('');
                window.location.href = "/login";
            }
        } catch (error) {
                // setError(response.data.message);
            setSuccess(false);
        } finally {
            setLoading(false);
        }
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
                {success && (
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

                <h2 className="text-xl font-bold mb-6 text-center">Đăng ký tài khoản SaiGonWaterBus</h2>
                <form onSubmit={handleRegisterAccount}>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-700">Họ</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Tên</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Số điện thoại</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Tên tài khoản</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                                <div className="mb-4">
                                <label className="block text-gray-700">Mật khẩu</label>
                                <div className="relative">
                                    <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                    />
                                    <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
                                    onClick={toggleShowPassword}
                                    >
                                    {showPassword ? (
                                            <svg
                                    viewBox="0 0 1024 1024"
                                    fill="currentColor"
                                    height="1em"
                                    width="1em"
                                    >
                                    <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" />
                                    <path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" />
                                    </svg>
                                    ) : (
                                        <svg
                                    viewBox="0 0 1024 1024"
                                    fill="currentColor"
                                    height="1em"
                                    width="1em"

                                    >
                                    <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" />
                                    </svg>
                                    )}
                                    </button>
                                </div>
                                </div>
                                <div className="mb-4">
                                <label className="block text-gray-700">Mật khẩu</label>
                                <div className="relative">
                                    <input
                                    type={showPasswordRepeat ? "text" : "password"}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                    />
                                    <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
                                    onClick={toggleShowPasswordRepeat}
                                    >
                                    {showPasswordRepeat ? (
                                            <svg
                                    viewBox="0 0 1024 1024"
                                    fill="currentColor"
                                    height="1em"
                                    width="1em"
                                    >
                                    <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" />
                                    <path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" />
                                    </svg>
                                    ) : (
                                        <svg
                                    viewBox="0 0 1024 1024"
                                    fill="currentColor"
                                    height="1em"
                                    width="1em"

                                    >
                                    <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" />
                                    </svg>
                                    )}
                                    </button>
                                </div>
                                </div>
                    <div className="mb-4 flex items-center space-x-4">
                        <input
                            placeholder='Nhập mã xác nhận gửi về gmail'
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
                            disabled={formData.email === '' || loading || timer > 0}
                        >
                            {timer > 0 ? `Gửi lại sau ${timer}s` : 'Lấy mã xác nhận'}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className={`w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loading}
                    >
                        Đăng ký tài khoản
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
