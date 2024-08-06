import React, {useState} from 'react';
import { MagnifyingGlassIcon, UserIcon, CreditCardIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';
import 'react-datepicker/dist/react-datepicker.css';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import '../ingredient/Datve/datve.css';

const stations = [
    { name: 'Bạch Đằng', description: 'Tọa lạc ngay trung tâm Thành phố (Q1) với công viên Bạch Đằng, phố đi bộ Nguyễn Huệ cùng nhiều địa điểm vui chơi, ăn uống khác đang chờ bạn.', image: 'https://saigonwaterbus.com/wp-content/uploads/2022/06/home-slide-0-1-1536x880.jpg' },
    { name: 'Bình An', description: 'Kết nối 2 thành phố: TP. Thủ Đức - TP. HCM. Đây là nơi ngắm tòa nhà Landmark 81, kết nối Vinhome Central Park, Tân Cảng, Chợ Thảo Điền và các điểm đến khác.', image: 'https://saigonwaterbus.com/wp-content/uploads/2022/06/home-slide-3-1536x880.jpg' },
    { name: 'Thanh Đa', description: 'Bán đảo Thanh Đa xanh mát, yên bình giữa lòng thành phố nhộn nhịp, sôi động. Dừng chân tại đây, đừng quên thưởng thức Cháo Vịt Thanh Đa trứ danh, Phong Cua hay dạo chơi KDL Bình Quới.', image: 'https://saigonwaterbus.com/wp-content/uploads/2022/06/home-slide-6.jpg' },
    { name: 'Hiệp Bình Chánh', description: 'Đúng với biệt danh “điểm hẹn của người Sài Gòn” Xung quanh ga tàu thủy Hiệp Bình Chánh rất nhiều nhà hàng, dịch vụ vui chơi ăn uống mà tiêu biểu là Giga Mall.', image: 'https://saigonwaterbus.com/wp-content/uploads/2022/06/home-slide-1-1536x880.jpg' },
    { name: 'Linh Đông', description: 'Tại đây bạn sẽ cảm nhận cảm giác thanh mát mộc mạc của làng quê yên bình. Đặc biệt, cạnh Ga tàu thủy Linh Đông có bến đò Bình Qưới để sang KDL Bình Quới 2.', image: 'https://saigonwaterbus.com/wp-content/uploads/2022/06/home-slide-4-1536x880.jpg' },
];

const Home = () => {

    
    // const [startDate, setStartDate] = useState(new Date());
    const [selectedStation, setSelectedStation] = useState(stations[0]);
    return (
        <div className='text-sm lg:text-base'>
            <div className="qodef-m-inner">
            </div>
            <div className='BookingSteps'>
                <div className="flex flex-col space-y-8 container mx-auto px-4 py-8">
              <div className='flex items-center'>
                    <h1 className="text-2xl font-bold">Quy trình đặt vé trong 4 bước</h1>
                    <button className='ml-auto text-xl font-bold bg-sky-400 text-white py-2 px-4 rounded hover:bg-sky-500'>
                        Đặt vé ngay
                    </button>
                </div>

                   
                    <div className="flex space-x-8 justify-center">
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
                    <div className="flex space-x-2 mb-4 border-b border-gray-300">
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
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                            <img
                                src={selectedStation.image}
                                alt={selectedStation.name}
                                className="w-full h-full md:w-1/2  max-w-full max-h-full rounded-lg shadow-lg object-cover"
                            />
                            <div className="w-full md:w-1/2">
                                <h2 className="text-xl font-bold mb-2">{selectedStation.name}</h2>
                                <p className="mb-4">{selectedStation.description}</p>
                                <button className="flex items-center space-x-2 text-yellow-500 font-semibold">
                                    <PlusCircleIcon className="w-6 h-6" />
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