import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

import { AiFillCaretDown } from 'react-icons/ai';
import imgBandA1 from '../public/images/before-after-1.png';
import imgbandA2 from '../public/images/before-after-2.png';
import imgbandA3 from '../public/images/before-after-3.png';
import imgbandA4 from '../public/images/before-after-4.png';

import imgbandA6 from '../public/images/before-after-6.png';
import restoration1 from '../public/images/restoration1.png';
import restoration2 from '../public/images/restoration2.png';
import chimney1 from '../public/images/chimney1.png';
import chimney2 from '../public/images/chimney2.png';
import chimney3 from '../public/images/chimney3.png';
import wall from '../public/images/corner-wall.png';
import wall2 from '../public/images/wall.png';

const BeforeAndAfters = () => {
	const images = [
		imgBandA1,
		imgbandA6,
		restoration1,
		imgbandA3,
		wall2,
		restoration2,
		imgbandA2,
		imgbandA4,
		chimney1,
		chimney3,
		chimney2,
		wall,
	];

	const [numImagesToShow, setNumImagesToShow] = useState(3);

	const handleLoadMore = () => {
		setNumImagesToShow((prevNum) => prevNum + 3);
	};

	return (
		<>
			<div className='grid md:grid-cols-2 xl:grid-cols-3 place-items-center max-w-7xl mx-auto gap-y-12 gap-x-4'>
				{images.slice(0, numImagesToShow).map((image, index) => (
					<motion.div
						key={index}
						className='grid place-items-center shadow-lg'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2.4 }}
					>
						<Image src={image} alt='' />
					</motion.div>
				))}
			</div>
			<div className='grid '>
				{numImagesToShow < images.length && (
					<div className='text-center '>
						<button className=' ' onClick={handleLoadMore}>
							<div className='scale-y-150 text-primary  font px-3 py-1 rounded text-xl lg:text-3xl grid place-items-center '>
								<span>View More</span>
                                <span>
                                    <AiFillCaretDown />
                                </span>
							</div>
						</button>
					</div>
				)}
			</div>
		</>
	);
};

export default BeforeAndAfters;
