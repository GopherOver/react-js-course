import React, { Component } from 'react';
// import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Card, CardBody, CardTitle, CardText, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class News extends Component {
    constructor(props) {
        super(props);
        this.inputNewsTitle = '';
        this.inputNewsDescription = '';
    }

    render() {
        return (
            <div>
                <Form inline className='mt-3'>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="inputTitle" className="mr-sm-2"></Label>
                        <Input type="text" name="title" id="inputTitle" placeholder="News title" innerRef={(input) => { this.inputNewsTitle = input; }}/>
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="inputDescription" className="mr-sm-2"></Label>
                        <Input type="text" name="description" id="inputDescription" placeholder="News description" innerRef={(input) => { this.inputNewsDescription = input; }}/>
                    </FormGroup>
                    <Button color='success' onClick={() => this.onAddNews()}>Add</Button>
                </Form>
                <p className='mt-3 text-center'>
                    У вас есть {this.props.news.length} новости!
                </p>
                {this.renderNews()}
            </div>
        );
    }

    onAddNews() {
        if (this.inputNewsTitle.value.length > 2 && this.inputNewsDescription.value > 2) {
            this.props.addNews({ title: this.inputNewsTitle.value, description: this.inputNewsDescription.value });
            this.inputNewsTitle = this.inputNewsDescription = '';
        }
    }

    renderNews() {
        return this.props.news.map((item, index) => {
            return (
                <Link to={{ pathname: '/news/' + index, state: { item: item } }} key={index} >
                    <Card className='mt-3 card-news'>
                        <CardBody>
                            <CardTitle>
                                {item.title}
                            </CardTitle>
                            <CardText>
                                {item.description.substring(0, 80)} ...<b>(Read more)</b>
                            </CardText>
                        </CardBody>
                    </Card>
                </Link>
            );
        });
    }
}