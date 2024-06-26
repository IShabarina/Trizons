
// eslint-disable-next-line react/prop-types
const Button = ({ styles, text, onClick }) => {
  return (
    <button onClick={onClick} type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      {text}
    </button>
  )
}

export default Button