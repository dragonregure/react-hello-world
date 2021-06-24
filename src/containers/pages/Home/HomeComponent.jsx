import React from 'react';
import YoutubeComponent from '../../../components/Youtube/YoutubeComponent';
import { connect } from 'react-redux';

class HomeComponent extends React.Component {
    render(){
        return (
            <div>
                <YoutubeComponent title="This is 1st video" description="This is 1st description" time="10.00"/>
                <YoutubeComponent title="This is 2nd video" description="This is 2nd description" time="10.00"/>
                <YoutubeComponent title="This is 3rd video" description="This is 3rd description" time="10.00"/>
                <YoutubeComponent title="This is 4th video" description="This is 4th description" time="10.00"/>
                <YoutubeComponent />
                <hr />
                <p>Jumlah Order: </p>
                <h1>{this.props.order}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps)(HomeComponent);