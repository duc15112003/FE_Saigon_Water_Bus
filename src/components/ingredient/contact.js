import React from 'react';

const Contact = () => {
    return (
<>
<section className="bg-gray-100 py-10">
  <div className="container mx-auto px-4 lg:px-20">
    <div className="flex flex-wrap mt-12  ">
      <div className="w-full lg:w-1/2 px-4 py-3">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Liên hệ</h2>
            <p className="text-lg">CÔNG TY TNHH THƯỜNG NHẬT (SAIGON WATERBUS)</p>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h6 className="text-xl font-semibold">Tổng đài hỗ trợ</h6>
              <h2 className="text-3xl font-bold text-blue-600">
                <a href="tel:1900636830">1900636830</a>
              </h2>
            </div>
            <div className="space-y-4">
              <div>
                <h6 className="text-xl font-semibold">Địa chỉ văn phòng</h6>
                <h5 className="text-lg">6 Phan Kế Bính, Phường Đa Kao, Quận 1, TP.HCM</h5>
              </div>
              <div>
                <h6 className="text-xl font-semibold">Email</h6>
                <h5 className="text-lg">
                  <a href="mailto:info@saigonwaterbus.com">info@saigonwaterbus.com</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 px-4 py-3">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form className="space-y-6">
            {/* Name input */}
            <div className="form-outline mb-4">
              <input type="text" id="form4Example1" className="form-control w-full border rounded p-2" />
              <label className="form-label block text-gray-700 mt-2" htmlFor="form4Example1">Tên</label>
            </div>
            {/* Email input */}
            <div className="form-outline mb-4">
              <input type="email" id="form4Example2" className="form-control w-full border rounded p-2" />
              <label className="form-label block text-gray-700 mt-2" htmlFor="form4Example2">Địa chỉ email</label>
            </div>
            {/* Message input */}
            <div className="form-outline mb-4">
              <textarea className="form-control w-full border rounded p-2" id="form4Example3" rows={4} />
              <label className="form-label block text-gray-700 mt-2" htmlFor="form4Example3">Nội dung</label>
            </div>
            {/* Submit button */}
            <button type="button" className="w-full bg-yellow-500 text-white font-bold py-2 rounded shadow-md hover:bg-yellow-600">
              Gửi tin nhắn
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

 <section className="text-center w-full">
  <div
    className="elementor-widget elementor-widget-google_maps"
    data-id="06a8538"
    data-element_type="widget"
  >
    <div className="w-full">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n                .elementor-widget-google_maps iframe {\n                    height: 500px;\n                    width: 100%;\n                    line-height: 80px;\n                    margin: 0px auto;\n                }\n            "
        }}
      />
      <div className="elementor-custom-embed w-full">
        <iframe
          className="w-full"
          loading="lazy"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyApv_fvxEnhavVgASRgfrQLs8hGLt6k7Io&q=%20Saigon%20Waterbus%20Station%2C%2010B%20T%C3%B4n%20%C4%90%E1%BB%A9c%20Th%E1%BA%AFng&zoom=15"
          title="Saigon Waterbus Station, 10B Tôn Đức Thắng"
          aria-label="Saigon Waterbus Station, 10B Tôn Đức Thắng"
        />
      </div>
    </div>
  </div>
</section>

</>

    );
};

export default Contact;