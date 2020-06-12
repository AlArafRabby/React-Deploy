import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class CaroselView extends Component {
    render() {
        return (
            <>
            <Carousel>
            <Carousel.Item>
              <img
                 style={{height:'80vh',width:'100%'}}
                className="d-block"
                src="https://images.pexels.com/photos/34140/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                 style={{height:'80vh',width:'100%'}}
                className="d-block"
                src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Third slide"
              />
          
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                style={{height:'80vh',width:'100%'}}
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Third slide"
              />
          
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>



        <div  className="test">
            <div class="row">
            <div class="list-group col-md-6 col-sm-6 col-lg-6 col-12">
                <ul>
                        <li>Adele</li>
                        <li>Agnes</li>
                        <li><i class="fas fa-greater-than" aria-hidden="true"></i>Billy</li>
                        <li><i class="fas fa-greater-than" aria-hidden="true"></i>Bob</li>
                </ul>
            </div>

            <div class="col-md-6 col-sm-6 col-lg-6 col-12 image-div">
                <div>
                  <img
                      className="d-block image-design"
                      src="data:image/jpeg;base64,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"
                      alt="First slide"
                    />
            </div>
            </div>

            </div>


        </div>
            




          </>
        );
    }
}

export default CaroselView;