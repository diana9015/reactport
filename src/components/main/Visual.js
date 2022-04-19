import React from 'react';

function Visual() {
	const path = process.env.PUBLIC_URL;
	return (
		<div className='visual'>
			<div className='inner'>
				<div className='bannerbox'>
					<div className='inner'>
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
					<div className='box2'></div>
					{/* <img src={`${path}/img/small1.jpg`} /> */}
				</div>
			</div>
		</div>
	);
}

export default Visual;
