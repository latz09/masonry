import Image from 'next/image';
import img1 from '../public/images/corner-wall.png';
import img2 from '../public/images/chimney2.png';
import img3 from '../public/images/chimney3.png';

const About = () => {
	

	return (
		<div className='max-w-4xl tracking-wider lg:leading-9  mx-auto lg:text-xl text-justify text-dark  grid '>
			<div className="px-4 text-center">
				We are all about bringing your{' '}
				<span className='font-bold text-primary'>
					{' '}
					walls, chimneys, and driveways{' '}
				</span>{' '}
				back to life, no matter what the elements throw at them. With safety as
				our <span className='font-bold text-primary'>top priority, </span> you
				can trust us to deliver top-quality masonry that is built to last.
			</div>
		</div>
	);
};

export default About;
