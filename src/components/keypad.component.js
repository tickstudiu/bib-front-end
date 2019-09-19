import React from 'react';
import {Button, Col, Row} from "reactstrap";

const Keypad = (props) => {
  return(
      <section>
          <Row>
              <Col xs={4}>
                  <Button block size="lg" onClick={() => props.handleTag('1')} style={{height: '120px'}} className="mb-3"outline><h1 className="display-4">1</h1></Button>
              </Col>
              <Col xs={4}>
                  <Button block size="lg" onClick={() => props.handleTag('2')} style={{height: '120px'}} className="mb-3"outline><h1 className="display-4">2</h1></Button>
              </Col>
              <Col xs={4}>
                  <Button block size="lg" onClick={() => props.handleTag('3')} style={{height: '120px'}} className="mb-3"outline><h1 className="display-4">3</h1></Button>
              </Col>
              <Col xs={4}>
                  <Button block size="lg" onClick={() => props.handleTag('4')} style={{height: '120px'}} className="mb-3" outline><h1 className="display-4">4</h1></Button>
              </Col>
              <Col xs={4}>
                  <Button block size="lg" onClick={() => props.handleTag('5')} style={{height: '120px'}} className="mb-3" outline><h1 className="display-4">5</h1></Button>
              </Col>
              <Col xs={4}>
                  <Button block size="lg" onClick={() => props.handleTag('6')} style={{height: '120px'}} className="mb-3" outline><h1 className="display-4">6</h1></Button>
              </Col>
              <Col xs={4}>
                  <Button block size="lg" onClick={() => props.handleTag('7')} style={{height: '120px'}} className="mb-3" outline><h1 className="display-4">7</h1></Button>
              </Col>
              <Col xs={4}>
                  <Button block size="lg" onClick={() => props.handleTag('8')} style={{height: '120px'}} className="mb-3" outline><h1 className="display-4">8</h1></Button>
              </Col>
              <Col xs={4}>
                  <Button block size="lg" onClick={() => props.handleTag('9')} style={{height: '120px'}} className="mb-3" outline><h1 className="display-4">9</h1></Button>
              </Col>
              <Col xs={{size: 4, offset: 4}}>
                  <Button block size="lg" onClick={() => props.handleTag('0')} style={{height: '120px'}} className="mb-3" outline><h1 className="display-4">0</h1></Button>
              </Col>
              <Col xs={4}>
                  <Button block size="lg" color="primary" style={{height: '120px'}} className="mb-3" onClick={props.handleSubmit} disabled={props.isSending}><h1>{props.isSending ? 'w8' : 'X'}</h1></Button>
              </Col>
          </Row>
      </section>
  )
};

export default Keypad