import { motion } from 'framer-motion';
import About from './About';
import ImageBanner from './ImageBanner';

import { GiTrowel } from 'react-icons/gi';

const WelcomeHero = () => {
	return (
		<div className='bg-gradient-to-b from-light via-[#FEF9F6] to-light h-[90vh] flex flex-col  justify-between'>
			<div className=' h-full flex flex-col gap-8 justify-center'>
				<BusinessName />

				<TopBanner />
			</div>
			<ImageBanner />
		</div>
	);
};

export default WelcomeHero;

{
	/* <span>{`D & D Masonry LLC  From Deterioration Investigation to Full Restoration.`}</span> */
}

const TopBanner = () => {
	return (
		<div className=' text-lg text-end max-w-7xl mx-auto  lg:text-3xl tracking-wider font-thin scale-y- text-secondary'>
			<div className='scale-y-150 text-2xl'>651 252-1819</div>
		</div>
	);
};

const BusinessName = () => {
	return (
		<div className='grid place-items-center gap-4 tracking-wider h-ful'>
			<div className='grid place-items-center gap-4 lg:gap-5'>
				<div className='scale-y-150 text-5xl lg:text-6xl text-primary'>
					D & D Masonry
				</div>
				<div className='text-base'>Masonry in St. Paul, MN</div>
			</div>
			<div className='text-xl lg:text-3xl opacity-80 scale-y-150 text-center'>
				{' '}
				From Deterioration Investigation to Full Restoration.
			</div>
		</div>
	);
};

const CTA = () => {
	return (
		<div className='grid place-items-center'>
			<motion.div
				whileHover={{ scale: 1.1 }} // Scale up on hover
				whileTap={{ scale: 0.9 }} // Scale down on tap
				transition={{ duration: 0.3 }}
				className=' text-primary uppercase scale-y-150  text-lg lg:text-2xl tracking-wider '
			>
				Our Work
			</motion.div>
		</div>
	);
};
