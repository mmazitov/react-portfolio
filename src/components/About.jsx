import { motion } from 'framer-motion';
import aboutImage from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';

const About = () => {
	return (
		<div className="border-neutral-300 pb-4 border-b">
			<h2 className="my-20 text-4xl text-center">
				About <span className="text-neutral-500">Me</span>
			</h2>
			<div className="flex flex-wrap">
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -100 }}
					transition={{ duration: 0.5 }}
					className="lg:p-8 w-full lg:w-1/2"
				>
					<div className="flex justify-center items-center">
						<img
							src={aboutImage}
							className="rounded-2xl w-[400px] h-[400px] object-cover"
							alt="about image"
						/>{' '}
					</div>
				</motion.div>
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: 100 }}
					transition={{ duration: 0.5 }}
					className="lg:p-8 w-full lg:w-1/2"
				>
					<div className="flex justify-center lg:justify-start">
						<p
							className="my-2 py-6 max-w-xl"
							dangerouslySetInnerHTML={{ __html: ABOUT_TEXT }}
						/>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default About;
