import React from "react";
import carousel_img1 from "../../../Assets/Images/Carousel-1.jpg";
import carousel_img2 from "../../../Assets/Images/Carousel-2.jpg";
import carousel_img3 from "../../../Assets/Images/Carousel-3.jpg";
import carousel_img4 from "../../../Assets/Images/Carousel-4.gif";
import carousel_img5 from "../../../Assets/Images/Carousel-5.jpg";
import styles from "./Carousel.module.css"
import Slider from "react-slick"
import "./slick/slick.css";
import "./slick/slick-theme.css";

const Carousel = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000
    }
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Moon Prism</h1>
            <h3 className={styles.subtitle}>We will make up  your power :)</h3>
            <Slider {...settings}>
                <div>
                    <img className={styles.carousel_img} src={carousel_img1} alt=""/>
                </div>
                <div>
                    <img className={styles.carousel_img} src={carousel_img2} alt=""/>
                </div>
                <div>
                    <img className={styles.carousel_img} src={carousel_img3} alt=""/>
                </div>
                <div>
                    <img className={styles.carousel_img} src={carousel_img4} alt=""/>
                </div>
                <div>
                    <img className={styles.carousel_img} src={carousel_img5} alt=""/>
                </div>
            </Slider>
        </div>
    )
};

export default Carousel;
