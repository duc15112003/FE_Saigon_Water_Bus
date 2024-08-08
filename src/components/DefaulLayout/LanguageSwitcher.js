import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <div>
            <select
                value={i18n.language}
                onChange={changeLanguage}
                className="p-2 border rounded"
            >
                <option value="vi">Tiếng Việt</option>
                <option value="en">English</option>
            </select>
        </div>
    );
};

export default LanguageSwitcher;