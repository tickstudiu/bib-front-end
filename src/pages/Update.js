import React from 'react';

export default class Update extends React.Component {

    render(){
        return(
            <div>
                update.js at {this.props.match.params.id}
                <hr/>
            </div>
        )
    }
}
