import Footer from "../../../../components/Footer/Footer";
import Gallery from "../../../../components/Gallery/Gallery";
import NavBar from "../../../../components/NavBar/NavBar";
import ExcursionData from "./ExcursionData"

function Excursion() {
    return <>
        <NavBar />
        <Gallery
            data={ExcursionData}
        />
        <Footer />
    </>
}

export default Excursion;