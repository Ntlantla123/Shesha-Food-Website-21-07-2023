import React from 'react'
import { Card, Button } from 'react-bootstrap';


const HomeCard = props => {
  let { imagesSrc, price, title } = props.data;
  return (
    <Card className="p-0 overflow-hidden h-100 shadow">
      <div className="overflow-hiiden rounded p-0 bg-light">
        <Card.Img variant="top" src={imagesSrc} />
      </div> 
      <Card.Body className="text-center">
        <Card.Title className="display-6">{price}</Card.Title>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      {/*<Button className="w-100 rounded-0" variant="success">View Recipe</Button>*/}
    </Card>
  )
}

export default HomeCard;
