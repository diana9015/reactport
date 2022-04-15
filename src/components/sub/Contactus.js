import React, { useRef, useEffect, useState } from 'react';

function Contactus() {
	const container = useRef(null);
	const { kakao } = window;
	const [map, setMap] = useState(null);

	console.log(map);

	useEffect(() => {
		const options = {
			center: new kakao.maps.LatLng(37.512742, 127.06081),
			level: 3,
		};

		const mapInfo = new kakao.maps.Map(container.current, options);
		setMap(mapInfo);

		//마커 위치 인스턴스 생성
		const markerPosition = new kakao.maps.LatLng(37.512742, 127.06081);

		// 마커가 지도 위에 표시되도록 설정합니다
	}, []);

	return (
		<div className='map' style={{ width: '500px', height: '500px' }}></div>
	);
}

export default Contactus;
