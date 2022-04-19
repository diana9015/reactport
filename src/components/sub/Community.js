import { useState, useEffect, useRef } from 'react';
import Layout from '../common/Layout';

function Community() {
	const input = useRef(null);
	const textarea = useRef(null);

	const dummyPosts = [
		{ title: 'Hello2', content: 'Here comes description in detail.' },
		{ title: 'Hello1', content: 'Here comes description in detail.' },
	];
	const [posts, setPosts] = useState(dummyPosts);

	const resetPost = () => {
		input.current.value = '';
		textarea.current.value = '';
	};

	//post추가 함수
	const createPost = () => {
		setPosts([
			{ title: input.current.value, content: textarea.current.value },
			...posts,
		]);
		resetPost();
	};

	//post삭제 함수
	const deletePost = (index) => {
		console.log('삭제할 포스트 순번', index);

		setPosts(posts.filter((post, idx) => idx !== index));
	};

	return (
		<Layout name='Community'>
			<div className='commu'>
				<div className='box'>
					<div className='inputBox'>
						<input type='text' placeholder='제목을 입력하세요' ref={input} />
						<br />
						<textarea
							cols='30'
							rows='10'
							placeholder='본문을 입력하세요.'
							ref={textarea}></textarea>

						<button>cancel</button>
						<button
							onClick={() => {
								setPosts([
									{
										title: input.current.value,
										content: textarea.current.value,
									},
									...posts,
								]);
							}}>
							create
						</button>
					</div>

					<div className='showBox'>
						{posts.map((post, idx) => {
							return (
								<article key={idx}>
									<h2>{post.title}</h2>
									<p>{post.content}</p>

									<div className='btns'>
										{/* 순서1- 삭제버튼 클릭시 삭제포스트의 순서값 전달 */}
										<button onClick={() => deletePost(idx)}>delete</button>
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Community;
