import { BrowserRouter, Routes as Switch, Route, Navigate } from "react-router-dom";

import Home from "../Pages/Home";
import RussiaLife from "../Pages/Countries/Russia/RussiaLife";
import RussiaStudy from "../Pages/Countries/Russia/RussiaStudy";
import PolandLife from "../Pages/Countries/Poland/PolandLife";
import PolandStudy from "../Pages/Countries/Poland/PolandStudy";
import Services from "../Pages/About/Services";
import Kker from "../Pages/About/Kkker";
import AboutUs from "../Pages/About/AbouUs";
import Requirements from "../Pages/Inscription/Requirements";
import Universities from "../Pages/Inscription/Universities";
import Specialties from "../Pages/Inscription/Specialties";
import RussianGallery from "../Pages/Countries/Russia/RussianGallery";
import PolandGallery from "../Pages/Countries/Poland/PolandGallery";
import NizhnyGallery from "../Pages/Gallery/NizhnyGallery/NizhnyGallery";
import CalugaGallery from "../Pages/Gallery/CalugaGallery/CalugaGallery";
import KirovGallery from "../Pages/Gallery/KirovGallery/KirovGallery";
import FirstYears from "../Pages/Gallery/NizhnyGallery/FirstYears/FirstYears";
import Certificate from "../Pages/Gallery/NizhnyGallery/Certificate/Certificate";
import ComercialCenter from "../Pages/Gallery/NizhnyGallery/ComerciarCenter/ComercialCenter";
import Excursion from "../Pages/Gallery/NizhnyGallery/Excursion/Excursion";
import FixFestival from "../Pages/Gallery/NizhnyGallery/FixFestival/FixFestival";
import Loba from "../Pages/Gallery/NizhnyGallery/Loba/Loba";
import Christmas from "../Pages/Gallery/NizhnyGallery/Christmas/Christmas";
import Sports from "../Pages/Gallery/NizhnyGallery/Sports/Sports";
import LandsCapes from "../Pages/Gallery/NizhnyGallery/LandsCapes/LandsCapes";
import NewYear from "../Pages/Gallery/NizhnyGallery/NewYear/NewYear";

function Routers() {
    return (
        <BrowserRouter>
            <Switch>

                <Route path="/home" element={<Home />} />
                <Route path="/russia_life" element={<RussiaLife /> } />
                <Route path="/russia_study" element={<RussiaStudy /> } />
                <Route path="/poland_life" element={<PolandLife /> } />
                <Route path="/poland_study" element={<PolandStudy /> } />
                <Route path="/service" element={<Services /> } />
                <Route path="/kker" element={<Kker /> } />
                <Route path="/about" element={<AboutUs /> } />
                <Route path="/req" element={<Requirements /> } />                
                <Route path="/universities" element={<Universities /> } />
                <Route path="/specialties" element={<Specialties /> } />
                <Route path="/russian-gallery" element={<RussianGallery /> } />
                <Route path="/poland-gallery" element={<PolandGallery /> } />
                <Route path="/nizhny-gallery" element={<NizhnyGallery /> } />
                <Route path="/first-years" element={<FirstYears /> } />
                <Route path="/certificate" element={<Certificate /> } />
                <Route path="/comercial-center" element={<ComercialCenter /> } />
                <Route path="/excursion" element={<Excursion /> } />
                <Route path="/fix-festival" element={<FixFestival /> } />
                <Route path="/loba" element={<Loba /> } />
                <Route path="/christmas" element={<Christmas /> } />
                <Route path="/sports" element={<Sports /> } />
                <Route path="/lands-caps" element={<LandsCapes /> } />
                <Route path="/new-year" element={<NewYear /> } />
                
                <Route path="/caluga-gallery" element={<CalugaGallery /> } />
                <Route path="/kirov-gallery" element={<KirovGallery /> } />
                
                <Route path="*" element={<Navigate to="/home" />} />

            </Switch>

        </BrowserRouter>
    )
}

export default Routers;