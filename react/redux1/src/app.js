import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from './action'

class App extends Component {

    componentDidMount(){
        this.props.moviesList()
    }
    renderList = (movies) => {
        console.log("<<<<")
        if(movies){
            console.log(">>>>>")
            return movies.map((data) => {
                console.log(">>>>>> ", data)
                return (
                    <div key={data.id}>{data.name}</div>
                )
            })
        }
    }

    render () {
        return(
            <div>
            {this.renderList(this.props.movies)}
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps,actions)(App)