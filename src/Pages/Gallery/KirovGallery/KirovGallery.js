import Footer from "../../../components/Footer/Footer";
import Gallery from "../../../components/Gallery/Gallery";
import NavBar from "../../../components/NavBar/NavBar";
import imagesKirovData from "./imagesKirovData"

function KirovGallery() {
    return <>
        <NavBar />
        <Gallery
            data={imagesKirovData}
        />
        <Footer />
    </>
}

export default KirovGallery;