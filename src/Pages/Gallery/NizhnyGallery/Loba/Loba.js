import Footer from "../../../../components/Footer/Footer";
import Gallery from "../../../../components/Gallery/Gallery";
import NavBar from "../../../../components/NavBar/NavBar";
import lobaData from "./lobaData"

function Loba() {
    return <>
        <NavBar />
        <Gallery
            data={lobaData}
        />
        <Footer />
    </>
}

export default Loba;