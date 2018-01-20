import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Message } from 'semantic-ui-react';
import Validator from 'validator';
import InlineErrors from '../messages/InlineErrors';

class ResetPasswordForm extends Component {

    state = {
    	data: {
    		token: this.props.token,
    		password: '',
    		confirmPassword: '',
    	},
    	loading: false,
    	errors: {},
    }

    onSubmit = e => {
        e.preventDefault();
    	const errors = this.validate(this.state.data);
    	this.setState({errors});

    	if(Object.keys(errors).length === 0) {
            this.setState({ loading: true });
    		this.props
                    .submit(this.state.data)
                    .catch(err => this.setState({errors: err.response.data.errors, loading: false}));
    	}
    }

    validate = (data) => {
    	const errors = {};
    	if (!data.password) errors.password = "can't be blank";
    	if (data.password !== data.confirmPassword) errors.confirmPassword = "Passwords does not match";
    	return errors;
    }

    onChange = e => this.setState({data: {...this.state.data, [e.target.name]: e.target.value}})

    render() {
    	const {data, loading, errors } = this.state;

        return (
            <Form className="ui form" onSubmit={this.onSubmit} loading={loading}>
                
                {errors.global && <Message negative>
                                        <Message.Header>Something went Wrong !!</Message.Header>
                                        <p>{errors.global}</p>
                                  </Message>}

            	<Form.Field error={!!errors.password}>
            		<label htmlFor="password">Password</label>
          			<input type="password" id="password" name="password" placeholder="Please enter your password" value={data.password} onChange={this.onChange} />
          			{errors.password && <InlineErrors text={errors.password} />}
            	</Form.Field>

            	<Form.Field error={!!errors.confirmPassword}>
            		<label htmlFor="password">Confirm Password</label>
          			<input type="password" id="confirmPassword" name="confirmPassword" placeholder="Please confirm your password" value={data.confirmPassword} onChange={this.onChange} />
          			{errors.confirmPassword && <InlineErrors text={errors.confirmPassword} />}
            	</Form.Field>

            	<Button primary>Sign Up</Button>

            </Form>
        );
    }
}


ResetPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired
}

export default ResetPasswordForm;