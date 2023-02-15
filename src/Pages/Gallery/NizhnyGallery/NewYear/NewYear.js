import Footer from "../../../../components/Footer/Footer";
import Gallery from "../../../../components/Gallery/Gallery";
import NavBar from "../../../../components/NavBar/NavBar";
import newYearData from "./newYearData"

function NewYear() {
    return <>
        <NavBar />
        <Gallery
            data={newYearData}
        />
        <Footer />
    </>
}

export default NewYear;