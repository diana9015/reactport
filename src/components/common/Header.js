import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
	const active = {
		color: 'rgb(222, 137, 124)',
	};
	return (
		<header>
			<div className='webnav'>
				<div className='top_nav'>
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
				<div className='nav'>
					<h1>
						<NavLink exact to='/' activeStyle={active}>
							Cosmetic
						</NavLink>
					</h1>
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
							<NavLink to='/community' activeStyle={active}>
								Community
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
		</header>
	);
}

export default Header;
