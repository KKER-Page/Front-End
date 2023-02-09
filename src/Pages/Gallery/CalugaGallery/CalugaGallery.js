import Footer from "../../../components/Footer/Footer";
import Gallery from "../../../components/Gallery/Gallery";
import NavBar from "../../../components/NavBar/NavBar";
import data from "./imagesCaluga.json"

function CalugaGallery() {
    return <>
        <NavBar />
        <Gallery 
            data={data}
        />
        <Footer />
    </>
}

export default CalugaGallery;