import axios from 'axios';
import { useEffect, useState } from 'react';
import Layout from '../common/Layout';
import abc from './db/Data.json';

console.log(abc);
console.log(abc.data);

function Member() {
	const path = process.env.PUBLIC_URL;
	const [datas, setDatas] = useState(abc.data);

	return (
		<Layout name='Members'>
			<div className='member'>
				<div className='text'>
					<div className='box'>
						<h2>Our team</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
							porro pariatur ab rem, placeat, ex exercitationem incidunt aliquam
							odio eveniet eius odit sunt est saepe id atque optio recusandae
							corrupti.
						</p>
						<br />
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non amet
							placeat sequi voluptatem inventore ipsa sapiente dolorum commodi
							vitae libero!
						</p>
					</div>
				</div>
				<ul className='memberList'>
					{datas.map((data, idx) => {
						return (
							<li key={idx}>
								<div className='wrap'>
									<div className='pic'>
										<img src={`${path}/img/${data.pic}`} />
									</div>
									<div className='pro'>
										<h3>{data.name}</h3>
										<p>{data.Department}</p>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</Layout>
	);
}

export default Member;
