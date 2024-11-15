import logo from '../assets/logo.png'
import { Link } from "react-router-dom"
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";
import job from '../assets/jobs.png'


const Footer = () => {
  return (
    <footer className='grid px-4 md:px-16 gap-4 py-6 align-middle'>
        <div className='grid md:grid-cols-3'>
        <div className='mb-8'>
            <img src={logo} alt="logo" className='size-60' />
            <p className='mb-2 font-medium'>We are an Artificial intelligence platform that helps talents get decent jobs.</p>
            <div className='flex gap-4 mt-2'>
                <Link to='/'><FaFacebook className='size-6' /></Link>
                <Link to='/'><FaInstagram className='size-6' /></Link>
                <Link to='/'><FaTwitter className='size-6' /></Link>
                <Link to='/'><FaGithub className='size-6' /></Link>
                <Link to='/'><CiBasketball className='size-6' /></Link>
            </div>
        </div>
        <div className='self-center grid gap-4 text-sm md:px-12'>
          <h2 className='font-medium text-lg'>Get in touch</h2>
          <p>Nigeria: Ajao estate Lagos</p>
          <p>United kingdom: 2nd Floor College House 17 King Edwards Road Ruislip London</p>
          <p>United states: Delaware, United states</p>
          <p>Whatsapp: +2348127575385, +974 7064 0796</p>
          <p>Copyright © 2024 Mentor Techies. Powered by Mentor Techies</p>
        </div>
        <div className='hidden md:block'>
          <img src={job} alt="" />
        </div>
        </div>
        <hr className='text-black w-full' />
        <div className='md:flex md:justify-between text-xs'>
          <div className='flex gap-4 mb-4'>
            <Link to='/'>Terms & Conditions</Link>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>Cookies</Link>
          </div>
          <div>
              <p>&copy; 2024 Enforca technologies. All rights reserved.</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer