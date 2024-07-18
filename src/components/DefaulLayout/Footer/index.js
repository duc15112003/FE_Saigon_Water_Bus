import logoapp from "../../../image/logo.png";
import './footer.css'
function footer() {
    return (

        <div className="footer">
            <hr className="my-6 border-blueGray-300"/>
            <footer className="bg-black-200 pt-8 pb-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                                <img
                                    className="Style_Image"
                                    alt=''
                                    src={logoapp}
                                />
                            <div className="mt-6 lg:mb-0 mb-6">
                                © 2022 CÔNG TY TNHH THƯỜNG NHẬT. Giấy CNĐK DN số: 0304354924 cấp ngày 05/05/2006 tại Sở
                                Kế hoạch & đầu tư Tp. Hồ Chí Minh.
                                Địa chỉ: 6 Phan Kế Bính, Phường Đa Kao, Quận 1, TP. Hồ Chí Minh.
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-3/12 px-4 ml-auto">
                              <span className="block uppercase text-blueGray-500 text-sm font-bold mb-2">
                                Thông tin
                              </span>
                                    <ul className="list-unstyled">
                                        <li>
                                                Giới thiệu
                                        </li>
                                        <li>
                                                Đối tác
                                        </li>
                                        <li>
                                                Tuyển dụng
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-3/12 px-4 ml-auto">

                              <span className="block uppercase text-blueGray-500 text-sm font-bold mb-2">
                                Dịch vụ
                              </span>
                                    <ul className="list-unstyled">
                                        <li>
                                                Water bus
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-3/12 px-4 ml-auto">

                              <span className="block uppercase text-blueGray-500 text-sm font-bold mb-2">
                                Chính sách
                              </span>
                                    <ul className="list-unstyled">
                                        <li>
                                                Chính sách và quy định
                                        </li>
                                        <li>
                                                Điều khoản sử dụng
                                        </li>
                                        <li>
                                                Chính sách bảo mật
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-3/12 px-4 ml-auto">
              <span className="block uppercase text-blueGray-500 text-sm font-bold mb-2">
                    Liên hệ
              </span>
                                    <ul className="list-unstyled">
                                        <li>

                                                Văn phòng chính
                                        </li>
                                        <li>
                                                Hợp tác bán hàng
                                        </li>
                                        <li>
                                                Câu hỏi thường gặp
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-blueGray-300"/>
                </div>
            </footer>
        </div>
    );
}

export default footer;