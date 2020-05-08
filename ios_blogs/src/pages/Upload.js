import React, { Component } from 'react';
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Button } from '@material-ui/core';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Textbox from './../components/Textbox'
import Api from 'axios'

class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editedData: '',
            uploadedData: '' , 
            heading : '' , 

        }
    }
    onUpload = () => {
        this.setState({ uploadedData: this.state.editedData })
    }
    onSend=()=>{
        var data = {
            heading: this.state.heading , 
            description: this.state.editedData
        }
        console.log(data)
        if (this.state.heading && this.state.editedData){
            Api.post('http://localhost:3310/updates', data).then((res)=>{
                console.log(res)
            })
        }
    }
    render() {
        return (<div class="container">
            <div style={{width : '100%' , height : 100 , margin : '3%'}}>
                Heading :  <Textbox value={this.state.heading} onChange={(e)=>{
                    this.setState({
                        heading : e.target.value
                    })
                }} />
            </div>
            <div class="white-box">
                <div>
                    <CKEditor
                        editor={ClassicEditor}
                        data={this.state.editedData}
                        onInit={editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log("Editor is ready to use!", editor);
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            this.setState({ editedData: data })
                            console.log({ event, editor, data });
                        }}
                        onBlur={(event, editor) => {
                            console.log("Blur.", editor);
                        }}
                        onFocus={(event, editor) => {
                            console.log("Focus.", editor);
                        }}
                    />
                </div>
                <div style={{ margin: "15px 126px 12px 1087px" }} onClick={() => this.onUpload()}><Button variant="contained" color="primary">Upload</Button></div>
                <div style={{ margin: "15px 126px 12px 1087px" }} onClick={() => this.onSend()}><Button variant="contained" color="primary">Send</Button></div>

                {ReactHtmlParser(this.state.uploadedData)}
            </div></div>);
    }
}

export default Upload;
