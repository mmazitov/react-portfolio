import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience = () => {
	return (
		<div className="border-neutral-300 pb-4 border-b">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5 }}
				className="my-20 text-4xl text-center"
			>
				Experience
			</motion.h2>
			<div>
				{EXPERIENCES.map((experience, index) => (
					<div key={index} className="flex flex-wrap lg:justify-center mb-8">
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -100 }}
							transition={{ duration: 1 }}
							className="w-full lg:w-1/4"
						>
							<p className="mb-2 text-neutral-400 text-sm">{experience.year}</p>
						</motion.div>
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: 100 }}
							transition={{ duration: 1 }}
							className="w-full lg:w-3/4 max-w-xl"
						>
							<h6 className="mb-2 font-semibold">
								{experience.role} -
								<span className="text-purple-100 text-sm">
									{experience.company}
								</span>
							</h6>
							<p className="mb-4 text-neutral-400">{experience.description}</p>
							{experience.technologies.map((technology, index) => (
								<span
									key={index}
									className="inline-block bg-neutral-800 mt-2 mr-2 px-2 py-1 rounded font-medium text-purple-300 text-sm"
								>
									{technology}
								</span>
							))}
						</motion.div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Experience;