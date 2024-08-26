import axios from "axios";
import { useEffect, useState } from "react";
const apiUrl = process.env.REACT_APP_API_URL;

function CheckTicket() {
    const [email, setEmail] = useState('');
    const [idHD, setIdHD] = useState('');
    const [closeCheck, setCloseCheck] = useState(true);
    const [thongTinVe, setThongTinVe] = useState([]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'idHD') {
            setIdHD(value);
        }
    };

    const checkticket = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`${apiUrl}/checking?email=${email}&invoiceid=${idHD}`);
            setThongTinVe(response.data.result); // Cập nhật state với dữ liệu từ phản hồi API
            console.log(response.data.result); // In ra dữ liệu để kiểm tra
        } catch (error) {
            console.error('Error occurred while fetching ticket information:', error);
        }
        setCloseCheck(false);
    };

    console.log("ttve", thongTinVe);

    return ( 
        <>
            <div className="flex justify-center p-8">
                {closeCheck &&
                    <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
                        <div className="text-center text-2xl font-semibold mb-6">
                            Kiểm tra thông tin vé
                        </div>
                        <form>
                            <div className="space-y-4">
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium mb-2">Mã vé</label>
                                    <input
                                        placeholder="Nhập mã vé"
                                        name="idHD"
                                        type="text"
                                        value={idHD}
                                        onChange={handleInputChange}
                                        className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium mb-2">Email</label>
                                    <input
                                        placeholder="Nhập email đặt vé"
                                        name="email"
                                        type="email"
                                        value={email}
                                        onChange={handleInputChange}
                                        className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    />
                                </div>
                                <button
                                    type="button"
                                    onClick={checkticket}
                                    className="w-full bg-yellow-400 text-gray-700 font-bold py-2 mt-4 rounded-lg hover:bg-yellow-500 transition duration-300 uppercase"
                                >
                                    Kiểm tra vé
                                </button>
                            </div>
                        </form>
                        <div className="mt-8 flex justify-between">
                            <div className="text-center">
                                <div className="font-medium">Bước 1. Nhập thông tin vé</div>
                                <img
                                    src="https://static.vexere.com/Files/images/longvanlimousine/check-ticket-1.png"
                                    alt="Bước 1"
                                    className="mt-2"
                                />
                            </div>
                            <div className="text-center">
                                <div className="font-medium">Bước 2. Kiểm tra vé</div>
                                <img
                                    src="https://static.vexere.com/Files/images/longvanlimousine/check-ticket-2.png"
                                    alt="Bước 2"
                                    className="mt-2"
                                />
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className="p-4 bg-white">
                {!closeCheck && thongTinVe.length > 0 && (
                    <div className="flex flex-col lg:flex-row">
                        {/* Left Container */}
                        <div className="flex-1 p-4 bg-gray-100 rounded-md shadow-lg">
                            <div className="text-center font-semibold text-xl mb-6">Thông tin vé</div>
                            <div className="text-green-500 text-2xl flex items-center mb-4">
                                <svg
                                    className="w-6 h-6 mr-2"
                                    viewBox="64 64 896 896"
                                    fill="currentColor"
                                >
                                    <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" />
                                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                                </svg>
                                Thanh toán thành công
                            </div>
                            <div className="bg-white p-4 rounded-md shadow-md">
                                <div className="mb-4">
                                    <div>
                                        Chúng tôi đã gửi thông tin vé đến email:
                                        <span className="font-bold">{thongTinVe[0].emailBooking}</span>
                                    </div>
                                    <div>
                                        15 phút sau khi thanh toán thành công, nếu quý khách vẫn chưa nhận
                                        được tin nhắn, vui lòng liên hệ chúng tôi qua số điện thoại:{" "}
                                        <span className="font-bold">0393211895</span>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <div>
                                    <div className="font-semibold mb-2">Hướng dẫn lên xe</div>
                                    <div className="mb-4">
                                        Bạn cần ra điểm đón trước 15 phút, đưa SMS hoặc email xác nhận thanh
                                        toán cho nhân viên.
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <div>
                                    <div className="font-semibold mb-2">Điểm đón</div>
                                    <div className="mb-2">Bến tàu {thongTinVe[0].fromStationName}</div>
                                    <div>
                                        Đón lúc:{" "}
                                        <span className="font-bold">{thongTinVe[0].tripStartTime} 31/08/2024</span>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <div>
                                    <div className="font-semibold mb-2">Điểm trả</div>
                                    <div className="mb-2">Bến tàu {thongTinVe[0].toStationName}</div>
                                    <div>
                                        Trả lúc:{" "}
                                        <span className="font-bold">{thongTinVe[0].tripEndtime}</span>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <div>
                                    <div className="font-semibold mb-2">Hướng dẫn đổi trả / hủy vé</div>
                                    <div className="mb-2">
                                        Quý khách vui lòng tham khảo qua chính sách hủy vé trên website
                                        của chúng tôi.
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right Container */}
                        <div className="flex-1 p-4 bg-gray-100 rounded-md shadow-lg lg:ml-4">
                            <div className="text-center font-semibold text-xl mb-6">Chi tiết vé</div>
                            <div className="bg-white p-4 rounded-md shadow-md">
                                <div className="mb-4">
                                    <div>Mã vé:</div>
                                    <div className="font-bold">{thongTinVe[0].id}</div>
                                </div>

                                <div className="mb-4">
                                    <div>Điểm xuất phát:</div>
                                    <div className="font-bold">{thongTinVe[0].fromStationName}</div>
                                </div>
                                <div className="mb-4">
                                    <div>Điểm đến:</div>
                                    <div className="font-bold">{thongTinVe[0].toStationName}</div>
                                </div>
                                <div className="mb-4">
                                    <div>Giờ khởi hành:</div>
                                    <div className="font-bold">{thongTinVe[0].tripStartTime}</div>
                                </div>
                                <div className="mb-4">
                                    <div>Giờ đến:</div>
                                    <div className="font-bold">{thongTinVe[0].tripEndtime}</div>
                                </div>
                                <div className="mb-4">
                                    <div>Giá vé: </div>
                                    <div className="font-bold">{thongTinVe[0].totalAmount}</div>
                                </div>

                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default CheckTicket;
