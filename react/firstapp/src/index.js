import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header'
import NewsList from './component/news_list';

import data from './db.json'


class App extends Component {
    constructor(){
        super()
        
        this.state = {
            news: data,
            filtered : data
        }
    }

    filterNews(keyword){
        let output =this.state.news.filter((item) => {
            return item.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1
        })
        this.setState({filtered:output})
    }
    render(){
        return(
            <div>
            <Header userInput={(uinput) => this.filterNews(uinput)}/>
            <NewsList newsdata={this.state.filtered}/>
            </div>
        )
    }
}





// const App = () => {
//     return (
//         <div>
//             <Header />
//             <h1>Hello World!!</h1>
//             <h1>this is line 2</h1>
//         </div>    
//     )
// }


ReactDOM.render(<App />, document.getElementById('root'))