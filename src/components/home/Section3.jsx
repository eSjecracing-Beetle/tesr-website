import Section3Image from '../../images/home-section3.png';

const Section3 = () => {
	return (
		<div className='container mx-auto px-10 flex flex-col md:flex-row justify-between items-center py-10 gap-10 mb-20'>
			<img src={Section3Image} alt='tesr' className='md:w-2/5 sm:w-1/2' />
			<div className='md:w-3/5 sm:w-1/2'>
				<div className='md:text-5xl text-4xl pb-8'  style={{ fontFamily: 'Audiowide'}}>
					Electric All Terrain Vehicle
				</div>
				<div className='text-gray-200 text-lg'>
				BAJA SAE INDIA is an international student-level competition that challenges teams to design and build a rugged,
				single-seat atv. The goal for each team  is to create a prototype that can pass various tests that also includes
				an endurance race. As part of the SAE INDIA , we accepted this challenge and decided to build an 
				Electric All-Terrain Vehicle by intergrating all the individual skills and knowlege into work.
				</div>
			</div>
		</div>
	);
};

export default Section3;
