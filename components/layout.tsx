import React, { Component } from 'react'

class Layout extends Component {
    public render() {
        return (
            <div className="test">{this.props.children}</div>
        );
    }
}

export default Layout