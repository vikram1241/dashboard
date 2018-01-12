import React from 'react';

import {Grid, Row, Col } from 'react-flexbox-grid';
import {Card, CardHeader} from 'material-ui/Card';
import { deepOrange300, purple500 } from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


export default class Collection extends React.Component {
	constructor() {
		super();

		this.state = {
			open : false
		}

		this.styles = {
			customStyle : {
	      width: '80%',
	      maxWidth: '100%'
	    },
	    dialogTitle: {
	      background: "#ececec",
	      fontSize: "18px",
	      fontWeight: "500"
	    }
		}
	}

  openModalWindow = () => {
  	this.setState({
  		open : true
  	})
  }

	getCardBlock = () => {
  	return(
  		this.props.data.map((detail, index) => {
  			return (
  				<Col xs={6} key={index}>
	  				<Card style={{"marginTop": "10px"}} onClick={this.openModalWindow}>
	  				  <CardHeader
			          title={detail.url}
			          subtitle="Subtitle"
			          avatar={<Avatar
				          color={deepOrange300}
				          backgroundColor={purple500}
				          size={30}
				          style={{margin: 5}}
				        >
				          A
				        </Avatar>}/>
				    </Card>
			    </Col>
			  )
  		}) 	
  	)
  }

  handleCloseDialog = () => {
  	this.setState({
  		open: false
  	})
  }

  getCollectionInfo = () => {
  	return (
      <Dialog
        title="Details of selected collection"
        titleStyle={this.styles.dialogTitle}
        actions={[
          <FlatButton label="Submit" primary={true} onClick={this.handleCloseDialog}/>,
          <FlatButton label="Cancel" onClick={this.handleCloseDialog}/>
        ]}
        contentStyle={this.styles.customStyle}
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleCloseDialog}
        autoScrollBodyContent={true}>
          { " Work in progress " }
      </Dialog>
  	)
  }

	render() {
		return (
			<div style={{"marginTop": "20px"}}>
			  { (this.state.open) ? this.getCollectionInfo() : ""}
        <Grid fluid>
				  <Row start="xs">
				    { (this.props.data.length > 0) ? this.getCardBlock() : ""}
				  </Row>
			  </Grid>
			</div>
		)
	}
}