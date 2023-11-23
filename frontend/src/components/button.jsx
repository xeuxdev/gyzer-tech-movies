import PropTypes from "prop-types"

export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="flex items-center h-12 px-5 font-semibold text-white rounded-md w-fit bg-gray-950 hover:bg-gray-800"
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.elementType,
}
