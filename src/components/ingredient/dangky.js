import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import registerUser, { sendMailCode } from '../../services/register';
import '../../i18n';

const RegistrationForm = () => {
    const { t } = useTranslation();

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
            await sendMailCode(formData.email);
            setTimer(120);
            setError('');
        } catch (error) {
            console.error(t('registration.errorSendingCode'), error);
            setError(t('registration.errorSendingCode'));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        let countdown;
        if (timer > 0) {
            countdown = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        }
        return () => clearInterval(countdown);
    }, [timer]);

    const handleRegisterAccount = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError(t('registration.errorPasswordMismatch'));
            return;
        }

        setLoading(true);
        try {
            const response = await registerUser(formData, inputCode);
            if (response.data.code === 1004) {
                setError(response.data.message);
                setSuccess(false);
            } else {
                setSuccess(true);
                setError('');
                window.location.href = "/login";
            }
        } catch (error) {
            setError(t('registration.errorGeneral'));
            setSuccess(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center"
             style={{
                 backgroundImage: `url(https://secure3.vncdn.vn/ttnew/r/2021/04/01/waterbus5-1617259851.jpg)`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
             }}>
            <div className="max-w-md w-full mx-auto p-8 bg-white shadow-md rounded-md">
                {error && <div className="mb-4 text-center text-red-500 font-bold">{error}</div>}
                {success && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <svg className="animate-spin h-5 w-5 mx-auto mb-4 text-blue-500"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor"
                                      d="M4 12a8 8 0 018-8V0c4.418 0 8 3.582 8 8s-3.582 8-8 8v-4H4zm2 5v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1H7a1 1 0 00-1 1zm2-9a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1V8z"></path>
                            </svg>
                            <p className="text-center text-gray-700">{t('registration.processingMessage')}</p>
                        </div>
                    </div>
                )}

                <h2 className="text-xl font-bold mb-6 text-center">{t('registration.title')}</h2>
                <form onSubmit={handleRegisterAccount}>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-700">{t('registration.firstName')}</label>
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
                            <label className="block text-gray-700">{t('registration.lastName')}</label>
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
                        <label className="block text-gray-700">{t('registration.email')}</label>
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
                        <label className="block text-gray-700">{t('registration.phoneNumber')}</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">{t('registration.username')}</label>
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
                        <label className="block text-gray-700">{t('registration.password')}</label>
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
                                onClick={toggleShowPassword}
                                className="absolute inset-y-0 right-0 flex items-center pr-3"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">{t('registration.confirmPassword')}</label>
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
                                onClick={toggleShowPasswordRepeat}
                                className="absolute inset-y-0 right-0 flex items-center pr-3"
                            >
                                {showPasswordRepeat ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">{t('registration.verificationCodePlaceholder')}</label>
                        <div className="flex items-center">
                            <input
                                type="text"
                                value={inputCode}
                                onChange={(e) => setInputCode(e.target.value)}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                            <button
                                type="button"
                                onClick={handleGetMailCode}
                                disabled={loading || timer > 0}
                                className="ml-2 py-2 px-4 bg-blue-500 text-white rounded-md"
                            >
                                {timer > 0 ? `${t('registration.resendCodeButton', { timer })}` : t('registration.getCodeButton')}
                            </button>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-2 px-4 bg-green-500 text-white rounded-md"
                        >
                            {t('registration.registerButton')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
