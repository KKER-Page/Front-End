import Footer from "../../../../components/Footer/Footer";
import Gallery from "../../../../components/Gallery/Gallery";
import NavBar from "../../../../components/NavBar/NavBar";
import data from "./Christmas.json"

function Christmas() {
    return <>
        <NavBar />
        <Gallery 
            data={data}
        />
        <Footer />
    </>
}

export default Christmas;