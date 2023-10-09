import React, { useId } from 'react';


function Select({
    options,
    label,
    className,
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>
            { label && <label htmlFor={id} className=''></label>}
            <select
            {...props}
            id={id}
            ref={ref}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border
             border-gray-200 w-full ${className}`}
            >
                {/* options also give an array, always take an array 
                we will not do options.map() bz there are chances there cannot be value in it, then it will crash*/}
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};



export default React.forwardRef(Select);