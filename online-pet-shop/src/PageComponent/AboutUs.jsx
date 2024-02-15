import Container from 'react-bootstrap/Container' ;
import { useState } from 'react' ;
import Row from 'react-bootstrap/Row' ;
import Col from 'react-bootstrap/Col' ;
import Card from 'react-bootstrap/Card' ;
import image1 from './Images/TusharTomar.jpg' ;
import image2 from './Images/Saurabh.jpg' ;
import image3 from './Images/Niranjan.jpg' ;
import image4 from './Images/Shivam.jpeg' ;
import image5 from './Images/Utkarsh.jpg' ;

import Footer from '../NavbarComponent/Footer' ;
import '../App.js';
 
const AboutUs = () => {
  const [isHovered, setIsHovered] = useState(false) ;
  const handleMouseEnter = () => {
    setIsHovered(true) ;
  } ;

  const handleMouseLeave = () => {
    setIsHovered(false) ;
  } ;
 
  return (
    <div className="text-color ms-5 me-5 mr-5 mt-3  " >
      <h4 className="mb-3">About Us</h4>
      <b>
        Welcome to Online Pet Shop, your go-to destination for all your pet
        needs. Discover a curated selection of premium products, from nutritious
        treats to comfy beds, ensuring your furry friends live their happiest
        lives. At Online Pet Shop, we're more than an online store; we're a
        community passionate about the well-being of your pets. Join us in
        celebrating the joy of companionship and providing a world where every
        pet is cherished.
        <br /><br/><br/>
      </b>

      <Container>
    <Row>
      <Col>
      <Card className={`AboutCard ${isHovered ? 'hovered' : ''}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ width: '18rem' }} >
      <Card.Img variant="top" src={image1} />
      <Card.Body>
        <Card.Title>Tushar Tomar</Card.Title>
        <Card.Text>
        Profile - Full Stack Developer
        </Card.Text>
        <Card.Text>
        PG-DAC, CDAC Kharghar
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
      <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image2} />
      <Card.Body>
        <Card.Title>Saurabh Bhavsar</Card.Title>
        <Card.Text>
        Profile - Full Stack Developer
      </Card.Text>
      <Card.Text>
        PG-DAC, CDAC Kharghar
        </Card.Text>
      </Card.Body>
    </Card>
      </Col>
      <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image4} />
      <Card.Body>
        <Card.Title>Shivam Vemra</Card.Title>
        <Card.Text>
        Profile - Full Stack Developer
      </Card.Text>
      <Card.Text>
        PG-DAC, CDAC JUHU
        </Card.Text>
      </Card.Body>
    </Card>
      </Col> 
    </Row>
    <br/><br/><br/>

    <Row>

    <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image3} />
      <Card.Body>
        <Card.Title>Niranjan Khandekar</Card.Title>
        <Card.Text>
        Profile - Full Stack Developer
      </Card.Text>
      <Card.Text>
        PG-DAC, CDAC JUHU
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

      <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image5} />
      <Card.Body>
        <Card.Title>Utkarsh Somvanshi</Card.Title>
        <Card.Text>
        Profile - Full Stack Developer        
      </Card.Text>
      <Card.Text>
        PG-DAC, CDAC JUHU 
        </Card.Text>
      </Card.Body>
    </Card>
      </Col>

      <Col>
      
      </Col>

    </Row>

  </Container>
   
  <Footer />

    </div>

   
  );
};

export default AboutUs ;