import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import Layout from '../common/Layout';
import Popup from '../common/Popup';

function Gallery() {
	const key = '89aae050d1d8c006bdb5bf866029199d';
	const method1 = 'flickr.interestingness.getList';
	const num = 20;
	const url = `https://www.flickr.com/services/rest/?method=${method1}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;

	const [items, setItems] = useState([]);
	const [index, setIndex] = useState(0);
	const [loading, setLoading] = useState(false);
	const pop = useRef(null);

	useEffect(() => {
		axios.get(url).then((json) => {
			console.log(json.data.photos.photo);
			setItems(json.data.photos.photo);
			setLoading(true);
		});
	}, []);

	return (
		<>
			<Layout name={'Gallery'}>
				<ul>
					{items.map((item, idx) => {
						return (
							<li
								key={idx}
								onClick={() => {
									setIndex(idx);
									pop.current.open();
								}}>
								<div className='inner'>
									<div className='pic'>
										<img
											src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
										/>
									</div>
									<h2>{item.title}</h2>
								</div>
							</li>
						);
					})}
				</ul>
			</Layout>

			<Popup ref={pop}>
				{loading && (
					<img
						src={`https://live.staticflickr.com/${items[index].server}/${items[index].id}_${items[index].secret}_b.jpg`}
					/>
				)}
				<span onClick={() => pop.current.close()}>close</span>
			</Popup>
		</>
	);
}

export default Gallery;
