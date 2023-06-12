import { motion } from 'framer-motion';
import { GiTrowel } from 'react-icons/gi';

const LandingBanner = () => {
	return (
		<motion.div
			className='landing-banner grid place-items-center '

		>
			<motion.div
				className='flex space-x-4 items-center'
			
			>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.8, duration: 1.33 }}
				>
					Request a Quote
				</motion.div>
				<GiTrowel className='text-2xl text-secondar ' />
			</motion.div>
		</motion.div>
	);
};

export default LandingBanner;
