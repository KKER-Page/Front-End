import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Footer from '../Footer/Footer';

import KkerSocialMedias from "../KkerSocialMedias/KkerSocialMedias";
import NavBar from '../NavBar/NavBar';

const Container = (props) => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <>
            <NavBar />
            <div className="container-main">
                <div data-aos="zoom-in">
                    <h1>{props.title}</h1>
                </div>
                {
                    props.data.map((item, index) => (

                        <div key={index} className="container-wrapper" style={{ flexDirection: `${item.divStyle}` }}>
                            <div className="container-child" data-aos={item.animation1}>
                                <p>
                                    {item.text}
                                </p>
                                <KkerSocialMedias />
                            </div>
                            <img src={item.src} alt="Students image" data-aos={item.animation2} />
                        </div>
                    ))
                }
            </div>
            <Footer />
        </>
    )
}

export default Container;