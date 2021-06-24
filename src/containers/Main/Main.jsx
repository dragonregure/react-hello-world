import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import DetailComponent from '../pages/Post/Detail/DetailComponent';
import HomeComponent from '../pages/Home/HomeComponent';
import PostComponent from '../pages/Post/PostComponent';
import ProductComponent from '../pages/Product/ProductComponent';
import HooksComponent from '../../components/Hooks/HooksComponent';

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <Link to="/" >Home</Link>
                <Link to="/post" >Post</Link>
                <Link to="/product" >Product</Link>
                <Link to="/hooks" >Hooks</Link>

                <Route path="/" exact component={HomeComponent} />
                <Route path="/post" exact component={PostComponent} />
                <Route path="/post/detail/:id" component={DetailComponent} />
                <Route path="/product" component={ProductComponent} />
                <Route path="/hooks" component={HooksComponent} />
            </BrowserRouter>
        );
    }
}

export default Main;