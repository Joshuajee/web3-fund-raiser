import header from './../styles/header.module.css'
import Button from './Button';
import Logo from './Logo';
import { useState, useEffect } from 'react';



const Header = () => {

    const [isConnected, setIsConnected] =  useState(false);
    const [wallet, setWallet] = useState([])

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
                    <li> HOME </li>
                    <li> BLOG </li>
                    <li> CAMPAIGN </li>
                    <li> BLOG </li>
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

            </nav>

        </header>)
}


export default Header