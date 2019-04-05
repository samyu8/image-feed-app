import React from 'react';
import ImageInput from './ImageInput';
import ImageFeed from './ImageFeed';
import './App.scss';

const App = (props) => {
	return (
		<div className="app-container">
			<ImageInput></ImageInput>
			<ImageFeed></ImageFeed>
		</div>
	)
}

export default App;