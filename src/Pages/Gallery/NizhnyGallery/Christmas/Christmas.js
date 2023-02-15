import Footer from "../../../../components/Footer/Footer";
import Gallery from "../../../../components/Gallery/Gallery";
import NavBar from "../../../../components/NavBar/NavBar";
import christmasData from "./ChristmasData"

function Christmas() {
    return <>
        <NavBar />
        <Gallery
            data={christmasData}
        />
        <Footer />
    </>
}

export default Christmas;