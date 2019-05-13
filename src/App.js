import React, { Component } from 'react';
import './App.css';
import VideoPlayer from './VideoPlayer';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedMovie: '',
		};
	}
	click = selectedMovie => {
		this.setState({ selectedMovie });
	};
	render() {
		return (
			<div className="movies">
				<div className="movies-list">
					<button onClick={() => this.click('got.mp4')} type="button">
						got
					</button>
					<button
						onClick={() => this.click('andhadhun.mkv')}
						type="button"
					>
						sjka
					</button>
				</div>
				<VideoPlayer selectedMovie={this.state.selectedMovie} />
			</div>
		);
	}
}

export default App;
