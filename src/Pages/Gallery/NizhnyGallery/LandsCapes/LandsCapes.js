import Footer from "../../../../components/Footer/Footer";
import Gallery from "../../../../components/Gallery/Gallery";
import NavBar from "../../../../components/NavBar/NavBar";
import LandsCapesData from "./LandsCapesData"

function LandsCapes() {
    return <>
        <NavBar />
        <Gallery
            data={LandsCapesData}
        />
        <Footer />
    </>
}

export default LandsCapes;