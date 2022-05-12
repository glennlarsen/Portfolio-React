import React, { useState } from 'react';
import Slider from "react-slick";
import { projectList } from '../../js/constants/projectList'
import Modal from '../Modal/index.jsx'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {

    const [data, setData] = useState(null);
    const [show, setShow] = useState(false);

    const toggleItem = (project) => {
        setData(project);
        setShow(project !== null);
    };

    const closeModal = () => {
        setShow(false);
    }

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    dots: false
                }
            }

        ]
    };


    return (
        <>
            <div className="carousel">
                <Slider {...settings}>
                    {projectList.map((project) => {
                        return (
                            <div key={project.id} onClick={() => toggleItem(project)}>
                                <div className="project" style={{ background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${project.image}) 50% 0% / cover no-repeat` }} >
                                    <h2>{project.title}</h2>
                                    <h3>{project.type}</h3>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
                    {show === true && data !== null && (
                        <Modal data={data} closeModal={() => closeModal()} />
                    )}
               
            </div>
        </>
    );


}


