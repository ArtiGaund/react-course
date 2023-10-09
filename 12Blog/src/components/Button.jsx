import React from 'react';

// parameter of Button fuction classname is empty bz user can give the value in it
//props will be the other properties by user 
export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = '',
    ...props
}){
    return (
        // text will be the children
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>{children}</button>
    );
};

