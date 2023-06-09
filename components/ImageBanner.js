import Image from 'next/image';
import cornerwall from '../public/images/corner-wall.png';
import house from '../public/images/houseview.png';
import chimney from '../public/images/chimney2.png';

const ImageBanner = () => {
	const image = [house, cornerwall, chimney];

	return (
		<div className='grid grid-cols-3'>
			{image.map((img, index) => {
				return (
					<div key={index} className="">
						<Image
							src={img}
							className='h-[40vh] object-cover '
							alt=''
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ImageBanner;
