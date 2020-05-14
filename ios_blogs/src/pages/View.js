import React, { Component } from 'react';
import Api from 'axios'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Card from '@material-ui/core/Card';
import SelectItem from './../components/SelectItem'
import Button from './../components/Button'

class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: '' , 
            heading : [] , 
            selectedItem : 0 , 
            myBlog : []

        }
    }
    componentWillMount() {
        Api.get('http://localhost:3334/ios').then((res)=>{
            console.log(res)
            if (res.data){
                var data = res.data 
                var heading  = data && data.map((item , index)=>{
                    return index + 1 + '_' + item.heading
                })
                console.log(heading)
                this.state.myBlog = data || []
                console.log(this.state.myBlog)

                this.setState({
                    heading: heading  ,
                    myBlog: data || []
                })
            }
        })
    }
    render() {
        return (
            <Card style={{ height: '700px', margin: '2%' , }}>
                <Card style={{ height: 50, backgroundColor: 'black' }}>
                    <h2 style={{ color: 'white', }}>My IOS Blog</h2>

                </Card>
                <Card style={{ margin: '2%', overflowX: 'scroll' }}>
                    <div style={{ display: 'flex', margin: '2%' }}>
                        <div style={{ marginLeft: '20%' }} >
                            Select topic <SelectItem  
                            menuItem={this.state.heading}
                                onChange={(e)=>{
                                    console.log(e.target.value)
                                    this.setState({ selectedItem: e.target.value})
                                    

                                }}
                                value ={this.state.selectedItem} />
                        </div>
                        <div style={{ marginLeft: '5%' }}>
                            <Button btnName='Select' />
                        </div>
                    </div>
                </Card>
                <Card style={{ margin: '2%', height: '500px', overflowY: 'scroll'}}>
                    <div style={{margin : '2%'}}>
                    {ReactHtmlParser(this.state.myBlog[1] ? this.state.myBlog[2].description : '<h1>No Data </h1>')}
                    </div>
                    </Card>
            </Card>);
    }
}

export default View;