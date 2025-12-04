import { Link } from 'react-router-dom'
import './MenuBar.css'

function MenuBar() {
  return (
    <nav className="menu-bar">
      <div className="menu-container">
        <div className="menu-logo">
          <h2>Holistic Community Health</h2>
        </div>
        <ul className="menu-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/history">History</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><a href="https://google.com" target="_blank" rel="noopener noreferrer" className="donations-btn">Donations</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default MenuBar
