import React, { Component } from 'react';
import ButtonStyle from '@material-ui/core/Button';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {

        let { onClick = () => { }, className = '' } = this.props


        return <div><ButtonStyle variant="contained" onClick={onClick}
            className={className}
            style={{
                backgroundColor: this.props.btnColor ? this.props.btnColor : '#19b5fe',
                color: this.props.fontColr ? this.props.fontColr : 'white',
                width: "100px"
            }}  >
            {
                this.props.btnName ? this.props.btnName : 'Button'
            }

        </ButtonStyle>
        </div>

    }
}
export default Button;