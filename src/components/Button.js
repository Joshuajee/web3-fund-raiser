import general from "./../styles/general.module.css";

const Button = (props) => {

    const {onClick, text, color, hoverColor} = props;

    return <button className={`${general.btn}`} onClick={onClick}> {text}</button>
} 

export default Button;