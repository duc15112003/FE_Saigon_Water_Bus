function ThanhToanThanhCong() {
    return ( 
        <div>
<div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
        <h2 className="text-2xl font-semibold mb-4">Thanh toán thành công!</h2>
        <p className="text-gray-700 mb-4">
          Cảm ơn bạn đã thanh toán. Đơn hàng của bạn đã được xác nhận.
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => window.location.href = '/'}
        >
          Quay lại trang chủ
        </button>
      </div>
    </div>
        </div>
     );
}

export default ThanhToanThanhCong;