import React from 'react';
import GalleryElement from '../components/gallery/GalleryElement';
import { gallery_exports } from '../data/GalleryData';

const Gallery = () => {
	return (
		<div className='container mx-auto px-10 mb-20'>
			<h1 className='text-6xl font-medium text-center pb-10 py-10' style={{ fontFamily: 'Audiowide'}}>Gallery</h1>
			<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
				{gallery_exports?.map((gallery_img, id) => (
					<GalleryElement key={id} imageUrl={gallery_img} />
				))}
			</div>
		</div>
	);
};

export default Gallery;
