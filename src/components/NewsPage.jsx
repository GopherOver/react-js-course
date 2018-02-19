import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

export default class NewsPage extends Component {
    render() {
        const item = this.props.location.state.item;
        return (
            <Card className='mt-3'>
                <CardBody>
                    <CardTitle>
                        {item.title}
                    </CardTitle>
                    <CardText>
                        {item.description}
                    </CardText>
                </CardBody>
            </Card>
        );
    }
}