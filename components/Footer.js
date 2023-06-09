import Image from 'next/image';
import logo from '../public/images/logo.png';

const Footer = () => {
	return (
		<div className='grid place-items-center bg-primary py-4 text-light uppercase'>
			<div className='grid place-items-center gap-2'>
				<Image src={logo} alt='' className='w-32 h-32 object-contain' />
				<div className="grid place-items-center tracking-widest">
					<div>D & D Masonry</div>
					<div>Dependable and Durable</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
