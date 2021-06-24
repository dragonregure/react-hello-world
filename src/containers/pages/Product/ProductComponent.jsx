import React from 'react';
import ProductCardComponent from './ProductCardComponent';
import { connect } from 'react-redux';

class ProductComponent extends React.Component {
    // state = {
    //     count: 0
    // }

    // hasChangeValue = (newValue) => {
    //     this.setState({
    //         count: newValue
    //     })
    // }

    render(){
        return(
            <div>
                <h1>{this.props.order}</h1>
                <ProductCardComponent /*onChangeValue={(value) => this.hasChangeValue(value)}*/ text1="+" text2="-"/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps)(ProductComponent);