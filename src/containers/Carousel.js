import React, { Component } from 'react';

import burgerImg from '../asset/images/burger-logo.png';
import coronaImg from '../asset/images/image.png';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends Component{
    state = {
        items: [
            {
                id: 0,
                title: 'Burger App',
                subTitle: 'The burger builder app',
                imgSrc: burgerImg,
                link: 'https://react-my-burger-e3e9a.web.app/',
                selected: false
            },
            {
                id: 1,
                title: 'Corona Tracker',
                subTitle: 'The corona virus tracker web',
                imgSrc: coronaImg,
                link: 'https://covid-19tracker-74259.web.app/',
                selected: false
            }
        ]
    };

    cardClickHandler = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    };


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.cardClickHandler(item.id, e))} key={item.id}/>
        })
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;