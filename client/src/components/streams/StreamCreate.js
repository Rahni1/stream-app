import React from 'react'
// different capitalisation as Field is component and reduxForm is function
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                <div className="header">
                {error}</div>
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : '' }`
    return (
        <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
        </div>
    )
    }

    onSubmit(formValues) {
console.log(formValues)
    }

    render() {
    return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
        </form>
    )
}
}

const validate = formValues => {
    const errors = {}
if (!formValues.title) {
    // only runs if user does not enter title 
    errors.title = 'You must enter a title.'
}
if (!formValues.description) {
    // only runs if user does not enter title 
    errors.description = 'You must enter a description.'
}
return errors
}

// reduxForm will return function which is going to be called with StreamCreate
export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate)
