import FANCY_LOGO from '../assets/fancy-white-logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='w-full fixed z-10'>
            <div className='p-2.5 m-2.5 blur_navbar rounded-full flex flex-row justify-between z-11'>
                <img src={FANCY_LOGO} alt="Fancy Logo" />
                <div>
                    <ul className='text-white flex flex-row'>
                        <li>
                            <Link to="/">
                                Subscription
                            </Link>
                        </li>
                        <li>
                            <Link to="/services">
                                Services
                            </Link>
                        </li>
                        <li>Pricing</li>
                        <li>
                            <Link to="/works">
                                Works
                            </Link>
                        </li>
                        <li>About us</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                <button className='z-12'>Let's talk</button>
            </div>
        </div>
    )
}

export default Navbar
