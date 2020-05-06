import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';



class Textbox extends Component {
    state = {

    }
    UNSAFE_componentWillReceiveProps(props) {
        console.log(props, 'props')
    }
    render() {
        let { onChange = () => { }, value = '', placeholder = '', lable = '', className = '' } = this.props
        return <div>
            <TextField
                className={className}
                label={lable}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    }
}

export default Textbox