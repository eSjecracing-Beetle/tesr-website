import TeamMember from './TeamMember';

const TeamSection = ({ teamName, teamMembers }) => {
	return (
		<section className='py-10'>
			<h2 className='text-5xl font-normal ml-6 mt-8'  style={{ fontFamily: 'Audiowide'}}>{teamName}</h2>
			<div className=' flex flex-col items-center justify-center'>
				<TeamMember
					name={teamMembers['captain'].name}
					imagePath={teamMembers['captain'].imagePath}
					designation={teamMembers['captain'].designation}
				/>
				<TeamMember
					name={teamMembers['vice captain'].name}
					imagePath={teamMembers['vice captain'].imagePath}
					designation={teamMembers['vice captain'].designation}
				/>
				<TeamMember
					name={teamMembers['manager'].name}
					imagePath={teamMembers['manager'].imagePath}
					designation={teamMembers['manager'].designation}
				/>
			</div>

			{
				// for every team
				Object.keys(teamMembers).map((domain, domain_id) => {
					return (
						domain !== 'captain' && (
							<div
								className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 mt-20'
								key={domain_id}
							>
								<div  style={{ fontFamily: 'Audiowide'}}>
									<h3 className='text-3xl font-light ml-6'>{domain}</h3>
								</div>
								<div className='grid grid-cols-4 min-[320px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 col-span-2  sm:col-span-2 md:col-span-2 min-[320px]:mt-10'>
									{teamMembers[domain].map((member, member_id) => {
										// for each domain in team
										return (
											<div key={member_id}>
												<TeamMember
													name={member.name}
													imagePath={member.imagePath}
													designation={member.designation}
													specialStyle={member.specialStyle}
													specialStyle2={member.specialStyle2}
												/>

											</div>
										);
										
									})}
								</div>
							</div>
						)
					)
						return (
							domain !== ' vice captain' && (
								<div
									className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 mt-20'
									key={domain_id}
								>
									<div  style={{ fontFamily: 'Audiowide'}}>
										<h3 className='text-3xl font-light ml-6'>{domain}</h3>
									</div>
									<div className='grid grid-cols-4 min-[320px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 col-span-2  sm:col-span-2 md:col-span-2 min-[320px]:mt-10'>
										{teamMembers[domain].map((member, member_id) => {
											// for each domain in team
											return (
												<div key={member_id}>
													<TeamMember
														name={member.name}
														imagePath={member.imagePath}
														designation={member.designation}
														specialStyle={member.specialStyle}
														specialStyle2={member.specialStyle2}
													/>
	
												</div>
											);
											
										})}
									</div>
								</div>
							)
					);
					return (
						domain !== 'm anager' && (
							<div
								className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 mt-20'
								key={domain_id}
							>
								<div  style={{ fontFamily: 'Audiowide'}}>
									<h3 className='text-3xl font-light ml-6'>{domain}</h3>
								</div>
								<div className='grid grid-cols-4 min-[320px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 col-span-2  sm:col-span-2 md:col-span-2 min-[320px]:mt-10'>
									{teamMembers[domain].map((member, member_id) => {
										// for each domain in team
										return (
											<div key={member_id}>
												<TeamMember
													name={member.name}
													imagePath={member.imagePath}
													designation={member.designation}
													specialStyle={member.specialStyle}
													specialStyle2={member.specialStyle2}
												/>

											</div>
										);
										
									})}
								</div>
							</div>
						)
				);
				})
			}
		</section>
	);
};

export default TeamSection;
