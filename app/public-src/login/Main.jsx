import React from 'react';
import {connect} from 'react-redux'

class Main extends  React.Component {


	constructor (props) {
		super(props);
	}

	render() {
		console.log('q= '+this.props.q);
		return (
			<div>Hello</div>
		);
	}
}

export  default connect(
	(state) => {
		return {
			q: state
		}
	}
)(Main);