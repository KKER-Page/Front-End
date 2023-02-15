import Footer from "../../../../components/Footer/Footer";
import Gallery from "../../../../components/Gallery/Gallery";
import NavBar from "../../../../components/NavBar/NavBar";
import firstYears from "./firstYearsData"

function FirstYears() {
    return <>
        <NavBar />
        <Gallery
            data={firstYears}
        />
        <Footer />
    </>
}

export default FirstYears;