import general from "./../styles/general.module.css";

const Button = (props) => {

    const {onClick, text, color, hoverColor, className } = props;

    return <button className={`${general.btn} ${className}`} onClick={onClick}> {text}</button>
} 

export default Button;