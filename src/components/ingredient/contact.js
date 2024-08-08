import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <>
            <section className="bg-gray-100 py-10 rounded-md">
                <div className="container mx-auto px-4 lg:px-20">
                    <div className="flex flex-wrap mt-12">
                        <div className="w-full lg:w-1/2 px-4 py-3">
                            <div className="bg-white p-6 rounded-lg shadow-md text-sm md:text-base">
                                <div className="mb-6">
                                    <h2 className="font-bold mb-4">{t('contact.contact')}</h2>
                                    <p>{t('contact.companyName')}</p>
                                </div>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <h6 className="font-semibold">{t('contact.supportHotline')}</h6>
                                        <h2 className="font-bold text-blue-600">
                                            <a href="tel:1900636830">{t('contact.phone')}</a>
                                        </h2>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <h6 className="font-semibold">{t('contact.officeAddress')}</h6>
                                            <h5 className="text-lg">{t('contact.officeAddress')}</h5>
                                        </div>
                                        <div>
                                            <h6 className="font-semibold">{t('contact.email')}</h6>
                                            <h5>
                                                <a href="mailto:info@saigonwaterbus.com">{t('contact.emailAddress')}</a>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4 py-3">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="font-bold mb-4">{t('contact.supportHotline')}</h2>
                                <form className="space-y-6">
                                    <div className="form-outline mb-4">
                                        <input
                                            type="text"
                                            id="form4Example1"
                                            className="form-control w-full border rounded p-2"
                                        />
                                        <label
                                            className="form-label block text-gray-700 mt-2"
                                            htmlFor="form4Example1"
                                        >
                                            {t('contact.name')}
                                        </label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input
                                            type="email"
                                            id="form4Example2"
                                            className="form-control w-full border rounded p-2"
                                        />
                                        <label
                                            className="form-label block text-gray-700 mt-2"
                                            htmlFor="form4Example2"
                                        >
                                            {t('contact.emailAddressPlaceholder')}
                                        </label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <textarea
                                            className="form-control w-full border rounded p-2"
                                            id="form4Example3"
                                            rows={4}
                                        />
                                        <label
                                            className="form-label block text-gray-700 mt-2"
                                            htmlFor="form4Example3"
                                        >
                                            {t('contact.messagePlaceholder')}
                                        </label>
                                    </div>
                                    <button
                                        type="button"
                                        className="w-full bg-yellow-500 text-white font-bold py-2 rounded shadow-md hover:bg-yellow-600"
                                    >
                                        {t('contact.sendButton')}
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
                                src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Saigon%20Waterbus%20Station%2C%2010B%20T%C3%B4n%20%C4%90%E1%BB%A9c%20Th%E1%BA%AFng&zoom=15"
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
