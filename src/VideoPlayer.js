import React from 'react';

const VideoPlayer = props => {
	return (
		props.selectedMovie && (
			<div className="video-player">
				<video
					controls
					autoPlay
					src={
						'http://ec2-52-198-63-55.ap-northeast-1.compute.amazonaws.com/api/video/' +
						props.selectedMovie
					}
					type='video/x-matroska; codecs="a_ac3, avc"'
				/>
			</div>
		)
	);
};

export default VideoPlayer;
