import { FaInstagram, FaMailBulk, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="social-medias">
        <NavLink to={`https://www.instagram.com/kker______/?hl=pt`} target="_blank">
          <FaInstagram />
        </NavLink>
        <NavLink to={`https://www.facebook.com/K.KambungoLDA`} target="_blank">
          <FaFacebook />
        </NavLink>
        <NavLink
          to={`javascript:void(0)`}
          onClick={() => (
            window.location =
            'mailto:kklda37estudosnarussia@outlook.com'
          )
          }
        >
          <FaMailBulk />
        </NavLink>
        <NavLink to={`https://wa.me/+244924760365`} target="_blank">
          <FaWhatsapp />
        </NavLink>
      </div>

      <ul>
        <li>
          <NavLink to={`/`}>Home</NavLink>
        </li>
        <li>
          <NavLink to={`/`}>Países</NavLink>
        </li>
        <li>
          <NavLink to={`/`}>Sobre</NavLink>
        </li>
        <li>
          <NavLink to={`/`}>Candidaturas</NavLink>
        </li>
      </ul>

      <p>&copy;2018-2023 KKER</p>

    </footer>
  )
}

export default Footer