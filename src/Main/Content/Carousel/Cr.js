import React, { useState } from "react";
import "./Cr.scss";
import img from '../../../Img/im.png';
import img2 from '../../../Img/im (1).png';
import img3 from '../../../Img/im (2).png';
import img4 from '../../../Img/im (4).jpg';
import img5 from '../../../Img/im (3).jpg';
import '../Information/Information';
import information from "../Information/Information";


const images = [
    img4,
    img,
    img2,
    img3,
    img5,
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = (index) => {
        setCurrentIndex(index);
    };

    function btnHover(){
    }
    return (
        <div className="carousel">
            <div className="carousel-images">
                <img
                    className="carousel-image"
                    src={images[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                />
                <img
                    className="carousel-image"
                    src={images[(currentIndex + 1) % images.length]}
                    alt={`Image ${currentIndex + 2}`}
                />
                <img
                    className="carousel-image"
                    src={images[(currentIndex + 2) % images.length]}
                    alt={`Image ${currentIndex + 3}`}
                />
                <img
                    className="carousel-image"
                    src={images[(currentIndex + 3) % images.length]}
                    alt={`Image ${currentIndex + 4}`}
                />
                <img
                    className="carousel-image"
                    src={images[(currentIndex + 4) % images.length]}
                    alt={`Image ${currentIndex + 5}`}
                />
            </div>
            <div className="carousel-buttons">
                <button
                    className="carousel-button left"
                    onClick={() =>
                        handleClick((currentIndex + images.length - 1) % images.length)
                    }
                >
                    {"<"}
                </button>
                <button
                    className="carousel-button"
                    onClick={() => handleClick((currentIndex + 1) % images.length)}
                >
                    {">"}
                </button>
            </div>
        </div>
    );
};

export default Carousel;

