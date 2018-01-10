import React from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField'; 
import RaisedButton from 'material-ui/RaisedButton';

import Collection from '../Collection';

export default class SubmissionDashboard extends React.Component {
	constructor() {
		super();

		this.state = {
			value: undefined,
			errorText: undefined,
			data: [{ 
			  url: `http://google.com`,
			  accessstatus: '',
			  analyzedon: null,
			  htmldoc: '',
			  htmlversion: '',
			  submittedon: '2018-01-10T05:12:30.955Z',
			  title: ''
			}]
		}

		this.styles = {
			placeHolder : {
	    	fontSize: "20px",
	    	margin: "10px auto auto 10px",
	    	padding: "100px",
	    	height: "100%",
	    	color: "#949494",
	    	borderRadius: "3px"
	    }
		}
	}

	handleChange = (event) => {
		this.setState({
			value: event.target.value
		})
	}

  handleClick = () => {
  	// it is gmail validator
  	let reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
		 if(this.state.value && reg.test(this.state.value)){

			 	let data = this.state.data;
		  	let newData = {
		  		url: ""
		  	}

		  	newData.url = this.state.value;
		  	data.push(newData);
		 
		  	this.setState({
		  		data : data,
		  		value: undefined,
		  		errorText: undefined
		  	})
		  	return;
		} else {
		  return this.setState({
			  errorText: " Please Enter Valid Email address"
		  });
		}
  }

	render() { 
		return (
			<div style={this.styles.placeHolder}>
			  <Grid fluid>
				  <Row>
				    <Col xs={12}>
					    <Row center="xs" middle="xs">
						    <Col xs={6}>
							    <TextField
							      hintText="Enter Url"
							      hintStyle={{"fontSize": "30px", "padding": "10px"}}
				            floatingLabelText="Enter Url"
				            floatingLabelStyle={{"fontSize": "20px"}}
				            errorText={this.state.errorText}
				            value={(this.state.value) ? this.state.value : ""}
				            onChange={this.handleChange}
				            fullWidth={true}
				            style={{"height": "100px"}}
				            inputStyle={{"fontSize": "30px"}}
				            floatingLabelFixed={true}
				          />
						    </Col>
						  </Row>
						  <Row center="xs">
						    <Col xs={4}>
						      <RaisedButton
						        primary={true}
						        label={"Submit"}
						        fullWidth={true}
						        style={{"marginTop": "10px"}}
						        onClick={this.handleClick}
						      />
						    </Col>
						  </Row>
						</Col>    
				  </Row>
			  </Grid>
			  <Grid fluid> 
				  {(this.state.data.length > 0) ? <Collection data={this.state.data} />: "" }
				</Grid>
			</div>
		)
	}
}