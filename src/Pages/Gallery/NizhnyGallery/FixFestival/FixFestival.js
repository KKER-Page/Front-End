import Footer from "../../../../components/Footer/Footer";
import Gallery from "../../../../components/Gallery/Gallery";
import NavBar from "../../../../components/NavBar/NavBar";
import FixFestivalData from "./FixFestivalData"

function FixFestival() {
    return <>
        <NavBar />
        <Gallery
            data={FixFestivalData}
        />
        <Footer />
    </>
}

export default FixFestival;