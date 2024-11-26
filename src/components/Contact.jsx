import { motion } from 'framer-motion';
import { CONTACT } from '../constants';

const Contact = () => {
	return (
		<div className="border-neutral-300 pb-20 border-b">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5 }}
				className="my-10 text-4xl text-center"
			>
				Get in Touch
			</motion.h2>
			<div className="text-center tracking-tighter">
				<motion.a
					href="tel:+380663104788"
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -100 }}
					transition={{ duration: 1 }}
					className="my-4 hover:underline"
				>
					{CONTACT.phoneNo}
				</motion.a>
				<br />
				<motion.a
					href="mailto:mazitov.nikolya@gmail.com"
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: 100 }}
					transition={{ duration: 1 }}
					className="my-4 hover:underline"
				>
					{CONTACT.email}
				</motion.a>
			</div>
		</div>
	);
};

export default Contact;
