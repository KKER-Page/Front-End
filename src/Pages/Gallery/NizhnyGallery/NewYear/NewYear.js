import Footer from "../../../../components/Footer/Footer";
import Gallery from "../../../../components/Gallery/Gallery";
import NavBar from "../../../../components/NavBar/NavBar";
import data from "./newYear.json"

function NewYear() {
    return <>
        <NavBar />
        <Gallery 
            data={data}
        />
        <Footer />
    </>
}

export default NewYear;