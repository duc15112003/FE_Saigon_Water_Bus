// src/components/DataTable.js
import React from 'react';
import { CheckCircleIcon, XCircleIcon, PencilIcon } from '@heroicons/react/24/solid';

const data = [
    {
        id: 1,
        idTicket: 'Ticket1',
        idShip: 'Ship1',
        CountSeat: 1,
        nameSeat: 'A1',
        total:'15.000đ'
    },
    {
        id: 2,
        idTicket: 'Ticket2',
        idShip: 'Ship1',
        CountSeat: 2,
        nameSeat: 'A2, B1',
        total:'15.000đ'
    },
    {
        id: 3,
        idTicket: 'Ticket3',
        idShip: 'Ship2',
        CountSeat: 1,
        nameSeat: 'A1',
        total:'15.000đ'
    },
];

const DataTable = () => {
    const getIcon = (type) => {
        switch (type) {
            case 'check':
                return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
            case 'x':
                return <XCircleIcon className="w-5 h-5 text-red-500" />;
            default:
                return null;
        }
    };

    return (
        <div className="overflow-x-auto">
            <div className="flex items-center justify-center bg-stone-200 h-40">
                <div className="container mx-auto">
                    <h1 className="qodef-m-title entry-title text-xl font-bold ">
                        Lịch sử đặt vé
                    </h1>
                </div>
            </div>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                <tr>
                    <th className="px-4 py-2 border-b text-left">STT</th>
                    <th className="px-4 py-2 border-b text-left">Mã vé</th>
                    <th className="px-4 py-2 border-b text-left">Mã tàu</th>
                    <th className="px-4 py-2 border-b text-left">Số lượng ghế</th>
                    <th className="px-4 py-2 border-b text-left">Tên ghế</th>
                    <th className="px-4 py-2 border-b text-left">Thành tiền</th>
                    <th className="px-4 py-2 border-b text-left"></th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td className="px-4 py-2 border-b">{item.id}</td>
                        <td className="px-4 py-2 border-b">{item.idTicket}</td>
                        <td className="px-4 py-2 border-b">{item.idShip}</td>
                        <td className="px-4 py-2 border-b">{item.CountSeat}</td>
                        <td className="px-4 py-2 border-b">{item.nameSeat}</td>
                        <td className="px-4 py-2 border-b">{item.total}</td>
                        <td className="px-4 py-2 border-b flex justify-center">
                            <PencilIcon className="w-5 h-5 text-blue-500 cursor-pointer" />
                            xem chi tiết
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
