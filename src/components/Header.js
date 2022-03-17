import header from './../styles/header.module.css'
import Button from './Button';
import Logo from './Logo';
import { useState, useEffect, useRef } from 'react';
import SideNav from './nav/SideNav';


const Header = () => {

    const [isConnected, setIsConnected] =  useState(false);
    const [wallet, setWallet] = useState([]);
    const home = useRef(null);


    const hover = (ref) => {
        const width = parseInt(ref.current.offsetWidth);
        let size = 0;
        const interval = setInterval(() => {
            size++;
            ref.current.style.width = `${String(size)}px`;
            if (size >= width) {
                clearInterval(interval)
            }
        }, 10)  

    }

    const leave = (ref) => {
        const width = parseInt(ref.current.offsetWidth);
        let size = width;
        const interval = setInterval(() => {
            size--;
            ref.current.style.width = `${String(size)}px`;
            if (size <= 0) {
                clearInterval(interval)
            }
        }, 10)  

    }

    async function connect() {
        if (typeof window.ethereum != "undefined") {
            try  {
                const wallet = await window.ethereum.request({method: "eth_requestAccounts"});

                setWallet(wallet);

                setIsConnected(true)

            } catch (err) {

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
                    <li onMouseEnter={() => hover(home)} onMouseLeave={() => leave(home)} > HOME <div ref={home}></div></li>
                    <li> BLOG  <div></div> </li>
                    <li> CAMPAIGN <div></div> </li>
                    <li> BLOG <div></div> </li>
                </ul>

                <ul className={`${header.navTwo} ${header.navItems}` }>

                    {
                        isConnected? <li> {wallet[0]} </li>
                            :
                        <li>

                            <Button 
                                text={"Connect Wallet"}
                                onClick={connect}  />
                                
                        </li>

                    }

                </ul>

                <SideNav />

                <button className='menu'>Menu</button>

            </nav>

        </header>)
}


export default Header