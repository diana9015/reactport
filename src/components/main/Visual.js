import React from 'react';

function Visual() {
	const path = process.env.PUBLIC_URL;
	return (
		<div className='visual'>
			<div className='inner'>
				<div className='bannerbox'>
					<div className='wrap'>
						<div className='text'>
							<h2>ARCHITECTURE / INTERIOR</h2>
							<h3>
								WE ARE BULDING
								<br />
								EXPERTS
							</h3>
						</div>
					</div>
				</div>
				<div className='dis'>
					<div className='box1'>
						<div className='pic1'>
							<img src={`${path}/img/small1.jpg`} />
						</div>
						<div className='pic2'>
							<img src={`${path}/img/small2.jpg`} />
						</div>
					</div>
					<div className='box2'>
						<h2>WHO WE ARE</h2>
						<h3>
							ARCHITECTURE
							<br />
							STUDIO
						</h3>
						<h2>
							An award-winning design and developement <br />
							team that is proud of work
						</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
							consequatur eaque reprehenderit assumenda mollitia eveniet
							aliquam, necessitatibus vero illo commodi fugit officiis nostrum
							rerum, beatae, exercitationem at. Nihil voluptatum optio dolores
							non vero sed iste dolor molestiae alias nostrum recusandae
							voluptatem unde facilis eum officiis iure sit, illo sequi
							mollitia?
						</p>
						<button>READ MORE</button>
					</div>
				</div>
				<div
					className='
				serv'>
					<div className='wrap'>
						<h2>WHAT WE DO</h2>
						<h3>
							PROVIDE THE BEST
							<br />
							SERVICE
						</h3>
						<article></article>
						<article></article>
						<article></article>
						<article></article>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Visual;
