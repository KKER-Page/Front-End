import Footer from "../../../components/Footer/Footer";
import Gallery from "../../../components/Gallery/Gallery";
import NavBar from "../../../components/NavBar/NavBar";
import imagesCaluga from "./imagesCalugaData"

function CalugaGallery() {
    return <>
        <NavBar />
        <Gallery
            data={imagesCaluga}
        />
        <Footer />
    </>
}

export default CalugaGallery;