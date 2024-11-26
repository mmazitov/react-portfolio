import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import { HERO_CONTENT, HERO_NAME, HERO_TITLE } from '../constants';

const contaier = (delay) => ({
	hidden: { x: -100, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			delay: delay,
		},
	},
});
const Hero = () => {
	return (
		<div className="border-neutral-400 lg:mb-35 pb-4 border-b">
			<div className="flex flex-wrap">
				<div className="w-full lg:w-1/2">
					<div className="flex flex-col items-center lg:items-start">
						<motion.h1
							variants={contaier(0)}
							initial="hidden"
							animate="visible"
							className="lg:mb-16 pb-16 font-thin text-6xl lg:text-8xl tracking-tight"
						>
							{HERO_NAME}
						</motion.h1>
						<motion.span
							variants={contaier(0.5)}
							initial="hidden"
							animate="visible"
							className="bg-clip-text bg-gradient-to-r from-pink-300 via-state-500 to-purple-500 text-3xl text-transparent tracking-tight"
						>
							{HERO_TITLE}
						</motion.span>
						<motion.p
							variants={contaier(1)}
							initial="hidden"
							animate="visible"
							className="mt-2 py-6 max-w-xl font-light tracking-tighter"
						>
							{HERO_CONTENT}
						</motion.p>
					</div>
				</div>
				<div className="lg:px-8 w-full lg:w-1/2">
					<div className="flex justify-center lg:justify-end">
						<motion.img
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 1, delay: 1.2 }}
							src={profileImg}
							alt="Mykola Mazitov"
							className="rounded-2xl w-[400px] h-[400px] object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
