import  React from 'react';
import PropTypes from 'prop-types';
import  { Link } from 'react-router-dom';

class  Tab extends  React.Component {
	render () {
		console.log(this.props.tab.link);
		const  tab = this.props.tab;
		return (
			<Link className='nav-item' to={tab.link}>
				{tab.title}
			</Link>
		);
	}
}

Tab.propTypes= {
	tab : PropTypes.object
};

export  default  Tab;