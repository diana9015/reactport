import axios from 'axios';
import { useEffect, useState } from 'react';
import Layout from '../common/Layout';
import Popup from '../common/Popup';

function Youtube() {
	const [open, setOpen] = useState(false);
	//팝업의 생성유무를 관리하는  state생성

	const [index, setIndex] = useState(0);

	const [items, setItems] = useState([]);

	const key = 'AIzaSyAe6OhSffw-vmxuH8EI06jlMQPu0gCV7xs';
	const num = 10;
	const playListId = 'PLSGs9D6sndZf2JAmaS-YSDJj_e9idSilg';
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxResults=${num}`;
	useEffect(() => {
		axios.get(url).then((json) => {
			console.log(json.data.items);
			setItems(json.data.items);
		});
	}, []);

	return (
		<Layout name='Youtube'>
			<div className='youtubeList'>
				{items.map((item, idx) => {
					const desc = item.snippet.description;
					return (
						<article
							key={idx}
							className='card'
							onClick={() => {
								setOpen(true);
								setIndex(idx);
							}}>
							<div className='wrap'>
								<img src={item.snippet.thumbnails.medium.url} />
								<h2>{item.snippet.title}</h2>
								<p>{desc.length > 150 ? desc.substr(0, 150) + '...' : desc}</p>
								<span>{item.snippet.publishedAt}</span>
							</div>
						</article>
					);
				})}
			</div>
			{open ? (
				<Popup setOpen={setOpen}>
					<iframe
						src={
							'https://www.youtube.com/embed/' +
							items[index].snippet.resourceId.videoId
						}
						frameBorder='0'></iframe>
				</Popup>
			) : null}
		</Layout>
	);
}

export default Youtube;
