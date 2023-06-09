import { useState } from 'react';
import { motion } from 'framer-motion';

import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from 'react-icons/bs';

const reviews = [
	{
		Author: 'Michele Brusegard',
		Text: 'Dylan did a fantastic job on repairing and tuck pointing the brick apron around my homes deck along with a few spots on the home for a very fair and reasonable price.  My spouse and I couldn not be happier with the work and it was a pleasure to work with Dylan on this project. I would not hesitate to use D&D Masonry again nor hesitate about recommending him to others.',
	},
	{
		Author: 'Jordan M',
		Text: 'Dylan came out to rebuild our chimney from the roofline up. His quote came in lower than all others and I was very pleased with Dylans communication, speed of work, and customer service. He worked with us to find the bricks we wanted, ensured everything was properly sealed up during the process, and walked me through everything he was doing. I would suggest Dylan (and D&D) for anyones masonry needs!',
	},
	{
		Author: 'Trevor D',
		Text: 'I needed exterior brick work done on my garage and Dylan perfectly matched the original bricks and mortar mix. Dylan is very professional and clean up was immaculate. I would hire nobody else except Dylan !!',
	},
	{
		Author: 'Karen E',
		Text: 'My husband and I are very particular, and Dylan completely exceeded our expectations!   Not only is he professional, responsive, honest, AND reasonably priced, he is a true artisan that takes extreme pride in his work.  The repairs he made on our brick house are impeccable PLUS there was not one speck of dust remaining when he was done.  Easiest 5 stars I’ve ever given to a contractor.',
	},
	{
		Author: 'Rober A',
		Text: 'You really couldn not ask for anything better. Dylan did high quality, timely work for a great price - was excellent with communication, billing, you name it. We will use again if we ever have masonry needs and recommend his services to everyone we know.',
	},
];
const Reviews = () => {
	// Keep track of the current review
	const [currentIndex, setCurrentIndex] = useState(0);

	// Function to go to the previous review
	const prevReview = () => {
		setCurrentIndex((oldIndex) => {
			let newIndex = oldIndex - 1;
			if (newIndex < 0) newIndex = reviews.length - 1; // loop back to the last review if we're at the start
			return newIndex;
		});
	};

	// Function to go to the next review
	const nextReview = () => {
		setCurrentIndex((oldIndex) => {
			let newIndex = oldIndex + 1;
			if (newIndex === reviews.length) newIndex = 0; // loop back to the first review if we're at the end
			return newIndex;
		});
	};

	return (
		<div className="grid gap-8">
            <div className='text-xl text-center lg:text-4xl scale-y-150 text-primary'>
				Customer Satisfaction
			</div>
			<div className='flex justify-between w-3/4 mx-auto  text-4xl text-secondary'>
				<button onClick={prevReview}>
					<BsFillArrowLeftCircleFill />
				</button>
				<button onClick={nextReview}>
					<BsFillArrowRightCircleFill />
				</button>
			</div>
			
			<div className='    max-w-3xl mx-auto '>
				<div className='px-2  mx-auto griap-4 place-items-center flex flex-col justify-between h-[70vh] lg:h-[50vh] '>
					<motion.div
						className='flex flex-col gap-4 font-oswald lg:text-lg tracking-wider h-full  py-8 px-2 '
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1.1 }}
						key={currentIndex}
					>
						<h2 className='font-bold  text-dark/90 text-lg lg:text-xl scale-y-150'>
							{reviews[currentIndex].Author}
						</h2>
						<p className='self-center text-justify  text-dark/70 fon leading-7'>
							{reviews[currentIndex].Text}
						</p>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Reviews;
