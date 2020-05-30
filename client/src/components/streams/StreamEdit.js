import React from 'react'
import { connect } from 'react-redux'
import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm'
import { formValues } from 'redux-form'
import _ from 'lodash'


class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = formValues => {
        this.props.editStream(this.props.match.params.id, formValues)
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
    return (
        <div>
        <h3>Edit a stream</h3>
        <StreamForm 
        // _.pick allows you to get certain properties from object
        initialValues={_.pick(this.props.stream, 'title', 'description')}
        onSubmit={this.onSubmit} />
        </div>
    )
}
}

const mapStateToProps = (state, ownProps) => {
return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, 
    {fetchStream, editStream})(StreamEdit)
