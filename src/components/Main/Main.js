import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

import KkerSocialMedias from '../KkerSocialMedias/KkerSocialMedias'

function Main(props) {
    useEffect(() => {
        AOS.init({duration: 1000});
    }, [])

    return (
        <main>
            <div className="container">
                <div className="main2">
                    <h1 data-aos="fade-right">
                        {props.title}
                    </h1>
                    <KkerSocialMedias data-aos="zoom-in"/>
                </div>
                <img src={props.src} alt="Students image" data-aos="fade-left"/>
            </div>
        </main>
    )
}

export default Main;