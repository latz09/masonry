import { motion } from 'framer-motion';
import { GiTrowel } from 'react-icons/gi';

const LandingBanner = () => {
	return (
		<motion.div
			className='landing-banner grid place-items-center '
			whileHover={{ scale: 0.9 }} // Scale up on hover
			whileTap={{ scale: 0.84 }} // Scale down on tap
			transition={{ duration: 0.3 }}
		>
			<motion.div
				className='flex space-x-4 items-center'
				whileHover={{ scale: 0.9 }} // Scale up on hover
				whileTap={{ scale: 0.84 }} // Scale down on tap
				transition={{ duration: 0.3 }}
			>
				<div>Request a Quote</div>
				<GiTrowel className='text-2xl text-secondar ' />
			</motion.div>
		</motion.div>
	);
};

export default LandingBanner;
