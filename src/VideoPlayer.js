import React from 'react';

const VideoPlayer = props => {
	return (
		props.selectedMovie && (
			<div className="video-player">
				<video
					controls
					src={
						'http://localhost:3000/api/video/' + props.selectedMovie
					}
				>
					Sorry, your browser doesn't support embedded videos, but
					don't worry, you can{' '}
					<a href="https://archive.org/details/BigBuckBunny_124">
						download it
					</a>
					and watch it with your favorite video player!
				</video>
			</div>
		)
	);
};

export default VideoPlayer;
