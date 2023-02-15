import Footer from "../../../../components/Footer/Footer";
import Gallery from "../../../../components/Gallery/Gallery";
import NavBar from "../../../../components/NavBar/NavBar";
import sportData from "./sportData"

function Sports() {
    return <>
        <NavBar />
        <Gallery
            data={sportData}
        />
        <Footer />
    </>
}

export default Sports;