import { useState, useEffect } from 'react';
import LogoImage from '../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
	const location = useLocation();
	const [navbar, setNavbar] = useState(false);
	const [isHomePage, setIsHomePage] = useState(false);

	useEffect(() => {
		const path = location.pathname;
		if (path === '/') {
			setIsHomePage(true);
		} else {
			setIsHomePage(false);
		}
	}, [location.pathname]);

	return (
		<nav className='w-full bg-white shadow'>
			<div className='justify-between mx-auto lg:max-w-7xl md:items-center md:flex md:px-9'>
				<div>
					<div className='flex items-center justify-between py-3 md:py-5 md:block'>
						{!isHomePage && (
							<Link to='/'>
								<img
									src={LogoImage}
									alt='beetle'
									className='w-4/12 md:w-4/12'
								/>
							</Link>
						)}

						<div className='md:hidden'>
							<button
								className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
								onClick={() => setNavbar(!navbar)}
							>
								{navbar ? (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-6 h-6'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path
											fillRule='evenodd'
											d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
											clipRule='evenodd'
										/>
									</svg>
								) : (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-6 h-6'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
										strokeWidth={2}
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M4 6h16M4 12h16M4 18h16'
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>
				<div>
					<div
						className={`flex-1 justify-self-center  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
							navbar ? 'block' : 'hidden'
						}`}
					>
						<ul className='items-center justify-center mx-14 text-xl space-y-8 md:flex md:space-x-7 md:space-y-0 '>
							<li className='text-gray-600 hover:text-blue-600 hover:text-greenColor'>
								<Link to='/'>Home</Link>
							</li>
							<li className='text-gray-600 hover:text-blue-600 hover:text-greenColor'>
								<Link to='/teams'>Teams</Link>
							</li>
							<li className='text-gray-600 hover:text-blue-600 hover:text-greenColor'>
								<Link to='/gallery'>Gallery</Link>
							</li>
							<li className='text-gray-600 hover:text-blue-600 hover:text-greenColor'>
								<Link to='/sponsors'>Sponsors</Link>
							</li>
							<li className='text-gray-600 hover:text-blue-600 hover:text-greenColor'>
								<Link to='/achievements'>Achievements</Link>
							</li>
							<li className='text-gray-600 hover:text-blue-600 hover:text-greenColor'>
								<Link to='/contact-us'>Contact</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
