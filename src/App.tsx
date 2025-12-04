import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import MenuBar from './components/MenuBar'
import Home from './pages/Home'
import History from './pages/History'
import Events from './pages/Events'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <MenuBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
