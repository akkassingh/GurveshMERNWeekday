import React, {Component} from 'react';
import { connect } from 'react-redux';
import { latestNews } from '../actions';
import { bindActionCreators } from 'redux';

import LatestNews from '../component/Home/LatestNews';
class Home extends Component {

    componentDidMount() {
        this.props.latestNews();
    }
    
    render(){
        return(
            <div>
                <LatestNews latestnw ={this.props.article.latest}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(">>>",state)
    return{
        article: state.articles
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews}, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps )(Home);