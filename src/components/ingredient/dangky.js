// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const RegistrationForm = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         birthday: '',
//         gender: '',
//         email: '',
//         phone: '',
//         province: '',
//         district: '',
//         ward: ''
//     });

//     const [provinces, setProvinces] = useState([]);
//     const [districts, setDistricts] = useState([]);
//     const [wards, setWards] = useState([]);
//     const [step, setStep] = useState(1); // State để điều hướng giữa các phần của form

//     useEffect(() => {
//         axios.get('https://esgoo.net/api-tinhthanh/1/0.htm')
//             .then(response => {
//                 if (response.data.error === 0) {
//                     setProvinces(response.data.data);
//                 }
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the provinces!', error);
//             });
//     }, []);

//     useEffect(() => {
//         if (formData.province) {
//             axios.get(`https://esgoo.net/api-tinhthanh/2/${formData.province}.htm`)
//                 .then(response => {
//                     if (response.data.error === 0) {
//                         setDistricts(response.data.data);
//                         setWards([]); // Reset wards when province changes
//                     }
//                 })
//                 .catch(error => {
//                     console.error('There was an error fetching the districts!', error);
//                 });
//         }
//     }, [formData.province]);

//     useEffect(() => {
//         if (formData.district) {
//             axios.get(`https://esgoo.net/api-tinhthanh/3/${formData.district}.htm`)
//                 .then(response => {
//                     if (response.data.error === 0) {
//                         setWards(response.data.data);
//                     }
//                 })
//                 .catch(error => {
//                     console.error('There was an error fetching the wards!', error);
//                 });
//         }
//     }, [formData.district]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if(step === 1){
//             setStep(2); // Chuyển đến bước 2 khi nhấn submit ở bước 1
//         } else if(step === 2){
//             // Xử lý đăng ký và ghi lại mảng ở đây
//             console.log('Form submitted:', formData);
//         }
//     };

//     return (
//         <div
//             className="min-h-screen flex items-center justify-center"
//             style={{
//                 backgroundImage: `url(https://secure3.vncdn.vn/ttnew/r/2021/04/01/waterbus5-1617259851.jpg)`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center'
//             }}
//         >
//             <div className="max-w-md w-full mx-auto p-8 bg-white shadow-md rounded-md">
//                 <h2 className="text-2xl font-bold mb-6 text-center">Chào mừng tới Waterbus</h2>
//                 {step === 1 && (
//                     <form onSubmit={handleSubmit}>
//                         <div className="grid grid-cols-2 gap-4 mb-4">
//                             <div>
//                                 <label className="block text-gray-700">First Name</label>
//                                 <input
//                                     type="text"
//                                     name="firstName"
//                                     value={formData.firstName}
//                                     onChange={handleChange}
//                                     className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-gray-700">Last Name</label>
//                                 <input
//                                     type="text"
//                                     name="lastName"
//                                     value={formData.lastName}
//                                     onChange={handleChange}
//                                     className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                                 />
//                             </div>
//                         </div>
//                         <div className="grid grid-cols-2 gap-4 mb-4">
//                             <div>
//                                 <label className="block text-gray-700">Birthday</label>
//                                 <input
//                                     type="date"
//                                     name="birthday"
//                                     value={formData.birthday}
//                                     onChange={handleChange}
//                                     className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-gray-700">Gender</label>
//                                 <div className="flex items-center mt-1">
//                                     <input
//                                         type="radio"
//                                         name="gender"
//                                         value="Male"
//                                         checked={formData.gender === 'Male'}
//                                         onChange={handleChange}
//                                         className="mr-2"
//                                     />
//                                     <label className="mr-4">Male</label>
//                                     <input
//                                         type="radio"
//                                         name="gender"
//                                         value="Female"
//                                         checked={formData.gender === 'Female'}
//                                         onChange={handleChange}
//                                         className="mr-2"
//                                     />
//                                     <label>Female</label>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-gray-700">Email</label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-gray-700">Phone Number</label>
//                             <input
//                                 type="tel"
//                                 name="phone"
//                                 value={formData.phone}
//                                 onChange={handleChange}
//                                 className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                             />
//                         </div>
//                         <label className="block text-gray-700">Địa chỉ</label>
//                         <div className="mb-4 flex">
//                             <select
//                                 name="province"
//                                 value={formData.province}
//                                 onChange={handleChange}
//                                 className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                             >
//                                 <option value="">Select Province</option>
//                                 {provinces.map((province) => (
//                                     <option key={province.id} value={province.id}>
//                                         {province.full_name}
//                                     </option>
//                                 ))}
//                             </select>
//                             <select
//                                 name="district"
//                                 value={formData.district}
//                                 onChange={handleChange}
//                                 className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                                 disabled={!formData.province}
//                             >
//                                 <option value="">Select District</option>
//                                 {districts.map((district) => (
//                                     <option key={district.id} value={district.id}>
//                                         {district.full_name}
//                                     </option>
//                                 ))}
//                             </select>
//                             <select
//                                 name="ward"
//                                 value={formData.ward}
//                                 onChange={handleChange}
//                                 className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                                 disabled={!formData.district}
//                             >
//                                 <option value="">Select Ward</option>
//                                 {wards.map((ward) => (
//                                     <option key={ward.id} value={ward.id}>
//                                         {ward.full_name}
//                                     </option>
//                                 ))}
//                             </select>
//                         </div>
//                     </form>
//                 )}
//                 {step === 2 && (
//                     <form onSubmit={handleSubmit}>
//                         {/* Các trường của bước 2 */}
//                         <div>
//                             <label className="block text-gray-700">Username</label>
//                             <input
//                                 type="text"
//                                 name="username"
//                                 value={formData.username}
//                                 onChange={handleChange}
//                                 className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-gray-700">Password</label>
//                             <input
//                                 type="password"
//                                 name="password"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                                 className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-gray-700">Re-enter Password</label>
//                             <input
//                                 type="password"
//                                 name="rePassword"
//                                 value={formData.rePassword}
//                                 onChange={handleChange}
//                                 className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                             />
//                         </div>
//                     </form>
//                 )}
//                 <button
//                     type="submit"
//                     onClick={handleSubmit}
//                     className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
//                 >
//                     {step === 1 ? 'Kế tiếp' : 'Đăng ký'}
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default RegistrationForm;


