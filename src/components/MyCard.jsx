import React from 'react';
import Tags from './Tags';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

const MyCard = ({cardImg, cardName, cardDesc, tagText, tagBackgroundColor}) => {
    return (
        <div className='cards'>
            <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src={cardImg} height="230px"/>
                <Card.Body>
                    <Card.Title>{cardName}</Card.Title>
                    <Card.Text>{cardDesc}</Card.Text>
                    <Tags className="tags" tagBackgroundColor={tagBackgroundColor} tagText={tagText}/>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MyCard;