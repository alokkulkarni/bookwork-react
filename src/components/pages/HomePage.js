import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div>
		    	    <h1>Home Page</h1>
		      		<Link to="/Login">Login</Link>
		  	</div>
            
        );
    }
}

export default HomePage;
