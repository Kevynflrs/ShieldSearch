import React from 'react';

export default function ButtonComponent({ label, icon, iconName, actionType, actionValue }) {
    const handleClick = () => {
        if (actionType === 'download') {
            const link = document.createElement('a');
            link.href = actionValue;
            link.download = actionValue.split('/').pop();
            link.click();
        } else if (actionType === 'navigate') {
            window.location.href = actionValue;
        } else {
            console.warn('Unsupported action type');
        }
    };

    return (
        <button 
            onClick={handleClick} 
            className="inline-flex items-center bg-[#081C15] text-[#FBFBFE] px-8 py-4 rounded-xl shadow-md hover:bg-[#1a3d2f] hover:shadow-lg transition duration-300"
        >
            <span className="text-xl md:text-2xl font-medium">{label}</span>
            {icon && (
                <img 
                    src={icon} 
                    alt={iconName} 
                    className="w-6 h-6 md:w-8 md:h-8 ml-4" 
                />
            )}
        </button>
    );
}