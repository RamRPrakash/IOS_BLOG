import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];
class SelectItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Select
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"
                
                value={this.props.value}
                onChange={this.props.onChange}
                input={<Input />}
                style={{width : 300}}
                
                
            >
                {this.props.menuItem ? this.props.menuItem.map((name) => (
                    <MenuItem key={name} value={name} >
                        {name}
                    </MenuItem>
                )) : null}
            </Select>
            </div> );
    }
}
 
export default SelectItem;