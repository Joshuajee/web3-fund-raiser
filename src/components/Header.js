import header from './../styles/header.module.css'
import Button from './Button';
import Logo from './logo/Logo';
import { useState, useEffect } from 'react';
import { FiMenu } from "react-icons/fi";
import NavLink from './nav/NavLink';
import SideNav from './nav/SideNav';
import { ToastContainer, toast } from 'react-toastify';


const Header = () => {

    const [isConnected, setIsConnected] =  useState(false);
    const [wallet, setWallet] = useState([]);
    const [show, setShow] =  useState(false);

    async function connect() {
        if (typeof window.ethereum != "undefined") {
            try  {
                const wallet = await window.ethereum.request({method: "eth_requestAccounts"});

                setWallet(wallet);

                setIsConnected(true)

            } catch (err) {

                console.log(err?.message)

                toast(err?.message)
            }
        }
    }

    useEffect(() => {
       connect()
    }, []);

    return (     
        <header>

            <nav className={header.nav}>

                <Logo />

                <ul className={`${header.navOne} ${header.navItems}` }>
                    <NavLink text={"HOME"} />
                    <NavLink text={"BLOG"} />
                    <NavLink text={"CAMPAIGN"} /> 
                </ul>

                <ul className={`${header.navTwo} ${header.navItems}` }>

                    {
                        isConnected? <li> {wallet[0]} </li> : <li> <Button text={"Connect Wallet"} onClick={connect}  /> </li>
                    }

                </ul>

                <menu onClick={() => setShow(true)} className={header.menu}> <FiMenu size={"26px"} /> </menu>

            </nav>
            
            <SideNav show={show} setShow={setShow} connect={connect} isConnected={isConnected} wallet={wallet} />
            <ToastContainer />

        </header>)
}


export default Header