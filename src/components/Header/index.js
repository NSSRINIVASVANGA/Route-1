import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="head-con">
    <div className="logo-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <p className="nav-link"> Wave </p>
    </div>
    <ul className="nav-con">
      <li>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
