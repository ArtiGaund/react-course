import React, { useId} from 'react';

// wrapping up in forwardRef
// ref gives reference to parent component, from here state access is given
const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref ){
    const id = useId()

    return(
        // htmlfor will have unique id, used for accessibility purpose
        <div className='w-full'>
            {label && <label
             className='inline-block mb-1 pl-1' 
             htmlFor={id}>
                {label}
             </label>
             }
             <input 
             type={type}
             className={`px-3 py-2 rounded-lg bg-white text-black outline-none
              focus:bg-gray-50 duration-200 border border-gray-200 w-full
               ${className}`}
               ref={ref}
               {...props}
               id={id}
             />
        </div>
    )
})

export default Input;