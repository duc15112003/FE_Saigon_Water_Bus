import React, {useState} from 'react';
import { MagnifyingGlassIcon, UserIcon, CreditCardIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import '../ingredient/Datve/datve.css';

import { useLocation } from 'react-router-dom';

const stations = [
    { name: 'Bạch Đằng', description: 'Tọa lạc ngay trung tâm Thành phố (Q1) với công viên Bạch Đằng, phố đi bộ Nguyễn Huệ cùng nhiều địa điểm vui chơi, ăn uống khác đang chờ bạn.', image: 'https://saigonwaterbus.com/wp-content/uploads/2022/06/home-slide-0-1-1536x880.jpg' },
    { name: 'Bình An', description: 'Kết nối 2 thành phố: TP. Thủ Đức - TP. HCM. Đây là nơi ngắm tòa nhà Landmark 81, kết nối Vinhome Central Park, Tân Cảng, Chợ Thảo Điền và các điểm đến khác.', image: 'https://saigonwaterbus.com/wp-content/uploads/2022/06/home-slide-3-1536x880.jpg' },
    { name: 'Thanh Đa', description: 'Bán đảo Thanh Đa xanh mát, yên bình giữa lòng thành phố nhộn nhịp, sôi động. Dừng chân tại đây, đừng quên thưởng thức Cháo Vịt Thanh Đa trứ danh, Phong Cua hay dạo chơi KDL Bình Quới.', image: 'https://saigonwaterbus.com/wp-content/uploads/2022/06/home-slide-6.jpg' },
    { name: 'Hiệp Bình Chánh', description: 'Đúng với biệt danh “điểm hẹn của người Sài Gòn” Xung quanh ga tàu thủy Hiệp Bình Chánh rất nhiều nhà hàng, dịch vụ vui chơi ăn uống mà tiêu biểu là Giga Mall.', image: 'https://saigonwaterbus.com/wp-content/uploads/2022/06/home-slide-1-1536x880.jpg' },
    { name: 'Linh Đông', description: 'Tại đây bạn sẽ cảm nhận cảm giác thanh mát mộc mạc của làng quê yên bình. Đặc biệt, cạnh Ga tàu thủy Linh Đông có bến đò Bình Qưới để sang KDL Bình Quới 2.', image: 'https://saigonwaterbus.com/wp-content/uploads/2022/06/home-slide-4-1536x880.jpg' },
];

const Home = () => {

    
    const [startDate, setStartDate] = useState(new Date());
    const [selectedStation, setSelectedStation] = useState(stations[0]);
    return (
        <div>
            <div className="qodef-m-inner">
                <div className="flex items-center justify-center bg-stone-200 h-40">
                    <div className="container mx-auto flex">
                        <h1 className="qodef-m-title entry-title text-xl font-bold ">
                            Saigon Waterbus
                        </h1>
                    </div>
                </div>
                <div>
                    <section className=" bg-gray-100">
                        <div className="container mx-auto py-8 px-4">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <div className="mb-6">
                                    <style
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                '\n.vxr-search-ticket-box .search-box-container .button-container button {\n    background-color: #F7C600 !important;\n}\n.vxr-search-ticket-box .search-box-container.ver5 .button-container button span {\n    color: #1B1B1B;\n}\n.vxr-search-ticket-box .search-box-content .swap-section img { \n    content: url("https://saigonwaterbus.com/wp-content/uploads/2023/07/swb-swap.png");\n}\n',
                                        }}
                                    />
                                    <div className="vxr-search-ticket-box">
                                        <div className="search-box-container ver5">
                                            <div id="Info" className="text-yellow-600 hidden"/>
                                            <form
                                                autoComplete="off"
                                                className="w-full"
                                                //   action="javascript:VxrAutoCompleteSearch.searchTicketHomepage();"
                                            >
                                                <div className="search-box-content flex flex-wrap gap-4 items-end">
                                                    <div className="flex-1 flex flex-col w-full md:w-auto relative">
                                                        <label className="block text-gray-700">Nơi đi</label>
                                                        <div className="flex items-center relative">
                                                            <select
                                                                className="appearance-none w-full p-2 border border-gray-300 rounded pr-10"
                                                                id="inputFrom"
                                                                defaultValue="" // Giá trị mặc định của select, có thể thay đổi tùy theo nhu cầu của bạn
                                                            >
                                                                <option value="" disabled hidden>Nhập nơi đi</option>
                                                                <option value="option1" selected>Bạch Đằng</option>
                                                                <option value="option1">Bình An</option>
                                                                <option value="option1">Thanh Đa</option>
                                                            </select>
                                                            <img
                                                                decoding="async"
                                                                src="//static.vexere.com/webnx/prod/img/from-v5.svg"
                                                                alt=""
                                                                className="h-8 absolute right-3"
                                                            />
                                                        </div>

                                                        <input id="from" name="from" type="hidden" defaultValue=""/>
                                                        <input id="nameFrom" name="nameFrom" type="hidden"/>
                                                        <input
                                                            id="pickupPointDistrict"
                                                            name="pickupPointDistrict"
                                                            type="hidden"
                                                        />
                                                        <input id="pickupPointName" name="pickupPointName"
                                                               type="hidden"/>
                                                        <input id="fromLabel" name="fromLabel" type="hidden"/>
                                                    </div>
                                                    {/* button chuyen qua lai ngay di noi di den */}
                                                    <button>
                                                        <img className="swap-area" decoding="async"
                                                             src="//static.vexere.com/webnx/prod/img/swap-v3.svg"
                                                             alt=""></img>


                                                    </button>
                                                    <div className="flex-1 flex flex-col w-full md:w-auto relative">
                                                        <label className="block text-gray-700">Nơi đến</label>
                                                        <div className="relative">
                                                            <select
                                                                className="appearance-none w-full p-2 border border-gray-300 rounded pr-10" // Thêm pr-10 để tạo khoảng trống bên phải cho icon
                                                                id="inputTo"
                                                                defaultValue=""
                                                            >
                                                                <option value="" disabled hidden>Nhập nơi đến</option>
                                                                <option value="option1">Option 1</option>
                                                                <option value="option2">Option 2</option>
                                                                <option value="option3">Option 3</option>
                                                            </select>
                                                            <img
                                                                decoding="async"
                                                                src="//static.vexere.com/webnx/prod/img/to-v5.svg"
                                                                alt=""
                                                                className="h-8 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                                            />
                                                        </div>


                                                        <input id="to" name="to" type="hidden" defaultValue=""/>
                                                        <input id="nameTo" name="nameTo" type="hidden"/>
                                                        <input
                                                            id="dropoffPointDistrict"
                                                            name="dropoffPointDistrict"
                                                            type="hidden"
                                                        />
                                                        <input id="dropoffPointName" name="dropoffPointName"
                                                               type="hidden"/>
                                                        <input id="toLabel" name="toLabel" type="hidden"/>
                                                    </div>
                                                    <div className="flex-1 flex flex-col w-full md:w-auto relative">
                                                        <label className="block text-gray-700">Ngày khởi hành</label>
                                                        <div className="flex items-center relative">
                                                            <DatePicker
                                                                className="p-2 lg:w-80 w-auto border border-gray-300 rounded mr-2"
                                                                name="departDate"
                                                                selected={startDate}
                                                                onChange={(date) => setStartDate(date)}
                                                                dateFormat="dd/MM/yyyy"
                                                                style={{width: '165%'}} // Loại bỏ !important và chỉ cần truyền một đối tượng JavaScript với thuộc tính width
                                                            />


                                                            <img
                                                                decoding="async"
                                                                src="//static.vexere.com/webnx/prod/img/date-v5.svg"
                                                                alt=""
                                                                className="h-8 absolute right-3 "
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="flex w-full md:w-auto">
                                                        <button
                                                            className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600"
                                                            type="submit"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                                className="w-6 h-6 inline-block mr-2"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                                                />
                                                            </svg>
                                                            <span className="inline-block">Tìm vé</span>
                                                        </button>

                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className='BookingSteps'>
                <div className="flex flex-col space-y-8 container mx-auto px-4 py-8">
                    <h1 className="text-2xl font-bold">Quy trình đặt vé trong 4 bước</h1>
                    <div className="flex space-x-8">
                        <div className="flex flex-col items-center space-y-4">
                            <div className="bg-yellow-400 p-4 rounded-full">
                                <MagnifyingGlassIcon className="w-8 h-8"/>
                            </div>
                            <div className="text-center">
                                <h2 className="font-semibold">Tìm chuyến</h2>
                                <p>Chọn thông tin hành trình và ấn Tìm chuyến</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="bg-yellow-400 p-4 rounded-full">
                                <UserIcon className="w-8 h-8"/>
                            </div>
                            <div className="text-center">
                                <h2 className="font-semibold">Chọn chỗ</h2>
                                <p>Chọn chuyến, chỗ ngồi phù hợp, điền thông tin</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="bg-yellow-400 p-4 rounded-full">
                                <CreditCardIcon className="w-8 h-8"/>
                            </div>
                            <div className="text-center">
                                <h2 className="font-semibold">Đặt chỗ</h2>
                                <p>Tiến hành thanh toán online hoặc giữ chỗ</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="bg-yellow-400 p-4 rounded-full">
                                <CheckBadgeIcon className="w-8 h-8"/>
                            </div>
                            <div className="text-center">
                                <h2 className="font-semibold">Lên tàu</h2>
                                <p>Nhận mã, và xuất trình cho nhân viên khi lên tàu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='HighlightSection'>
                <div className="bg-white p-8">
                    <p className="text-blue-500 font-medium mb-4">
                        Lưu ý: Saigon Waterbus miễn phí vé cho người cao tuổi từ 70 và các bé dưới 1 tuổi, người khuyết
                        tật và thương binh.
                    </p>
                    <div className="flex">
                        <div className="w-1/2 pr-4">
                            <h2 className="text-2xl font-bold mb-4 leading-tight">
                                Khám phá Sông Sài Gòn theo cách riêng của bạn
                            </h2>
                            <p className="mb-4 text-gray-700">
                                Chỉ với 30,000 cho vé đi và về là bạn sẽ ngay có một chuyến vi vu trên sông Sài Gòn bằng
                                Saigon Waterbus để ngắm vẻ đẹp của Thành phố Hồ Chí Minh nhìn từ phía sông.
                            </p>
                            <button className="flex items-center space-x-2 text-yellow-500 font-semibold">
                                <PlusCircleIcon className="w-6 h-6"/>
                                <span>Xem hướng dẫn, đặt vé và trải nghiệm ngay!</span>
                            </button>
                        </div>
                        <div className="w-1/2">
                            <img
                                src="https://saigonwaterbus.com/wp-content/uploads/2022/06/home-slide-1-1536x880.jpg" // Update this path to your actual image URL
                                alt="Saigon Waterbus"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='Station'>
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-2xl font-bold mb-4">Hệ thống bến tàu Saigon Waterbus</h1>
                    <div className="flex space-x-4 mb-4 border-b border-gray-300">
                        {stations.map((station, index) => (
                            <button
                                key={index}
                                className={`py-2 px-4 ${selectedStation.name === station.name ? 'border-b-2 border-yellow-400 text-yellow-400' : 'text-gray-500'}`}
                                onClick={() => setSelectedStation(station)}
                            >
                                {station.name}
                            </button>
                        ))}
                    </div>
                    <div className="flex space-x-8">
                        <img src={selectedStation.image} alt={selectedStation.name}
                             className="w-1/2 rounded-lg shadow-lg"/>
                        <div className="w-1/2">
                            <h2 className="text-xl font-bold mb-2">{selectedStation.name}</h2>
                            <p className="mb-4">{selectedStation.description}</p>
                            <button className="flex items-center space-x-2 text-yellow-500 font-semibold">
                                <PlusCircleIcon className="w-6 h-6"/>
                                <span>Xem chi tiết và chỉ đường</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Reviewer'>
                <div className="max-w-full h-128">
                    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden w-full ">
                        <img
                            src="https://staging.saigonwaterbus.com/wp-content/uploads/2022/10/SWB-2.jpg"
                            alt="Background"
                            className="w-full h-128 object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-6 py-4">
                            <div className="flex items-center mb-4">
                                <img
                                    src="https://saigonwaterbus.com/wp-content/uploads/2022/06/linh-le.jpg"
                                    alt="Avatar"
                                    className="w-12 h-12 rounded-full mr-4 border-2 border-white"
                                />
                                <div>
                                    <p className="text-white text-lg font-bold">Linh Lê</p>
                                    <p className="text-white text-sm">Khách du lịch</p>
                                </div>
                            </div>

                            <p className="lg:w-6/12 px-1 text-white text-2xl md:text-3xl lg:text-4xl leading-tight font-semibold">
                                “Mình lên tàu khi trời vừa chập tối. Ngắm nhìn thành phố lên đèn, mặt sông lấp lánh
                                ánh
                                vàng, thật sự là một trải nghiệm khó quên.”
                            </p>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;