import React, {Component} from 'react';
import './header.css'

class Header extends Component {
    Change(event){
        console.log(event)
        console.log('++++++++++++++++')
        console.log(event.target)
        console.log(event.target.value)
    }
    render(){
        return (
            <React.Fragment>
            <header>
            <div className="logo" onClick={() => {
                console.log('I am clicked')
            }}>Logo</div>
            <center>
                <input onChange={this.Change}/>
            </center>
            <hr />
            </header>
            </React.Fragment>
        )
    }
}

// const Header = () => {
//     return (
//         <header>
//         This is the Header
//         </header>
//     )
// }

export default Header