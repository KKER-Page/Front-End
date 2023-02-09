import Footer from "../../../../components/Footer/Footer";
import Gallery from "../../../../components/Gallery/Gallery";
import NavBar from "../../../../components/NavBar/NavBar";
import data from "./FixFestival.json"

function FixFestival() {
    return <>
        <NavBar />
        <Gallery 
            data={data}
        />
        <Footer />
    </>
}

export default FixFestival;