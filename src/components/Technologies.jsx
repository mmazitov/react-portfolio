import {
	RiBootstrapFill,
	RiCss3Fill,
	RiHtml5Fill,
	RiJavascriptFill,
	RiReactjsFill,
	RiTailwindCssFill,
} from 'react-icons/ri';

import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
	initial: { y: -10 },
	animate: {
		y: [10, -10],
		transition: {
			duration,
			ease: 'linear',
			repeat: Infinity,
			repeatType: 'reverse',
		},
	},
});

const Technologies = () => {
	return (
		<div className="border-neutral-300 pb-24 border-b">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 1.5 }}
				className="my-20 text-4xl text-center"
			>
				Technologies
			</motion.h2>
			<motion.div
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: -100 }}
				transition={{ duration: 0.5 }}
				className="flex flex-wrap justify-center items-center gap-4"
			>
				<motion.div
					variants={iconVariants(2)}
					initial="initial"
					animate="animate"
					className="border-4 border-neutral-500 p-4 rounded-2xl"
				>
					<RiHtml5Fill className="text-[#e34f26] text-7xl" />
				</motion.div>
				<motion.div
					variants={iconVariants(4)}
					initial="initial"
					animate="animate"
					className="border-4 border-neutral-500 p-4 rounded-2xl"
				>
					<RiCss3Fill className="text-[#1572B6] text-7xl" />
				</motion.div>
				<motion.div
					variants={iconVariants(6)}
					initial="initial"
					animate="animate"
					className="border-4 border-neutral-500 p-4 rounded-2xl"
				>
					<RiJavascriptFill className="text-[#F7DF1E] text-7xl" />
				</motion.div>
				<motion.div
					variants={iconVariants(2)}
					initial="initial"
					animate="animate"
					className="border-4 border-neutral-500 p-4 rounded-2xl"
				>
					<RiBootstrapFill className="text-[#7952B3] text-7xl" />
				</motion.div>
				<motion.div
					variants={iconVariants(3)}
					initial="initial"
					animate="animate"
					className="border-4 border-neutral-500 p-4 rounded-2xl"
				>
					<RiTailwindCssFill className="text-[#38B2AC] text-7xl" />
				</motion.div>
				<motion.div
					variants={iconVariants(3.25)}
					initial="initial"
					animate="animate"
					className="border-4 border-neutral-500 p-4 rounded-2xl"
				>
					<RiReactjsFill className="text-[#61DAFB] text-7xl" />
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Technologies;
