import AchievementElement from '../components/AchievementElement';
import { achievements } from '../data/AchievementData';

const Achievements = () => {
	return (
		<section>
			<div className='container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24'>
				<div className='flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8'>
					<p className='ml-2 text-greenColor uppercase tracking-loose'  style={{ fontFamily: 'Audiowide'}}>
						Achievements
					</p>
					<p className='text-3xl md:text-4xl mb-4'  style={{ fontFamily: 'Audiowide'}}>
						Achievements of Team eSJEC Racing
					</p>
					<p className='text-sm md:text-base mb-8'>
					As a team, we've achieved a great deal through our involvement in a wide range of competitions.
					Here are some of our proud moments!
					</p>
				</div>

				<div className='ml-0 md:ml-12 lg:w-2/3 sticky'>
					<div className='container mx-auto w-full h-full'>
						<div className='relative wrap overflow-hidden p-10 h-full'>
							<div
								className='border-2-2 absolute h-full border'
								style={{
									right: '50%',
									width: '1px',
									background: '#00D400',
									border: '2px solid #00D400',
									borderRadius: '1%',
								}}
							></div>

							<div
								className='border-2-2 absolute h-full border'
								style={{
									left: '50%',
									width: '1px',
									background: '#00D400',
									border: '2px solid #00D400',
									borderRadius: '1%',
								}}
							></div>
							{achievements.map((achievement, achievement_id) => (
								<AchievementElement {...achievement} key={achievement_id} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Achievements;
