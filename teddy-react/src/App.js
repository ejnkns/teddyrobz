import React from 'react';
import YouTube from 'react-youtube';
import './App.css';
//import backgroundvid from './tokyotrain.webm';

function App() {
	const options = {
		height: '390',
		width: '640',
		playerVars: {
			autoplay: 1,
			controls: 0,
			disablekb: 1,
			fs: 0,
			iv_load_policy: 3,
			loop: 1,
			modestbranding: 1,
		}
	};

	return (
		<div className="App">
			<YouTube
				videoId="UExPgSxXtOc"
				opts={options}
			/>
			<p>
				teddyrobz
			</p>
		</div>
	);
}

export default App;
