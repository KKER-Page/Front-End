import { useState } from 'react';
import Modal from '../Modal/Modal';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function Gallery(props) {
    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    useEffect(() => {
        AOS.init({duration: 1000});
    }, [])

    const handelClick = (item, index) => {
        setCurrentIndex(index);
        setClickedImg(item.url);
    };

    const handelRotationRight = () => {
        const totalLength = props.data.data.length;
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = props.data.data[0].url;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = props.data.data.filter((item) => {
            return props.data.data.indexOf(item) === newIndex;
        });

        const newItem = newUrl[0].url;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    }

    const handelRotationLeft = () => {
        const totalLength = props.data.data.length;
        if (currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = props.data.data[totalLength - 1].url;
            setClickedImg(newUrl);
        }

        const newIndex = currentIndex - 1;
        const newUrl = props.data.data.filter((item) => {
            return props.data.data.indexOf(item) === newIndex;
        });

        const newItem = newUrl[0].url;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    }

    return (
        <div style={{width: '100%', background: 'rgba(0,0,0,0.7)'}}>
            <div className='wrapper'>
                {props.data.data.map((item, index) => (
                    <div key={index} className="wrapper-images">
                        {/* <p>{item.id}</p> */}
                        <img
                            src={item.url}
                            alt=""
                            onClick={() => handelClick(item, index)}
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                        />
                    </div>
                ))}
                {clickedImg && (
                    <Modal
                        clickedImg={clickedImg}
                        handelRotationRight={handelRotationRight}
                        setClickedImg={setClickedImg}
                        handelRotationLeft={handelRotationLeft}
                    />
                )}
            </div>
        </div>
    );
}

export default Gallery;