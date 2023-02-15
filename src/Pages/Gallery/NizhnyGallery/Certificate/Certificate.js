import Footer from "../../../../components/Footer/Footer";
import Gallery from "../../../../components/Gallery/Gallery";
import NavBar from "../../../../components/NavBar/NavBar";
import certificateDate from "./certificateData"

function Certificate() {
    return <>
        <NavBar />
        <Gallery
            data={certificateDate}
        />
        <Footer />
    </>
}

export default Certificate;