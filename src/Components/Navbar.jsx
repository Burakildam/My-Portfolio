import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"




const Navbar = () => {
  return (
    <nav className=" mb-20 flex item-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <h1 className="font-bold text-3xl">Burak İLDAM</h1>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/burak-ildam/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Burakildam" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/burakildam.js/?next=%2F" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
        </div>
    </nav>
  )
}

export default Navbar