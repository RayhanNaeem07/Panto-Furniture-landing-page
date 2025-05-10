import linkBtnIcon from "../assets/button-icon.png"

const LinkButton = ({text}) => {
    return (
        <button className="text-sm text-primary flex items-center gap-4 cursor-pointer hover:underline">{text}
            <img src={linkBtnIcon} alt="link button" />
        </button>
    );
};

export default LinkButton;