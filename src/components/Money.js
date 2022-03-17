import general from "./../styles/general.module.css";

const Money = (props) => {

    return (
        <div className={general.money}>
            <p className={general.moneyAmount}> {props.amount}</p>
            <p> {props.description} </p>
        </div>
    )
}


export default Money;