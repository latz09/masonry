import '../styles/globals.css';
import { AnimatePresence, motion } from 'framer-motion';
function MyApp({ Component, pageProps, router }) {
	const pageAnimateVariable = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				delay: 0,
				duration: 1.8,
			},
		},
		exit: { opacity: 0, transition: { duration: 0.3 } },
	};
	return (
		<div className='bg-gradient-to-l from-[#FAF4F2] via-light to-[#FAF4F2] font-oswald'>
			<AnimatePresence mode='wait'>
				<motion.div
					key={router.route}
					variants={pageAnimateVariable}
					initial='hidden'
					animate='visible'
					exit='exit'
				>
					<Component {...pageProps} />{' '}
				</motion.div>
			</AnimatePresence>
		</div>
	);
}

export default MyApp;
