import './TopBanner.scss';
import img from '../../Img/icons8-apple-logo 1.svg';
import img2 from '../../Img/android-logo-svgrepo-com 1.svg';
import img3 from '../../Img/Vector 1.svg';
import create from '../../Img/Group 3.svg';
import '../../animate.css';
import {useRef} from "react";


function TopBanner() {
    const inputEl = useRef(null);

    function onMouseOver(){
        inputEl.current.style.transform = 'rotate(0)';
    }
    function onMouseOut(){
        inputEl.current.style.transform = 'rotate(10.5deg)';
    }
    return (
        <div className="TopBanner">
            {/*<img src={img3} alt="" className={'line'}/>*/}
            <div className={'container'}>
                <section className={'topBanner-left'}>
                    <div className={'app-available'}>
                        <div className={'circle'}>
                            <img src={img} alt=""/>
                        </div>
                        <div className={'circle'}>
                            <img src={img2} alt=""/>
                        </div>
                    </div>
                    <span className={'span'}>App available</span>
                    <div className={'look'} ref={inputEl} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
                        <span>LOOK*</span>
                    </div>
                        <h1 className={'animated animate__backInLeft'}>CHOOSE YOUR<br/> WINTER<br/> APPAREL</h1>
                </section>
                <section className={'topBanner-right'}>
                    {/*<span>CR <br/> EA <br/> TE</span>*/}
                    <img src={create} alt="" className={'animated animate__fadeInRight'}/>
                </section>
            </div>
        </div>
    );
}

export default TopBanner;
