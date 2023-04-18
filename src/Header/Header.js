import './Header.scss';
import img from '../Img/LANDING.svg';
import img2 from '../Img/Group 4.svg';
import {useRef} from "react";


function Header() {
    const div = useRef(null);
    function fg(e){
        e.target.style.borderBottom = '2px solid black';
        div.current.style.marginTop = '2px';
    }
    function fh(e){
        e.target.style.borderBottom = '1px solid rgba(225, 227, 233, 0) ';
        div.current.style.marginTop = '0';
    }
    return (
        <header>
            <nav>
                <img src={img} alt="" className={'logo'}/>
                <div ref={div}>
                    <span onMouseOver={fg} onMouseOut={fh}>Clothes</span>
                    <span  onMouseOver={fg} onMouseOut={fh}>Sneakers</span>
                    <span onMouseOver={fg} onMouseOut={fh}>Bags</span>
                    <span  onMouseOver={fg} onMouseOut={fh}>Accessorize</span>
                </div>
                <img src={img2} alt="" className={'buy'}/>
            </nav>
        </header>
    );
}

export default Header;
