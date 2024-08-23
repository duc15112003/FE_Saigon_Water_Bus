import React from 'react';
import { useTranslation } from 'react-i18next';

function ThanhToanThanhCong() {
    const { t } = useTranslation();

    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
                <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
                    <h2 className="text-2xl font-semibold mb-4">{t('paymentSuccess')}</h2>
                    <p className="text-gray-700 mb-4">
                        {t('thankYouMessage')}
                    </p>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => window.location.href = '/'}
                    >
                        {t('backToHome')}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ThanhToanThanhCong;