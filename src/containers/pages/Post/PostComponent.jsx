import axios from 'axios';
import React, { Component, Fragment } from 'react';
import PostCardComponent from '../../../components/Post/PostCardComponent';
import API from '../../../helpers/axios/api';

class PostComponent extends Component {
    state = {
        postData: [],
        formData: {
            userId: 1,
            id: 1,
            title: '',
            body: ''
        },
        isUpdate: false
    }

    getPostAPI = () => {
        API.getPost()
            .then(response => {
                this.setState({
                    postData: response.data
                });
            });
    }

    getPostAPIById = (data) => {
        axios.get('http://localhost:3004/posts?id=' + data)
            .then(response => {
                this.setState({
                    formData: response.data[0],
                    isUpdate: true
                });
            })
    }

    postData = () => {
        API.postPost(this.state.formData)
            .then(response => {
                this.getPostAPI();
                this.setState({
                    formData: {
                        userId: 1,
                        id: 1,
                        title: '',
                        body: ''
                    }
                });
            });
    }

    putData = () => {
        API.putPost(this.state.formData.id, this.state.formData)
            .then(response => {
                this.getPostAPI();
                this.setState({
                    formData: {
                        userId: 1,
                        id: 1,
                        title: '',
                        body: ''
                    },
                    isUpdate: false
                });
            });
    }

    handleDetail = (id) => {
        this.props.history.push(`/post/detail/${id}`);
    }

    handleUpdate = (data) => {
        //  this.getPostAPIById(data);
        this.setState({
            formData: data,
            isUpdate: true
        });
    }

    handleRemove = (data) => {
        API.delPost(data)
            .then(response => {
                this.getPostAPI();
            });
    }

    handleFormChange = (event) => {
        let formDataNew = { ...this.state.formData }
        let timeStamp = new Date().getTime();
        if (!this.state.isUpdate) formDataNew['id'] = timeStamp;
        formDataNew[event.target.name] = event.target.value;
        this.setState({
            formData: formDataNew
        });
    }

    handleButtonClick = () => {
        if (this.state.isUpdate) {
            this.putData();
        } else {
            this.postData();
        }
    }

    componentDidMount() {
        this.getPostAPI();
    }

    render() {
        return (
            <Fragment>
                <h1>Post</h1>
                <hr />
                <div className="form-post">
                    <label htmlFor="title">Title</label> <br />
                    <input type="text" name="title" id="title" value={this.state.formData.title} onChange={this.handleFormChange} /> <br />
                    <label htmlFor="body">Body</label> <br />
                    <textarea name="body" id="body" cols="30" rows="10" placeholder="Text here" value={this.state.formData.body} onChange={this.handleFormChange}></textarea> <br />
                    <button id="btn-submit" onClick={this.handleButtonClick}>Submit</button>
                </div>
                <hr />
                {this.state.postData.map(postData => {
                    return <PostCardComponent key={postData.id} data={postData} remove={this.handleRemove} update={this.handleUpdate} detail={id => { this.props.history.push(`/post/detail/${id}`) }} />
                })}
            </Fragment>
        );
    }
}

export default PostComponent;