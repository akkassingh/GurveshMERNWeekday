import React, {Component} from 'react';

class PostDetails extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <div className="panel panel-info">
                    <div className="panel-heading">PostDetails page Heading</div>
                    <div className="panel-body">PostDetails page content for {this.props.match.params.subject}
                    <br />
                    </div>
                </div>
            </div>
        )
    }
}

export default PostDetails;