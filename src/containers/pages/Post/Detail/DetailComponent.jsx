import axios from 'axios';
import React, { Component, Fragment } from 'react';

class DetailComponent extends Component {
    state = {
        title: '',
        body: ''
    }
    componentDidMount() {
        axios.get(`http://localhost:3004/posts/${this.props.match.params.id}`)
        .then(response => {
            let data = response.data;
            this.setState({
                title: data.title,
                body: data.body
            });
        })
        .catch(error => {
            console.log(error);
        })
    }

    back = () => {
        this.props.history.goBack()
    }

    render() {
        return(
            <Fragment>
                <p>{this.state.title}</p>
                <p>{this.state.body}</p>
                <button onClick={this.back}>Back</button>
            </Fragment>
        );
    }

}

export default DetailComponent;