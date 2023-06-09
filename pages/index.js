import Head from 'next/head';
import BeforeAndAfters from '../components/BeforeAndAfters';
import ImageBanner from '../components/ImageBanner';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import LandingBanner from '../components/LandingBanner';
import Reviews from '../components/Reviews';
import Services from '../components/Services';
import { motion } from 'framer-motion';
import WelcomeHero from '../components/WelcomeHero';
import Footer from '../components/Footer';
import About from '../components/About';

const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
};

export default function Home() {
	return (
		<div className='grid'>
			<LandingBanner />
			<WelcomeHero />{' '}
			<div className='mt-12'>
				<div className='my-24'>
					<About />
				</div>
				<Services />
			</div>
			<motion.div
				className=' mb-24 text-3xl grid place-items-center gap-4 '
				initial={{ opacity: 0, x: -100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 1.5, delay: 0.9 }}
			>
				<p className='scale-y-150'>Call now</p>
				<div className='text-secondary'>651 252-1819</div>
			</motion.div>
			<div className=' mb-24 text-3xl grid place-items-center gap-4'>
				<p className='scale-y-150 text-primary'>Recent Transformations</p>
			</div>
			<div className='grid gap-24'>
				<BeforeAndAfters />
				<div className='   grid gap-4 place-items-center'>
					<div className='self-center'>
						<Reviews />
					</div>
				</div>
			</div>
			<div className='text-center mt-4 mb-16'>
				<button className=' ' onClick={scrollToTop}>
					<div className='text-secondary text-5xl shadow-xl bg-light rounded-full'>
						<BsFillArrowUpCircleFill />{' '}
					</div>
				</button>
			</div>
			<Footer />
		</div>
	);
}
