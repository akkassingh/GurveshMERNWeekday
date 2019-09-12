import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header'

import data from './db.json'


class App extends Component {
    constructor(){
        super()
        
        this.state = {
            news: data
        }
    }
    render(){
        console.log('Data received >>>>',this.state.news)
        return(
            <div>
            <Header />
            <h1>Welcome to the News APP</h1>
            <h2>This is current News</h2>
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