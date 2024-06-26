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
                            <a className="text-3xl font-bold font-heading" href="/">
                                <img
                                    className="Style_Image"
                                    alt=''
                                    src={logoapp}
                                />
                            </a>
                            <div className="mt-6 lg:mb-0 mb-6">
                                © 2022 CÔNG TY TNHH THƯỜNG NHẬT. Giấy CNĐK DN số: 0304354924 cấp ngày 05/05/2006 tại Sở
                                Kế hoạch & đầu tư Tp. Hồ Chí Minh.
                                Địa chỉ: 6 Phan Kế Bính, Phường Đa Kao, Quận 1, TP. Hồ Chí Minh.
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-3/12 px-4 ml-auto">

                              <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                Thông tin
                              </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://www.creative-tim.com/presentation?ref=njs-profile"
                                            >
                                                Giới thiệu
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://blog.creative-tim.com?ref=njs-profile"
                                            >
                                                Đối tác
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://www.github.com/creativetimofficial?ref=njs-profile"
                                            >
                                                Tuyển dụng
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                                <div className="w-full lg:w-3/12 px-4 ml-auto">

                              <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                Dịch vụ
                              </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://www.creative-tim.com/presentation?ref=njs-profile"
                                            >
                                                Water bus
                                            </a>
                                        </li>
                                        {/*<li>*/}
                                        {/*    <a*/}
                                        {/*        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"*/}
                                        {/*        href="https://blog.creative-tim.com?ref=njs-profile"*/}
                                        {/*    >*/}
                                        {/*        Blog*/}
                                        {/*    </a>*/}
                                        {/*</li>*/}
                                        {/*<li>*/}
                                        {/*    <a*/}
                                        {/*        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"*/}
                                        {/*        href="https://www.github.com/creativetimofficial?ref=njs-profile"*/}
                                        {/*    >*/}
                                        {/*        Github*/}
                                        {/*    </a>*/}
                                        {/*</li>*/}
                                        {/*<li>*/}
                                        {/*    <a*/}
                                        {/*        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"*/}
                                        {/*        href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"*/}
                                        {/*    >*/}
                                        {/*        Free Products*/}
                                        {/*    </a>*/}
                                        {/*</li>*/}
                                    </ul>
                                </div>
                                <div className="w-full lg:w-3/12 px-4 ml-auto">

                              <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                Chính sách
                              </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://www.creative-tim.com/presentation?ref=njs-profile"
                                            >
                                                Chính sách và quy định
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://blog.creative-tim.com?ref=njs-profile"
                                            >
                                                Điều khoản sử dụng
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://www.github.com/creativetimofficial?ref=njs-profile"
                                            >
                                                Chính sách bảo mật
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                                <div className="w-full lg:w-3/12 px-4 ml-auto">
              <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Liên hệ
              </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                                            >
                                                Văn phòng chính
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://creative-tim.com/terms?ref=njs-profile"
                                            >
                                                Hợp tác bán hàng
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://creative-tim.com/privacy?ref=njs-profile"
                                            >
                                                Câu hỏi thường gặp
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-blueGray-300"/>
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-blueGray-500 font-semibold py-1">
                                Creative © <span id="get-current-year">2024</span>
                                <a
                                    href="#"
                                    className="text-blueGray-500 hover:text-gray-800"
                                    target="_blank"
                                >
                                    {" "}
                                    Tailwind Css By
                                </a>
                                <a
                                    href="#"
                                    className="text-blueGray-500 hover:text-blueGray-800"
                                >
                                    <a> </a>@Pham Minh Duc
                                </a>
                                .
                            </div>
                        </div>
                    </div>
                </div>
                                {/* <a className="sfm-shape-button" target="_blank" href=""><i class="fas fa-phone"></i></a> */}

            </footer>
        </div>
    );
}

export default footer;