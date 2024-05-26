import { width } from '@fortawesome/free-solid-svg-icons/fa0';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SeatingChart from './ghetau'
import './datve.css'
import ChuyenTau from './chuyen';
const DatVe = () => {
      const [startDate, setStartDate] = useState(new Date());

    return (
        
        <div>
            <div class="qodef-m-inner">
                    <div className="flex items-center justify-center bg-stone-200 h-40">
                        <div className="container mx-auto">
                            <h1 className="qodef-m-title entry-title text-xl font-bold ">
                                Đặt vé trực tuyến
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
            <div id="Info" className="text-yellow-600 hidden" />
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
    <option value="option1" >Bình An</option> 
    <option value="option1" >Thanh Đa</option> 
  </select>
  <img
    decoding="async"
    src="//static.vexere.com/webnx/prod/img/from-v5.svg"
    alt=""
    className="h-8 absolute right-3"
  />
</div>

                  <input id="from" name="from" type="hidden" defaultValue="" />
                  <input id="nameFrom" name="nameFrom" type="hidden" />
                  <input
                    id="pickupPointDistrict"
                    name="pickupPointDistrict"
                    type="hidden"
                  />
                  <input id="pickupPointName" name="pickupPointName" type="hidden" />
                  <input id="fromLabel" name="fromLabel" type="hidden" />
                </div>
                {/* button chuyen qua lai ngay di noi di den */}
                <button>
                <img class="swap-area" decoding="async" src="//static.vexere.com/webnx/prod/img/swap-v3.svg" alt=""></img>


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


                  <input id="to" name="to" type="hidden" defaultValue="" />
                  <input id="nameTo" name="nameTo" type="hidden" />
                  <input
                    id="dropoffPointDistrict"
                    name="dropoffPointDistrict"
                    type="hidden"
                  />
                  <input id="dropoffPointName" name="dropoffPointName" type="hidden" />
                  <input id="toLabel" name="toLabel" type="hidden" />
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
            style={{ width: '165%' }} // Loại bỏ !important và chỉ cần truyền một đối tượng JavaScript với thuộc tính width
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
      <div className="elementor-widget-container mt-6">
        <h2 className="elementor-heading-title elementor-size-default text-xl font-bold text-gray-800">
          Quý khách vui lòng kiểm tra Ngày Khởi Hành trước khi hoàn tất đặt vé
        </h2>
      </div>
    </div>
  </div>
</section>

{/* <ChuyenTau/> */}

<SeatingChart/>
{/* //sectionftve */}
<div className='container mx-auto'>
          <section
  className="elementor-section elementor-top-section elementor-element elementor-element-059ba34 elementor-section-boxed elementor-section-height-default elementor-section-height-default qodef-elementor-content-no"
  data-id="059ba34"
  data-element_type="section"
>
  <div className="elementor-container elementor-column-gap-default">
    <div
      className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fa754fc"
      data-id="fa754fc"
      data-element_type="column"
    >
      <div className="elementor-widget-wrap elementor-element-populated">
        <div
          className="elementor-element elementor-element-5600743 elementor-widget elementor-widget-text-editor"
          data-id={5600743}
          data-element_type="widget"
          data-widget_type="text-editor.default"
        >
          <div className="elementor-widget-container">
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "/*! elementor - v3.18.0 - 20-12-2023 */\n.elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{background-color:#69727d;color:#fff}.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap{color:#69727d;border:3px solid;background-color:transparent}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap{margin-top:8px}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter{width:1em;height:1em}.elementor-widget-text-editor .elementor-drop-cap{float:left;text-align:center;line-height:1;font-size:50px}.elementor-widget-text-editor .elementor-drop-cap-letter{display:inline-block}"
              }}
            />{" "}
            <p style={{ backgroundColor: "#ffffff", textAlign: "left" }}>
              <strong>
                <em>Lưu ý:&nbsp;</em>
              </strong>
              <strong>
                <em>
                  Saigon Waterbus miễn phí vé cho người cao tuổi từ 70 và các bé
                  dưới 1 tuổi, người khuyết tật và thương binh.&nbsp;
                </em>
              </strong>
            </p>
            <p>
              <strong>Lịch tàu 01</strong> Saigon Waterbus các chuyến từ bến
              Bạch Đằng đến các bến Bình An, Thanh Đa, Hiệp Bình Chánh, Linh
              Đông và ngược lại.
            </p>
            <p style={{ backgroundColor: "#ffffff" }}>
              <span style={{ fontWeight: "bold" }}>
                <img
                  fetchpriority="high"
                  decoding="async"
                  className="alignnone wp-image-10330 size-full"
                  src="https://saigonwaterbus.com/wp-content/uploads/2024/03/20240226-Lich-tau-Update-RGB.jpg"
                  alt=""
                  width={2478}
                  height={1569}
                  srcSet="https://saigonwaterbus.com/wp-content/uploads/2024/03/20240226-Lich-tau-Update-RGB.jpg 2478w, https://saigonwaterbus.com/wp-content/uploads/2024/03/20240226-Lich-tau-Update-RGB-300x190.jpg 300w, https://saigonwaterbus.com/wp-content/uploads/2024/03/20240226-Lich-tau-Update-RGB-1024x648.jpg 1024w, https://saigonwaterbus.com/wp-content/uploads/2024/03/20240226-Lich-tau-Update-RGB-768x486.jpg 768w, https://saigonwaterbus.com/wp-content/uploads/2024/03/20240226-Lich-tau-Update-RGB-1536x973.jpg 1536w, https://saigonwaterbus.com/wp-content/uploads/2024/03/20240226-Lich-tau-Update-RGB-2048x1297.jpg 2048w"
                  sizes="(max-width: 2478px) 100vw, 2478px"
                />
              </span>
            </p>
            <p style={{ backgroundColor: "#ffffff" }}>
              <span style={{ fontWeight: "bold" }}>Lịch tàu 02 </span>Khởi hành
              từ Bạch Đằng đến Thủ Thiêm và ngược lại.&nbsp;
            </p>
            <p>
              <img
                decoding="async"
                className="alignnone wp-image-10331 size-full"
                src="https://saigonwaterbus.com/wp-content/uploads/2024/03/Lich-thu-thiem.jpg"
                alt=""
                width={2477}
                height={1567}
                srcSet="https://saigonwaterbus.com/wp-content/uploads/2024/03/Lich-thu-thiem.jpg 2477w, https://saigonwaterbus.com/wp-content/uploads/2024/03/Lich-thu-thiem-300x190.jpg 300w, https://saigonwaterbus.com/wp-content/uploads/2024/03/Lich-thu-thiem-1024x648.jpg 1024w, https://saigonwaterbus.com/wp-content/uploads/2024/03/Lich-thu-thiem-768x486.jpg 768w, https://saigonwaterbus.com/wp-content/uploads/2024/03/Lich-thu-thiem-1536x972.jpg 1536w, https://saigonwaterbus.com/wp-content/uploads/2024/03/Lich-thu-thiem-2048x1296.jpg 2048w"
                sizes="(max-width: 2477px) 100vw, 2477px"
              />
            </p>
            <p style={{ backgroundColor: "#ffffff" }}>
              <span style={{ fontWeight: "bold" }}>
                Hướng dẫn đặt vé trực tuyến
                <br />
                Bước 1:{" "}
              </span>
              Tham khảo lịch khởi hành Saigon Waterbus
              <br />
              <b>Step 1</b>: Check out the departure timetable of Saigon
              Waterbus
            </p>
            <p style={{ backgroundColor: "#ffffff" }}>
              <b>Bước 2:</b>&nbsp;Chọn bến đi – bến đến, chọn ngày khởi hành sau
              đó chọn&nbsp;<span style={{ fontWeight: "bold" }}>tìm vé.</span>
              <br />
              <span
                style={{
                  fontWeight: "bold",
                  color: "var( --e-global-color-text )",
                  fontFamily:
                    "var( --e-global-typography-text-font-family ), Sans-serif"
                }}
              >
                Lưu ý:
              </span>
              <span
                style={{
                  color: "var( --e-global-color-text )",
                  fontFamily:
                    "var( --e-global-typography-text-font-family ), Sans-serif",
                  fontWeight: "var( --e-global-typography-text-font-weight )"
                }}
              >
                &nbsp;
                <br />
              </span>
              <span
                style={{
                  color: "var( --e-global-color-text )",
                  fontFamily:
                    "var( --e-global-typography-text-font-family ), Sans-serif",
                  fontWeight: "var( --e-global-typography-text-font-weight )"
                }}
              >
                Vé Saigon Waterbus là vé 1 chiều, Quý khách đặt vé đi sau đó đặt
                vé về.&nbsp;
                <br />
              </span>
              <span
                style={{
                  color: "var( --e-global-color-text )",
                  fontFamily:
                    "var( --e-global-typography-text-font-family ), Sans-serif"
                }}
              >
                <span
                  style={{
                    fontWeight: "var( --e-global-typography-text-font-weight )"
                  }}
                >
                  Thời gian đến di chuyển qua các bến như trên lịch khởi
                  hành.&nbsp;
                </span>
                <br />
              </span>
              <span
                style={{
                  color: "var( --e-global-color-text )",
                  fontFamily:
                    "var( --e-global-typography-text-font-family ), Sans-serif"
                }}
              >
                <span style={{ fontWeight: "bold" }}>
                  Ví dụ:
                  <br />
                </span>
              </span>
              <span
                style={{
                  color: "var( --e-global-color-text )",
                  fontFamily:
                    "var( --e-global-typography-text-font-family ), Sans-serif",
                  fontWeight: "var( --e-global-typography-text-font-weight )"
                }}
              >
                Từ Bạch Đằng – Bình An: 15 phút/ chiều.
                <br />
              </span>
              <span
                style={{
                  color: "var( --e-global-color-text )",
                  fontFamily:
                    "var( --e-global-typography-text-font-family ), Sans-serif",
                  fontWeight: "var( --e-global-typography-text-font-weight )"
                }}
              >
                Từ Bạch Đằng – Thanh Đa: 32 phút/ chiều.
                <br />
              </span>
              <span
                style={{
                  color: "var( --e-global-color-text )",
                  fontFamily:
                    "var( --e-global-typography-text-font-family ), Sans-serif",
                  fontWeight: "var( --e-global-typography-text-font-weight )"
                }}
              >
                Từ Bạch Đằng – Hiệp Bình Chánh: 42 phút/ chiều.&nbsp;
                <br />
              </span>
              <span
                style={{
                  color: "var( --e-global-color-text )",
                  fontFamily:
                    "var( --e-global-typography-text-font-family ), Sans-serif",
                  fontWeight: "var( --e-global-typography-text-font-weight )"
                }}
              >
                Từ Bạch Đằng – Linh Đông: 52 phút/ chiều.
              </span>
            </p>
            <p style={{ backgroundColor: "#ffffff" }}>
              <span style={{ fontWeight: "bold" }}>Step 2:</span>&nbsp;Select
              departure – arrival station, select departure date and then choose
              to search for tickets.&nbsp;
              <br />
              <span
                style={{
                  fontWeight: "bold",
                  color: "var( --e-global-color-text )",
                  fontFamily:
                    "var( --e-global-typography-text-font-family ), Sans-serif"
                }}
              >
                Note:
              </span>
              <span
                style={{
                  color: "var( --e-global-color-text )",
                  fontFamily:
                    "var( --e-global-typography-text-font-family ), Sans-serif",
                  fontWeight: "var( --e-global-typography-text-font-weight )"
                }}
              >
                &nbsp;Saigon Waterbus ticket is a one-way ticket, you book a
                ticket to go and then book a return ticket.&nbsp;
                <br />
              </span>
              <span
                style={{
                  color: "var( --e-global-color-text )",
                  fontFamily:
                    "var( --e-global-typography-text-font-family ), Sans-serif"
                }}
              >
                <span
                  style={{
                    fontWeight: "var( --e-global-typography-text-font-weight )"
                  }}
                >
                  The arrival time moves through the station as on the departure
                  schedule.
                </span>
                <br />
              </span>
              <span
                style={{
                  color: "var( --e-global-color-text )",
                  fontFamily:
                    "var( --e-global-typography-text-font-family ), Sans-serif"
                }}
              >
                <span style={{ fontWeight: "bold" }}>
                  Example:&nbsp;
                  <br />
                </span>
              </span>
              <span
                style={{
                  color: "var( --e-global-color-text )",
                  fontFamily:
                    "var( --e-global-typography-text-font-family ), Sans-serif",
                  fontWeight: "var( --e-global-typography-text-font-weight )"
                }}
              >
                From Bach Dang – Binh An: 15 minutes/way.&nbsp;
                <br />
              </span>
              <span
                style={{
                  color: "var( --e-global-color-text )",
                  fontFamily:
                    "var( --e-global-typography-text-font-family ), Sans-serif",
                  fontWeight: "var( --e-global-typography-text-font-weight )"
                }}
              >
                From Bach Dang – Thanh Da: 32 minutes/way.&nbsp;
                <br />
              </span>
              <span
                style={{
                  color: "var( --e-global-color-text )",
                  fontFamily:
                    "var( --e-global-typography-text-font-family ), Sans-serif",
                  fontWeight: "var( --e-global-typography-text-font-weight )"
                }}
              >
                From Bach Dang – Hiep Binh Chanh: 42 minutes/way.&nbsp;
                <br />
              </span>
              <span
                style={{
                  fontFamily:
                    "var( --e-global-typography-text-font-family ), Sans-serif",
                  color: "var( --e-global-color-text )"
                }}
              >
                From Bach Dang – Linh Dong: 52 minutes/way.&nbsp;
              </span>
            </p>
            <p style={{ backgroundColor: "#ffffff" }}>
              <span
                style={{
                  fontWeight: "bold",
                  fontFamily:
                    "var( --e-global-typography-text-font-family ), Sans-serif"
                }}
              >
                Bước 3:&nbsp;
              </span>
              <span
                style={{
                  fontFamily:
                    "var( --e-global-typography-text-font-family ), Sans-serif",
                  fontWeight: "var( --e-global-typography-text-font-weight )"
                }}
              >
                Chọn vị trí ghế ngồi phù hợp, số lượng ghế ngồi là số lượng vé
                bạn muốn đặt.&nbsp;
                <br />
              </span>
              <span
                style={{
                  color: "var( --e-global-color-text )",
                  fontFamily:
                    "var( --e-global-typography-text-font-family ), Sans-serif",
                  fontWeight: "var( --e-global-typography-text-font-weight )"
                }}
              >
                <span style={{ fontWeight: "bold" }}>Step 3:</span>
              </span>
              <span
                style={{
                  color: "var( --e-global-color-text )",
                  fontFamily:
                    "var( --e-global-typography-text-font-family ), Sans-serif",
                  fontWeight: "var( --e-global-typography-text-font-weight )"
                }}
              >
                <span
                  style={{
                    fontWeight: "var( --e-global-typography-text-font-weight )"
                  }}
                >
                  &nbsp;Choose your seats position, the number of seats is the
                  number of tickets you want to book.
                </span>
              </span>
            </p>
            <p style={{ backgroundColor: "#ffffff" }}>
              <span
                style={{
                  fontFamily:
                    "var( --e-global-typography-text-font-family ), Sans-serif"
                }}
              >
                <span style={{ fontWeight: "bold" }}>Bước 4:</span>
              </span>
              <span
                style={{
                  fontFamily:
                    "var( --e-global-typography-text-font-family ), Sans-serif"
                }}
              >
                <span
                  style={{
                    fontWeight: "var( --e-global-typography-text-font-weight )"
                  }}
                >
                  &nbsp;Điền thông tin liên lạc và tiến hành thanh toán.
                </span>
                <br />
                <span style={{ fontWeight: "bold" }}>Step 4:</span>
              </span>
              <span
                style={{
                  fontFamily:
                    "var( --e-global-typography-text-font-family ), Sans-serif",
                  fontWeight: "var( --e-global-typography-text-font-weight )"
                }}
              >
                &nbsp;
              </span>
              Fill in contact information and payment.&nbsp;
            </p>
            <p>
              <em>
                <strong>Lưu ý: </strong>Vé Saigon Waterbus không hoàn, không hủy
                vì vậy Quý khách vui lòng kiểm tra kỹ thông tin trước khi đặt
                vé, thanh toán.&nbsp;
              </em>
            </p>
            <p>
              <em>
                Note: Saigon Waterbus’s tickets are non-refundable,
                non-cancellable, so please check the information carefully
                before booking and making payment.
              </em>
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</div>



                </div>

            </div>           
        </div>
    );
};

export default DatVe;