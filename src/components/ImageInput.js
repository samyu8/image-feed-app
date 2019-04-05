import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions';

class ImageInput extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			url: ''
		}

		this.inputChange = this.inputChange.bind(this);
		this.addPost = this.addPost.bind(this);

	}

	inputChange (key, value) {
		this.setState({[key]: value});
	}

	addPost () {
		if (!this.state.title || !this.state.url) {
			return;
		}

		this.props.addPost(this.state.url, this.state.title);
		this.setState({
			title: '',
			url: ''
		});
	}

	render () {
		return (
			<div className="input_container">
				<input type="url"
					className="input-box"
					pattern="https://.*"
					placeHolder="Image Url"
					value={this.state.url} 
					onChange={e => this.inputChange('url', e.target.value)}
				/>
				<input type="text"
					className="input-box"
					placeHolder="Image Title"
					value={this.state.title} 
					onChange={e => this.inputChange('title', e.target.value)}
				/>
				<button className="btn" onClick={this.addPost}>Add Post</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return state;	
}

export default connect(mapStateToProps, {addPost})(ImageInput);
