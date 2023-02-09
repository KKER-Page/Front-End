import Footer from "../../../../components/Footer/Footer";
import Gallery from "../../../../components/Gallery/Gallery";
import NavBar from "../../../../components/NavBar/NavBar";
import data from "./ComercialCenter.json"

function ComercialCenter() {
    return <>
        <NavBar />
        <Gallery 
            data={data}
        />
        <Footer />
    </>
}

export default ComercialCenter;