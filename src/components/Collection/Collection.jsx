import React from 'react';

import { Row, Col } from 'react-flexbox-grid';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import { deepOrange300, purple500 } from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';

export default class Collection extends React.Component {
	constructor() {
		super();

		this.state = {
			expanded : false
		}
	}

	handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

	getCardBlock = () => {
  	return(
  		this.props.data.map((detail, index) => {
  			return (
  				<Col xs={6} key={index}>
  				<Card style={{"marginTop": "10px"}} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
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
			        </Avatar>}
		          actAsExpander={true}
		          showExpandableButton={true}
			      />
		        <CardText>
		          <Toggle
		            toggled={this.state.expanded}
		            onToggle={this.handleToggle}
		            labelPosition="right"
		            label="This toggle controls the expanded state of the component."
		          />
		        </CardText>
		        <CardMedia
		          expandable={true}
		          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
		        >
		          <img src="images/nature-600-337.jpg" alt="" />
		        </CardMedia>
		        <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />
		        <CardText expandable={true}>
		          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
		          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
		          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
		        </CardText>
		        <CardActions>
		          <FlatButton label="Expand" onClick={this.handleExpand} />
		          <FlatButton label="Reduce" onClick={this.handleReduce} />
		        </CardActions>
			    </Card>
			    </Col>
			  )
  		}) 	
  	)
  }

	render() {
		return (
			<div style={{"marginTop": "20px"}}>
			  <Row start="xs">
			    { (this.props.data.length > 0) ? this.getCardBlock() : ""}
			  </Row>
			</div>
		)
	}
}