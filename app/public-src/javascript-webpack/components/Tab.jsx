import  React from 'react';
import PropTypes from 'prop-types';
import  { Link } from 'react-router-dom';

class  Tab extends  React.Component {
	render () {
		const  tab = this.props.tab;
		const isActive = window.location.pathname === tab.link;
		return (
			<Link className='nav-item' to={tab.link} style={{ textDecoration:'none'}}>
				<div className={isActive ? 'nav-link active' : 'nav-link' }>
					{tab.title}
				</div>
			</Link>
		);
	}
}

Tab.propTypes= {
	tab : PropTypes.object
};

export  default  Tab;