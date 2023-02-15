import Footer from "../../../../components/Footer/Footer";
import Gallery from "../../../../components/Gallery/Gallery";
import NavBar from "../../../../components/NavBar/NavBar";
import ComercialCenterData from "./ComercialCenterData"

function ComercialCenter() {
    return <>
        <NavBar />
        <Gallery
            data={ComercialCenterData}
        />
        <Footer />
    </>
}

export default ComercialCenter;