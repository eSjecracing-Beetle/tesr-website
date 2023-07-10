import FooterHeartImage from '../images/footer-heart.png';

const Footer = () => {
	return (
		<div className='bg-secondaryBackground py-20'>
			<div className='container mx-auto px-10'>
				<div className='flex flex-col lg:flex-row justify-between gap-10 pb-20'>
					<div className='sm:w-3/6'>
						<div className='md:text-4xl text-3xl pb-4'  style={{ fontFamily: 'Audiowide'}}>Address</div>
						<div className='text-gray-200 text-xl'>
							St Joseph Engineering College, Vamanjoor, Mangalore, Karnataka,
							India - 575028
						</div>
					</div>
					<div className='sm:w-2/6'>
						<div className='md:text-4xl text-3xl pb-4'  style={{ fontFamily: 'Audiowide'}}>Contact</div>
						<div className='text-gray-200 text-xl'>
							<a
								href='mailto:teamesjecracing@gmail.com'
								className='text-gray-200 hover:text-greenColor'
							>
								teamesjecracing@sjec.a.in
							</a>
							<div className='flex gap-4 pt-4'>
								<a
									href='tel:+919480066979'
									className='text-gray-200 hover:text-greenColor'
								>
									+91-9486066979
								</a>
							</div>
						</div>
					</div>
					<div className='sm:w-1/3'>
						<div className='md:text-4xl text-3xl pb-4'  style={{ fontFamily: 'Audiowide'}}>Follow Us</div>
						<div className='text-gray-200 text-xl flex flex-col'>
							<a
								href='https://twitter.com/TEAMeSJECRACING?s=08'
								target='_blank'
								rel='noreferrer'
								className='text-gray-200 hover:text-greenColor'
							>
								Twitter
							</a>
							<a
								href='https://www.instagram.com/team_esjec_racing/'
								target='_blank'
								rel='noreferrer'
								className='text-gray-200 hover:text-greenColor'
							>
								Instagram
							</a>
							<a
								href='https://www.facebook.com/teamesjecracing/'
								target='_blank'
								rel='noreferrer'
								className='text-gray-200 hover:text-greenColor'
							>
								Facebook
							</a>
							<a
								href='https://www.linkedin.com/company/team-esjec-racing/?originalSubdomain=in'
								target='_blank'
								rel='noreferrer'
								className='text-gray-200 hover:text-greenColor'
							>
								LinkedIn
							</a>
						</div>
					</div>
				</div>

				<div className='flex items-center justify-center md:text-2xl'  style={{ fontFamily: 'Audiowide'}}> 
					{/* Made with{' '}
					<img
						src={FooterHeartImage}
						alt='Footer Heart'
						className='inline px-4 w-16'
					/>{' '}
					by{' '} */}
					Developed by{' '}
					<a
						href='https://gdscsjec.in'
						target='_blank'
						rel='noreferrer'
						className='hover:text-greenColor px-2'
					>
						GDSC SJEC
				</a>{' '}
				| © Team eSJEC Racing
				</div>
			</div>
		</div>
	);
};

export default Footer;
