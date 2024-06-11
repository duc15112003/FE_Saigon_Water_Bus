import React, { useState, useEffect } from "react";
import axios from "axios";

const UserDetailsPage = () => {
  const [userDetail, setUserDetail] = useState(null);

 useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        // Lấy token từ local storage
        const token = localStorage.getItem("token");
        
        // Tạo một header chứa token để gửi cùng yêu cầu HTTP
        const headers = {
          Authorization: `Bearer ${token}`
        };

        // Gửi yêu cầu GET kèm header chứa token
        const response = await axios.get(
          "http://localhost:8080/api/saigonwaterbus/profile",
          { headers }
        );

        setUserDetail(response.data.result);
      } catch (error) {
        console.error("Error fetching user detail:", error);
      }
    };

    fetchUserDetail();
  }, []);

  return (
<div className="container mx-auto px-4">
  <div className="mt-8">
    <h1 className="text-4xl font-bold text-black mb-8">Thông Tin Cá Nhân</h1>
    {userDetail && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br shadow-md rounded-lg p-6">
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              First Name:
            </label>
            <p className="text-lg text-black font-bold">{userDetail.firstname}</p>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Last Name:
            </label>
            <p className="text-lg text-black font-bold">{userDetail.lastname}</p>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Email:
            </label>
            <p className="text-lg text-black font-bold">{userDetail.email}</p>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Phone Number:
            </label>
            <p className="text-lg text-black font-bold">{userDetail.phoneNumber}</p>
          </div>
        </div>
        <div className="bg-gradient-to-br  shadow-md rounded-lg p-6">
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Username:
            </label>
            <p className="text-lg text-black font-bold">{userDetail.username}</p>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Role:
            </label>
            <p className="text-lg text-black font-bold">{userDetail.role}</p>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Status:
            </label>
            <p className="text-lg text-black font-bold">{userDetail.status}</p>
          </div>
        </div>
      </div>
    )}
  </div>
</div>



  );
};

export default UserDetailsPage;
