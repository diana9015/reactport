import axios from 'axios';
import { useEffect, useState } from 'react';
import Layout from '../common/Layout';
import abc from './db/Data.json';

function Member() {
	const path = process.env.PUBLIC_URL;
	const [datas, setDatas] = useState(abc.data);

	return (
		<Layout name='Members'>
			<div className='box'>ef</div>
			<ul className='memberList'>
				{datas.map((data, idx) => {
					return (
						<li key={idx}>
							<div className='wrap'>
								<div className='pic'>
									<img src={`${path}/img/${data.pic}`} />
								</div>
								<div className='pro'>
									<h2>{data.name}</h2>
									<p>{data.Department}</p>
								</div>
								<div className='say'>
									<p>{data.says}</p>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</Layout>
	);
}

export default Member;
