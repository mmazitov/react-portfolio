import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Technologies from './components/Technologies';

const App = () => {
	return (
		<div className="selection:bg-cyan-300 text-neutral-300 selection:text-cyan-900 antialiased overflow-x-hidden">
			<div className="top-0 -z-10 fixed w-full h-full">
				<div className="top-0 z-[-2] absolute bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] bg-neutral-950 w-screen h-screen"></div>
			</div>

			<div className="mx-auto px-8 container">
				<Navbar />
				<Hero />
				<About />
				<Technologies />
				<Experience />
				<Contact />
			</div>
		</div>
	);
};

export default App;
