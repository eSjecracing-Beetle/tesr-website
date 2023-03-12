import Section4Image from '../../images/home-section4.jpg';

const Section4 = () => {
	return (
		<div className='container mx-auto px-10  flex flex-col md:flex-row justify-between items-center py-10 gap-20 mb-20'>
			<div className='md:w-3/5 sm:w-1/2'>
				<div className='md:text-5xl text-4xl pb-8'  style={{ fontFamily: 'Audiowide'}}>Promote E - Mobility</div>
				<div className='text-gray-200 text-lg'>
				As the world continues to shift towards a greener, more eco-friendly electrical approach,
				our team is taking steps to contribute towards this change by  participating in various competitions that will allow us
				to gain the knowledge in the development of an electric All-Terrain Vehicle (ATV). 
				By participating in the competitions, we hope to contribute to the betterment of our planet by understanding the 
				utilization of sustainable resources.Tesr is committed to promoting a greener future and we're excited to be part of this important movement!
				</div>
			</div>
			<img src={Section4Image} alt='tesr' className='md:w-2/5 sm:w-1/2' />
		</div>
	);
};

export default Section4;
