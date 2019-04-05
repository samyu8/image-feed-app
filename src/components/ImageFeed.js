import React from 'react';
import { connect } from 'react-redux';

const ImageFeed = (props) => {
	return (
		<div>
			{
				props.feed.map(image => {
					return <div key={`img-${image.id}`} className="image-container">
						<div className="title">{image.title}</div>
						<img src={image.url} alt={image.title}/>
					</div>
				})
			}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {feed: state.imagesFeed}		
}

export default connect(mapStateToProps)(ImageFeed)