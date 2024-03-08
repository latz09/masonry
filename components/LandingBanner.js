import { motion } from 'framer-motion';
import { GiTrowel } from 'react-icons/gi';

const LandingBanner = () => {
	return (
		<div className='landing-banner grid place-items-center '>
			<motion.div
				className='flex space-x-4 items-center'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.8, duration: 1.33 }}
			>
				<div>Request a Quotess</div>
				<GiTrowel className='text-2xl text-secondar ' />
			</motion.div>
		</div>
	);
};

export default LandingBanner;
