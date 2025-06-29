import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
  label,
  type = 'text',
  className = '',
  ...props
}, ref) {
  const id = useId()

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        ref={ref}
        type={type}
        className={`
          w-full px-4 py-2.5
          border-2 border-black
          rounded-xl shadow-sm
          bg-white text-gray-900
          focus:outline-none focus:ring-2 focus:ring-[#00b4d8] focus:border-transparent
          placeholder-gray-400
          transition duration-200
          ${className}
        `}
        {...props}
      />
    </div>
  )
})

export default Input
