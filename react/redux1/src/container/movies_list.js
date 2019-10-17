import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../action'
import ListMovies from '../component/list_movies';

class MoviesList extends Component {
    componentDidMount(){
        this.props.moviesList();
    }

    render(){
        return(
            <div>
                <ListMovies datalist={this.props.data}></ListMovies>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('state received',state)
    return {
        data: state.movies
    }
}

export default connect(mapStateToProps,actions)(MoviesList)