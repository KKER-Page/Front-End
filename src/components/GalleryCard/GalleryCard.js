import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

import { NavLink } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const text = [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Lorem ipsum dolor sit amet consectetur adipisicing elit.`
]

function GalleryCard(props) {
    useEffect(() => {
        AOS.init({duration: 3000});
    }, [])

    return (
        <>
            <NavBar />
            <div style={{width: '100%', backdropFilter: 'blur(8px)'}}>
                <div className="col" data-aos="zoom-in">
                    {props.dataCard.map((data, index) => ( 
                        <div key={index} className="card" style={{backgroundImage: `url(${data.bgImage})`}} >
                            <NavLink to={data.link}>
                                <h2>{data.city}</h2>
                                <p>{text}</p>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default GalleryCard;