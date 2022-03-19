import { useRef, useState, useEffect } from "react";

const TIME = 5;

const NavLinkTwo = (props) => {

    const { text } = props

    const ref = useRef(null);

    const [maxWidth, setMaxWidth] = useState(0)

    useEffect(() => {

        setMaxWidth(parseInt(ref.current.offsetWidth))

        ref.current.style.width = `0px`

    }, [])

    const hover = (ref) => {
        let size = 0;
        const interval = setInterval(() => {
            size++;
            console.log(size)
            ref.current.style.width = `${String(size)}px`;
            if (size >= maxWidth) {
                clearInterval(interval)
            }
        }, TIME)  

    }

    const leave = (ref) => {
        let size = maxWidth;
        const interval = setInterval(() => {
            size--;
            ref.current.style.width = `${String(size)}px`;
            if (size <= 0) {
                clearInterval(interval)
            }
        }, TIME)  

    }

    return ( 
        <>
            <li 
                onMouseEnter={() => hover(ref)} 
                onMouseLeave={() => leave(ref)} > {text}
            </li>
            <div className={"line"} ref={ref}></div>
        </>
)
}

export default NavLinkTwo