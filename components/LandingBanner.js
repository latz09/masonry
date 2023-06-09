import { motion } from 'framer-motion';

const LandingBanner = () => {
	return (
		<div className='landing-banner '>
			<motion.div
				whileHover={{ scale: 0.9 }} // Scale up on hover
				whileTap={{ scale: 0.84 }} // Scale down on tap
				transition={{ duration: 0.3 }}
			>
				Request a Quote
			</motion.div>
		</div>
	);
};

export default LandingBanner;
