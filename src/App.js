import React from 'react';
import IcoMoon from 'react-icomoon';
import ReactPlayer from 'react-player';
import './App.css';
//import backgroundvid from './tokyotrain.webm';

function App() {
	return (
		<div className="App">
			<div className="video-background">
				<div className="video-foreground">
					<Player/>
				</div>
			</div>
			<h1>teddyrobz</h1>
			<footer>
				<a className="ig" href="https://instagram.com/teddyrobz" title="TeddyRobz on Instagram"
				   target="_blank">
					<IcoMoon icon="instagram"/>
				</a>
				<a className="yt" href="https://www.youtube.com/channel/UCzTojQgbHiuAjaub3ePvNKw" title="TeddyRobz on YouTube" target="_blank">
					<IcoMoon icon="youtube"/>
				</a>
			</footer>
		</div>
	);
}

class Player extends React.Component {
	videoUrl = "htttps://www.youtube.com/watch?v=UExPgSxXtOc";
	/*
	const options = {
		playerVars: {
			autoplay: 1,
			controls: 0,
			disablekb: 1,
			fs: 0,
			iv_load_policy: 3,
			loop: 1,
			modestbranding: 1
		}
	};
	*/

	/*
	function replay(event) {
		function onPlayerStateChange(event) {
			if (event.data == YT.PlayerState.ENDED) {
				player.seekTo(0);
				player.playVideo();
			}
		}
	}
	*/

	render () {
		return (
			<div className='player-wrapper'>
				<ReactPlayer
					ref={player => { this.player = player }}
					url={this.videoUrl}
					className='react-player'
					playing
					muted
					width='100%'
					height='100%'
					progressInterval={100}
					onProgress={progress => {
						if (progress.played >= 0.99) {
							this.player.seekTo(0)
						}
					}}
				/>
			</div>
		)
	}
}

export default App;
