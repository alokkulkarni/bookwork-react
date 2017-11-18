import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Form, Button, Message } from "semantic-ui-react";
import Validator from 'validator';
import InlineErrors from '../messages/InlineErrors';

class LoginForm extends Component {

    state = {
    	data: {
    		email: '',
    		password: '',
    	},
    	loading: false,
    	errors: {},
    }

    constructor(props) {
        super(props);
    }

    onSubmit = () => {
    	console.log(this.state.data.email);
    	const errors = this.validate(this.state.data);
    	this.setState({
    	  errors: errors,
    	});

    	if(Object.keys(errors).length === 0) {
    		this.props.submit(this.state.data);
    	}
    }

    validate = (data) => {
    	const errors = {};
    	if (!Validator.isEmail(data.email)) errors.email = "Invalid Email";
    	if (!data.password) errors.password = "can't be blank";
    	return errors;
    }

    onChange = e => this.setState({data: {...this.state.data, [e.target.name]: e.target.value}})

    render() {
    	const {data, loading, errors } = this.state;

        return (
            <Form className="ui form" onSubmit={this.onSubmit} loading={loading}>
            	<Form.Field error={!!errors.email}>
            		<label htmlFor="email">Email</label>
          			<input type="text" id="email" name="email" placeholder="example@example.com" value={data.email} onChange={this.onChange} />
          			{errors.email && <InlineErrors text={errors.email} />}
            	</Form.Field>
            	<Form.Field error={!!errors.password}>
            		<label htmlFor="password">Password</label>
          			<input type="password" id="password" name="password" placeholder="Please enter your password" value={data.password} onChange={this.onChange} />
          			{errors.password && <InlineErrors text={errors.password} />}
            	</Form.Field>
            	<Button primary>Login</Button>
            </Form>
        );
    }
}


LoginForm.propTypes = {
  submit: PropTypes.func.isRequired,
}

export default LoginForm;