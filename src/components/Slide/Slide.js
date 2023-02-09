import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
    display: 'none',
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px',
}

const slideImages = [
    {
        url: '../images/content-images/uni-1.webp',
        },
    {
        url: '../images/content-images/uni-1.jpg',
    },
    {
        url: '../images/content-images/moscow-1.jpg',
    },
    {
        url: '../images/content-images/moscow.jpg'
    }
];


function SlideShow() {
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                            <span style={spanStyle}>{slideImage.caption}</span>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default SlideShow;