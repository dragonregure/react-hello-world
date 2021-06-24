import React from 'react';
import { connect } from 'react-redux';
import actionType from '../../../redux/reducer/globalType';

class ProductCardComponent extends React.Component {

    // handlePlus = () => {
    //     this.setState({
    //         counter: this.state.counter+1
    //     }, () => {
    //         this.props.onChangeValue(this.state.counter)
    //     });
    // }
    // handleMinus = () => {
    //     if(this.state.counter > 0) {
    //         this.setState({
    //             counter: this.state.counter-1
    //         }, () => {
    //             this.props.onChangeValue(this.state.counter)
    //         });
    //     }
    // }
    render() {
        return (
            <div>
                <button onClick={this.props.handlePlus}>{this.props.text1}</button>
                <p>{this.props.order}</p>
                <button onClick={this.props.handleMinus}>{this.props.text2}</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({ type: actionType.CHANGE_ORDER, changeType: '+' }),
        handleMinus: () => dispatch({ type: actionType.CHANGE_ORDER, changeType: '-' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCardComponent);