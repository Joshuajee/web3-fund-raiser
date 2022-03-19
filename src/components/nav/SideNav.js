import { useRef, useEffect, useState } from "react";
import Button from "../Button";
import Logo from "../logo/Logo";
import sidenav from "./../../styles/side-nav.module.css";
import NavLinkTwo from './NavLinkTwo';


const SideNav = (props) => {

    const background = useRef(null)
    const nav = useRef(null)

    const [hideLogo, setHideLogo] =  useState(false);

    useEffect(() => {
        background.current.style.display = "none";
        nav.current.style.width = "0px"; 
        setHideLogo(true)
    }, []);

    useEffect(() => {
        if (props.show) {
            background.current.style.display = "block";
            nav.current.style.width = "280px"; 
            setHideLogo(false)
        } else {
            background.current.style.display = "none";
            nav.current.style.width = "0px"; 
            setHideLogo(true)
        }
    }, [props.show])
    


    return (
        <>
            <div ref={background} className={sidenav.background}></div>

            <div ref={nav} className={sidenav.sidenav}>
                
                <div className={sidenav.closebtn} onClick={() => props.setShow(false)} >&times;</div>

                <Logo isTwo={true} hide={hideLogo} />

                <ul>
                    <NavLinkTwo text={"HOME"} />
                    <NavLinkTwo text={"BLOG"} />
                    <NavLinkTwo text={"CAMPAIGN"} /> 

                    {
                        props.isConnected? <li style={{wordWrap: "break-word"}}> {props.wallet[0]} </li> : <li> <Button text={"Connect Wallet"} onClick={props.connect}  /> </li>
                    }

                </ul>

            </div>

        </>)
}

export default SideNav