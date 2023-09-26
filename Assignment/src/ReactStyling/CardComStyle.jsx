import React from 'react'
import { Button, Card, CardBody, CardText, CardTitle } from 'reactstrap'

export default function (props) {
  return (
    <>
      <Card className="demo"
        style={{
          width: '400px'
        }}
      >


        <img
          alt="Sample"
          style={{ height: "300px" }}
          src={props.sports.img}
        />
        <CardBody style={{ backgroundColor: "lightslategray" }}>
          <CardTitle tag="h5">
            {props.sports.Title}
          </CardTitle>

          <CardText>
            {props.sports.About}
          </CardText>
          <Button className='btn btn-dark text-light' >
            Select
          </Button>
        </CardBody>
      </Card>
    </>
  )
}
