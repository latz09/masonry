import { motion } from 'framer-motion';

const AllServices = [
	{
		service: 'Chimney Revivals',
		description:
			'We breathe new life into old chimneys! Our expert team offers comprehensive chimney restoration services, preserving your homes historic charm while ensuring safety and functionality.',
		icon: '1',
		image: '/images/chimney2.png',
	},
	{
		service: 'Structural and Decorative Walls',
		description: 'Uncover your walls hidden charm with our renewal approach. Specializing in restoration, we rejuvenate your masonry, restoring its strength and beauty for enduring appeal to your property',
		image: '/images/wall.png',
		icon: '2',
	},
	{
		service: 'Driveway Craftsmanship',
		description: 'Elevate your homes curb appeal with our expert driveway refurbishment services. We skillfully restore worn-out driveways, blending classic charm with the resilience needed for everyday use.',
		image: '/images/houseview.png',
		icon: '3',
	},
	{
		service: 'Brickwork Rehabilitation',
		description:
			'Aging or damaged masonry can compromise the safety and look of your property. Our dedicated team provides top-notch brickwork repair and rehabilitation, restoring both function and charm to your masonry structures.',
		image: '/images/corner-wall.png',
		icon: '4',
	},
];

const Services = () => {
	return (
		<div className="grid place-items-center gap-16 bg-gradient-to-t from-light via-[#F0FDFF] to-light">
			<div className="text-4xl scale-y-150 tracking-wider">Services</div>
			<div className='grid lg:grid-cols-2 place-items-center gap-16 lg:gap-8 w-full lg:w-[80vw] mb-48  mx-auto'>
				{AllServices.map((service, index) => {
					return (
						<motion.div
							initial={{ opacity: 0, y : 100 }}
							whileInView={{ opacity: 1, y : 0 }}
							transition={{ duration: .4 }}
							key={index}
							className='h-[50vh] w-full  sm:w-4/5 lg:w-3/4 shadow-lg hover:scale-95 transition duration-700 '
						>
							<Service
								service={service.service}
								description={service.description}
								image={service.image}
								i={service.icon}
							/>
							{/* <div>{service.description}</div> */}
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};

export default Services;

const Service = ({ service, description, i, image }) => {
	return (
		<div className=' relative  overflow-hidden h-full w-full'>
			<img
				src={image}
				alt={service}
				className='absolute h-full w-full object-cover '
			/>
			<div className='absolute inset-0 bg-gradient-to-t from-dark/0  via-dark/50 to-dark/0 z-10  grid place-items-center'>
				<h3 className='font-bold text-2xl tracking-wider lg:text-3xl scale-y-150 text-light '>
					{service}
				</h3>
				{/* <div className='px-4 mb-8 bg-gradient-to-t from-dark via-dark to-dark/0 text-light grid gap-2 text-lg  text-justify  '>
					<p className="scale-y-125">{description}</p>
				</div> */}
			</div>
		</div>
	);
};