import React, { useState } from 'react';
import registerUser from '../../services/register';

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
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
        const [loading, setLoading] = useState(false); // State để quản lý trạng thái loading

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        
    };

const handleRegisterAccount = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError('Mật khẩu và xác nhận mật khẩu không trùng khớp');
            return;
        }
        
        setLoading(true); // Bắt đầu hiển thị loading

        // Giả lập loading trong 1.5 giây
        setTimeout(async () => {
            try {
                const response = await registerUser(formData);
                if (response) {
                    if (response.data.code === 1002) {
                        setError(response.data.message);
                        setSuccess(false);
                    } else {
                        setSuccess(true);
                        
                        setError('');
                        window.location.href = "/login";

                    }
                } else {
                    setError('Đăng ký thất bại');
                        setSuccess(false);
                }
            } catch (error) {
                console.error('Đăng ký thất bại', error);
                setError('Đã xảy ra lỗi khi đăng ký');
                        setSuccess(false);
            } finally {
                setLoading(false); // Dừng hiển thị loading sau khi xử lý xong
            }
        }, 1500); // Thời gian giả lập là 1.5 giây (1500 milliseconds)
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
    <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <svg className="animate-spin h-5 w-5 mx-auto mb-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0c4.418 0 8 3.582 8 8s-3.582 8-8 8v-4H4zm2 5v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1H7a1 1 0 00-1 1zm2-9a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1V8z"></path>
            </svg>
            <p className="text-center text-gray-700">Đang xử lý...</p>
        </div>
    </div>
)}


                <h2 className="text-2xl font-bold mb-6 text-center">Chào mừng tới Waterbus</h2>
                    {/* {success && <div className="mb-4 text-green-500">{success}</div>} */}
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
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Xác nhận mật khẩu</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>

<button
    type="submit"
    className={`w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
    disabled={loading}
>
    {loading ? (
        <div className="flex items-center justify-center">
            <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0c4.418 0 8 3.582 8 8s-3.582 8-8 8v-4H4zm2 5v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1H7a1 1 0 00-1 1zm2-9a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1V8z"></path>
            </svg>
            Đang xử lý...
        </div>
    ) : (
        'Đăng ký'
    )}
</button>


                </form>

            </div>
        </div>
    );
};

export default RegistrationForm;

