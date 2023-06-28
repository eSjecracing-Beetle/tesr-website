import TeamSection from '../components/TeamSection';
import { Beetle1, Beetle2, Beetle3, Beetle4, Beetle5 } from '../data/TeamData';

const Teams = () => {
	return (
		<div className='container mx-auto px-10 mb-20'>
			<h1 className='text-6xl font-medium text-center py-10'  style={{ fontFamily: 'Audiowide'}}>Teams</h1>
			<TeamSection teamName={'Beetle 5.0'} teamMembers={Beetle5} />
			<TeamSection teamName={'Beetle 4.0'} teamMembers={Beetle4} />
			<TeamSection teamName={'Beetle 3.0'} teamMembers={Beetle3} />
			<TeamSection teamName={'Beetle 2.0'} teamMembers={Beetle2} />
			<TeamSection teamName={'Beetle 1.0'} teamMembers={Beetle1} />
		</div>
	);
};

export default Teams;
