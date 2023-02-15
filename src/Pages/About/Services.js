import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

function Services() {
    return (
        <div>
            <NavBar />
            <div style={{ height: '100vh', padding: '10rem', margin: 'auto', textAlign: 'center' }}>
                <h1>About Page</h1>
                <NavLink to={`/home`}>
                    <button>Home</button>
                </NavLink>
            </div>
            <Footer />
        </div>
    )
}

export default Services;