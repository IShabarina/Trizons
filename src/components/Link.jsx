
// eslint-disable-next-line react/prop-types
const Link = ({ styles, text, href, image }) => {
    return (
        <a
            className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] flex flex-row justify-center items-center`}
            href={href}
        >
            <p className="mr-3">{text} </p>
            {image &&
                <img src={image} alt="icon" className="w-[36px] h-[36px]" />
            }
        </a>
    )
}

export default Link;