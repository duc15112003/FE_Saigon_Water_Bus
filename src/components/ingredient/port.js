import React from 'react';
import { MapPinIcon, AcademicCapIcon, TruckIcon } from '@heroicons/react/24/solid';
import logoapp from "../../image/logo.png";
import DatePicker from "react-datepicker";
const port = () => {
    return (
        <div className="">
            <div className='location'>
                <div className="p-4">
                    <div className=" p-4 rounded-lg">
                        <h1 className="text-xl font-bold mb-2">Địa chỉ: 70 đường số 10, Hiệp Bình Chánh, Thủ Đức, Thành phố
                            Hồ Chí Minh</h1>
                        <div className="relative w-full h-64 mb-4">
                            <iframe
                                title="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.788542911078!2d106.72670577115123!3d10.827488065730288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175262c44eab767%3A0xc62fe15f779e1d85!2zNzAgxJAuIHPhu5EgMTAsIEhp4buHcCBCw6xuaCBDaMOhbmgsIFRo4bunIMSQ4bupYywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1716696904330!5m2!1sen!2s"
                                className="absolute inset-0 w-full h-full border-0"
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>
                        </div>
                        <div className='flex'>
                            <div className='lg:w-6/12 px-2'>
                                <h2 className="text-lg font-bold mb-2">Địa điểm lân cận</h2>
                                <ul className="mb-4">
                                    <li className="mb-2"><MapPinIcon className="w-6 h-6 inline-block mr-2"/>Khu vui chơi thiếu
                                        nhi
                                        Thanh Đa (100m)
                                    </li>
                                    <li><MapPinIcon className="w-6 h-6 inline-block mr-2"/>Nhà hàng Phong Cua (1.8km)</li>
                                </ul>

                            </div>
                            <div className='lg:w-6/12 px-4'>
                                <h2 className="text-lg font-bold mb-2">Phương tiện di chuyển</h2>
                                <ul>
                                    <li className="mb-2"><AcademicCapIcon className="w-6 h-6 inline-block mr-2"/>Xe máy, xe đạp
                                        -
                                        Gửi trực tiếp tại bãi đỗ xe Bến Bạch Đằng
                                    </li>
                                    <li><TruckIcon className="w-6 h-6 inline-block mr-2"/>Xe ô tô (đến 9 chỗ) - Không có sẵn.
                                        Vui
                                        lòng gửi tại bãi đỗ ô tô xung quanh
                                    </li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className='gioithieu'>
                <div className="p-4">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4">Giới thiệu</h2>
                            <p className="mb-4">
                                Tháng 4 năm 2021, thành phố quyết định chỉnh trang toàn bộ công viên từ cột cờ Thủ Ngữ
                                đến dự án khu phức hợp Sài Gòn – Ba Son, rộng 18.600 m², chia làm hai giai đoạn. Giai
                                đoạn 1 từ cột cờ Thủ Ngữ đến cầu tàu số 2 rộng hơn 8.700 m², kinh phí 35 tỷ đồng được
                                thực hiện từ ngày 10 tháng 6 năm 2021 và mở cửa cho người dân tham quan từ ngày 26 tháng
                                1 năm 2022. Giai đoạn 2 từ cầu tàu số 2 đến khu vực súng thần công, rộng khoảng 7.300
                                m², kinh phí 30 tỷ đồng, khởi công từ tháng 9 năm 2021.
                            </p>
                            <p>
                                Ngày 17 tháng 3 năm 2022, công viên Bến Bạch Đằng và công viên Mê Linh được khánh thành
                                và đưa vào sử dụng. Bến Bạch Đằng sau cải tạo có diện tích khoảng 1,6 ha, trong đó có
                                8.700 m² đường dạo, sân sinh hoạt bằng đá granite và 7.000 m² mảng xanh, cỏ, kiến trúc
                                chuỗi hoa sen xuyên suốt công viên. Bên cạnh đó, công viên được lắp đặt hệ thống tưới
                                nước tự động, hệ thống chiếu sáng.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4">Thông tin du lịch</h2>
                            <p className="mb-4">
                                Vào những ngày cuối tuần hay các dịp lễ lớn trong năm thì công viên bến Bạch Đằng kết
                                hợp với phố đi bộ Nguyễn Huệ tạo thành địa điểm vui chơi lớn cho người dân thành phố
                                cũng như khách du lịch.
                            </p>
                            <p className="mb-4">
                                Ngày 17 tháng 3 năm 2022, công viên Bến Bạch Đằng và công viên Mê Linh được khánh thành
                                và đưa vào sử dụng. Bến Bạch Đằng sau cải tạo có diện tích khoảng 1,6 ha, trong đó có
                                8.700 m² đường dạo, sân sinh hoạt bằng đá granite và 7.000 m² mảng xanh, cỏ, kiến trúc
                                chuỗi hoa sen xuyên suốt công viên. Bên cạnh đó, công viên được lắp đặt hệ thống tưới
                                nước tự động, hệ thống chiếu sáng.
                            </p>
                            <p>
                                Các khu chợ phiên mang tên "SaiGon Central Market" thường được tổ chức vào cuối tuần tại
                                công viên Bạch Đằng. Với diện tích hơn 3000m2, chợ gồm khoảng 120 gian hàng trưng bày
                                nhiều sản phẩm, ẩm thực Việt Nam và các chương trình văn hóa nghệ thuật cũng được biểu
                                diễn tại đây.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sodotuyen p-8'>
                <h2 className="text-2xl font-bold mb-4">Sơ đồ tuyến</h2>
                <br/>
                <img loading="lazy" decoding="async" width="1172" height="826"
                     src="https://saigonwaterbus.com/wp-content/uploads/2022/06/maps.jpg"
                     className="attachment-full size-full" alt=""
                     srcSet="https://saigonwaterbus.com/wp-content/uploads/2022/06/maps.jpg 1172w,
                     https://saigonwaterbus.com/wp-content/uploads/2022/06/maps-300x211.jpg 300w,
                     https://saigonwaterbus.com/wp-content/uploads/2022/06/maps-1024x722.jpg 1024w,
                     https://saigonwaterbus.com/wp-content/uploads/2022/06/maps-768x541.jpg 768w"
                     sizes="(max-width: 1172px) 100vw, 1172px"/>
            </div>

        </div>
    );
};

export default port;