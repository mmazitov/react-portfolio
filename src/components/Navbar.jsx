import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center mb-20 py-6">
			<div className="flex flex-shrink-0 items-center">
				<a href="/" className="hover:opacity-80">
					<img
						src={logo}
						alt="logo"
						className="mx-2 w-[70px] h-[60px] object-cover"
					/>
				</a>
			</div>
			<div className="flex justify-center items-center gap-4 m-8 text-2xl">
				<a
					href="https://www.linkedin.com/in/mykola-mazitov-0299b097/"
					className="hover:opacity-80"
				>
					<FaLinkedin />
				</a>
				<a href="https://github.com/mmazitov" className="hover:opacity-80">
					<FaGithub />
				</a>
				<a
					href="https://www.instagram.com/mazitov.nikolya/"
					className="hover:opacity-80"
				>
					<FaInstagram />
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
