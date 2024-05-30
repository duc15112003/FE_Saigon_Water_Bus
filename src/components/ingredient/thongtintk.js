import React, { useState } from 'react';

const AccountLayout = () => {
    const initialAccount = {
        name: 'Minh Pham',
        gender: 'Nam',
        birthDate: '15 tháng 11, 2003',
        emails: ['pm015226010@gmail.com'],
        phone: '0966 980 532',
        addresses: ['Chưa đặt', 'Chưa đặt']
    };

    const [account, setAccount] = useState(initialAccount);
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState(initialAccount);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditData(account);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData({
            ...editData,
            [name]: value
        });
    };

    const handleEmailChange = (index, value) => {
        const newEmails = [...editData.emails];
        newEmails[index] = value;
        setEditData({ ...editData, emails: newEmails });
    };

    const handleAddressChange = (index, value) => {
        const newAddresses = [...editData.addresses];
        newAddresses[index] = value;
        setEditData({ ...editData, addresses: newAddresses });
    };

    const handleSave = () => {
        setAccount(editData);
        setIsEditing(false);
    };

    return (
        <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-md shadow-md">
            {isEditing ? (
                <div>
                    <h2 className="text-xl font-bold mb-4">Chỉnh sửa thông tin</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700">Tên</label>
                        <input
                            type="text"
                            name="name"
                            value={editData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Ngày sinh</label>
                        <input
                            type="text"
                            name="birthDate"
                            value={editData.birthDate}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Giới tính</label>
                        <input
                            type="text"
                            name="gender"
                            value={editData.gender}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        {editData.emails.map((email, index) => (
                            <input
                                key={index}
                                type="text"
                                value={email}
                                onChange={(e) => handleEmailChange(index, e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 mb-2"
                            />
                        ))}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Điện thoại</label>
                        <input
                            type="text"
                            name="phone"
                            value={editData.phone}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Địa chỉ</label>
                        {editData.addresses.map((address, index) => (
                            <input
                                key={index}
                                type="text"
                                value={address}
                                onChange={(e) => handleAddressChange(index, e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 mb-2"
                            />
                        ))}
                    </div>
                    <button
                        onClick={handleSave}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    >
                        Lưu
                    </button>
                    <button
                        onClick={() => setIsEditing(false)}
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Hủy
                    </button>
                </div>
            ) : (
                <div>
                    <div className="mb-6">
                        <h2 className="text-xl font-bold mb-4">Thông tin cơ bản</h2>
                        <div className="flex justify-between mb-2">
                            <span className="font-medium text-gray-700">Ảnh hồ sơ</span>
                            <span className="text-blue-500 cursor-pointer">Thêm ảnh hồ sơ cá nhân hóa tài khoản của bạn</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="font-medium text-gray-700">Tên</span>
                            <span>{account.name}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="font-medium text-gray-700">Ngày sinh</span>
                            <span>{account.birthDate}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="font-medium text-gray-700">Giới tính</span>
                            <span>{account.gender}</span>
                        </div>
                    </div>

                    <hr className="my-6" />

                    <div className="mb-6">
                        <h2 className="text-xl font-bold mb-4">Thông tin liên hệ</h2>
                        <div className="flex justify-between mb-2">
                            <span className="font-medium text-gray-700">Email</span>
                            <span>
                                {account.emails.map((email, index) => (
                                    <div key={index}>{email}</div>
                                ))}
                            </span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="font-medium text-gray-700">Điện thoại</span>
                            <span>{account.phone}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <button className="text-blue-500 cursor-pointer">Quản lý các email từ Google</button>
                        </div>
                    </div>

                    <hr className="my-6" />

                    <div>
                        <h2 className="text-xl font-bold mb-4">Địa chỉ</h2>
                        {account.addresses.map((address, index) => (
                            <div className="flex justify-between mb-2" key={index}>
                                <span className="font-medium text-gray-700">Địa chỉ {index + 1}</span>
                                <span>{address}</span>
                            </div>
                        ))}
                        <div className="flex justify-between mb-2">
                            <button className="text-blue-500 cursor-pointer">Các địa chỉ khác liên quan đến tài khoản của bạn</button>
                        </div>
                    </div>
                    <button
                        onClick={handleEditClick}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Sửa thông tin
                    </button>
                </div>
            )}
        </div>
    );
};

export default AccountLayout;
