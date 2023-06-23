import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import React, { useRef } from 'react';
import '../components/contactUs/contactUs.css';
export default function ContactUs() {
	const credentials = useRef({
		name: '',
		number: '',
		email: '',
		cv: '',
		linkedin: '',
		why: '',
	});

	const [loading, setLoading] = React.useState(false);

	const uploadMe = async(data) => {
		setLoading(true);
		await axios
			.post(`${process.env.REACT_APP_SHEET_API}`, data)
			.then(() => {
				toast.success('Your application has been submitted successfully!'); 
				setLoading(false);
			})
			.catch((err) => {
				console.error(err); 
				toast.error('Something went wrong. Please try again later');
			});
	};

	return (
		<>
			<div>
				<Toaster />
			</div>
			<h2 className='block text-6xl p-7 text-center text-white py-10'  style={{ fontFamily: 'Audiowide'}}>
				Get in touch with us
			</h2>

			<div id='contact-us' className='contact-us-container'>
				<p className='p-0 text-white text-3xl'  style={{ fontFamily: 'Audiowide'}}>Submit your application </p>
				<input
					className='contact-us-textbox'
					required
					type='text'
					placeholder='Your Name'
					onChange={(e) => {
						credentials.current.name = e.target.value;
					}}
				/>
				<input
					className='contact-us-textbox'
					required
					type='tel'
					placeholder='Your Number'
					onChange={(e) => {
						credentials.current.number = e.target.value;
					}}
				/>
				<input
					className='contact-us-textbox'
					required
					type='email'
					placeholder='Your email'
					onChange={(e) => {
						credentials.current.email = e.target.value;
					}}
				/>
				<input
					className='contact-us-textbox'
					required
					type='text'
					placeholder='CV/Resume/Portfolio URL (optional)'
					onChange={(e) => {
						credentials.current.cv = e.target.value;
					}}
				/>
				<input
					className='contact-us-textbox'
					required
					type='text'
					placeholder='LinkedIn Profile URL (optional)'
					onChange={(e) => {
						credentials.current.linkedin = e.target.value;
					}}
				/>
				<textarea
					className='contact-us-textbox resize-none'
					rows={5}
					required
					type='text'
					placeholder='Why do you want to join us?'
					onChange={(e) => {
						credentials.current.why = e.target.value;
					}}
				/>

				{loading ? (
				<input
					type='button'
					value={'loading...'}
					id='submitbtn'
					className='mx-auto inline-block px-6 py-2.5 bg-primarybackground text-primaryText font-medium text-xl b cursor-pointer leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out'
					style={{ fontFamily: 'Audiowide'}}
					onClick={() => uploadMe(credentials.current)}
				/>) :
				<input
					type='button'
					value={'Submit!'}
					id='submitbtn'
					className='mx-auto inline-block px-6 py-2.5 bg-greenColor text-primaryText font-medium text-xl b cursor-pointer leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out'
					style={{ fontFamily: 'Audiowide'}}
					onClick={() => uploadMe(credentials.current)}
				/>}
			</div>
		</>
	);
}
