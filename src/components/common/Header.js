import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
	const active = {
		color: 'white',
	};
	return (
		<header>
			<div className='wrap'>
				<h1>
					<NavLink exact to='/' activeStyle={active}>
						Variamain.
					</NavLink>
				</h1>
				<FontAwesomeIcon icon={faBars} className='bars' />

				<div className='nav'>
					<div className='topnav'>
						<ul>
							<li>
								<NavLink to='/aboutus' activeStyle={active}>
									Aboutus
								</NavLink>
							</li>
							<li>
								<NavLink to='/member' activeStyle={active}>
									Member
								</NavLink>
							</li>
							<li>
								<NavLink to='/join' activeStyle={active}>
									Join
								</NavLink>
							</li>
						</ul>
					</div>
					<div className='bottomnav'>
						<ul>
							<li>
								<NavLink to='/gallery' activeStyle={active}>
									Gallery
								</NavLink>
							</li>
							<li>
								<NavLink to='/youtube' activeStyle={active}>
									Youtube
								</NavLink>
							</li>
							<li>
								<NavLink to='/news' activeStyle={active}>
									News
								</NavLink>
							</li>
							<li>
								<NavLink to='/contactus' activeStyle={active}>
									Contactus
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
