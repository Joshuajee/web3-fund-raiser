import logo from "./../../styles/logo.module.css";

const Logo = (props) => {

    if (props.hide) return <div></div>

    return (
        <div className={props.isTwo ? logo.logoTwo : logo.logo}>
   
            <b className={props.isTwo ? logo.wTwo : logo.w}>W</b>
            <>e</>
            <>b</>
            <>3</>
            <br />
            <>F</>
            <>u</>
            <>n</>
            <>d</> 

        </div>)
    }      

export default Logo