import axios from 'axios';
import { useEffect, useState } from 'react';
import abc from './db/Data.json';

console.log(abc);
console.log(abc.data);

function Member() {
	const path = process.env.PUBLIC_URL;
	const [datas, setDatas] = useState(abc.data);

	return (
		<section className='member'>
			<figure>
				<div className='inner'>
					<h1>Member</h1>
				</div>
				<ul className='memberList'>
					{datas.map((data, idx) => {
						return (
							<li key={idx}>
								<div class='wrap'>
									<img src={`${path}/img/${data.pic}`} />
									<h2>{data.name}</h2>
									<p>{data.Department}</p>
								</div>
							</li>
						);
					})}
				</ul>
			</figure>
		</section>
	);
}

export default Member;
