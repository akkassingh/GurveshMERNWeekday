import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header'

const App = () => {
    return (
        <div>
            <Header />
            <h1>Hello World!!</h1>
            <h1>this is line 2</h1>
        </div>    
    )
}


ReactDOM.render(<App />, document.getElementById('root'))