import Section2Image from '../../images/group-pic.jpeg';

const Section2 = () => {
	return (
		<div className='container mx-auto px-10 flex flex-col md:flex-row justify-between items-center py-10 gap-20 mb-20'>
			<div className='md:w-3/4 sm:w-1/2'>
				<div className='md:text-5xl text-4xl pb-8'  style={{ fontFamily: 'Audiowide'}}>About Us</div>
				<div className='text-gray-200 text-lg'>
				Team eSJEC Racing is a group of 27 students from St. Joseph Engineering College which was
				formed in March 2019 under the SAEINDIA SJEC Collegiate Club.The team comprises students from the departments 
				of Mechanical Engineering, Electrical & Electronics Engineering,Electronics & Communications Engineering, and 
				Computer Science Engineering.We participate in student-level competitions where teams from across India compete
				against each other in designing an off-road,all-terrain single-seater vehicle. We are passionate about pushing 
				the limits of what's possible and overcoming the unique challenges posed by these competitions. We strive to design
				and build a vehicle that is both innovative and efficient, and we are proud to represent our college in this exciting competition.
				</div>
			</div>
			<img src={Section2Image} alt='tesr' className='md:w-1/2 sm:w-5/12' />
		</div>
	);
};

export default Section2;
