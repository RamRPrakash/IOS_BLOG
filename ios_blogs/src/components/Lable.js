import React, { Component } from 'react'

class Lable extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return <div>
            <label
                className={this.props.className ? this.props.className : ''}
                style={{
                    font: this.props.fontSize ? this.props.fontSize : '16px',
                    color: this.props.fontColor ? this.props.fontColor : '#24252a',
                    alignContent: this.props.alignContent ? this.props.alignContent : 'center'

                }}>{this.props.labelName}</label>
        </div>
    }
}
export default Lable