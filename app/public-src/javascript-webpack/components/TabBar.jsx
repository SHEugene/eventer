import  React from 'react';
import PropTypes from 'prop-types';
import  _ from  'lodash';
import  Tab from './Tab';


class TabBar extends  React.Component{
	render () {
		const links = this.props.links;
		return (
			<div className='nav nav-tabs'>
				{_.map(links, (link)=>(<Tab  tab={link} key={link.title}/>))}
			</div>
		);
	}
}

TabBar.propTypes = {
	links:  PropTypes.array,
};

export  default TabBar;




