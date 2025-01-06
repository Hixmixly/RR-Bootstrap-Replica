import Card from 'react-bootstrap/Card';
import React from 'react';
import backgroundImage from '../images/backgroundImage.webp'

function Background() {
    return (
      <Card 
        className="text-white"
            style={{
                backgroundColor: '#003D29',
                paddingTop: '200px', 
            }}>
        <Card.ImgOverlay
          className="d-flex align-items-center justify-content-between"
          style={{ padding: '20px' }}
        >
          {/* Text */}
          <div style={{ maxWidth: '50%', textShadow: '2px 2px 4px black' }}>
            <Card.Title>Welcome to Instacart</Card.Title>
            <Card.Text>
              This is a sample landing page styled with Bootstrap components.
            </Card.Text>
            <Card.Text>Last updated just now</Card.Text>
          </div>
  
          {/* Image */}
          <div style={{ maxWidth: '40%' }}>
            <img
              src={backgroundImage}
              alt="Decorative"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '10px', 
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', 
              }}
            />
          </div>
        </Card.ImgOverlay>
      </Card>
    );
  }

export default Background;