import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="m-5 row p-5 align-items-center">
      <div className="col-lg-4">
        <i className='fa-solid fa-music'></i>{' '}
        Media Player
        <p>Desined and build with all the love in the world by the <br /> luminar team with the help our contributors.</p>
        <p>Code licensed Luminar, docs CC BY 3.O</p>
        <p>Currently v5.3.2</p>
      </div>
      <div className="col-lg-2">
        <h3 className="fw-bolder">Links</h3><br />
        <Link style={{ textDecoration: 'none' }} to={'/'} className="fw-bolder">Landing Page</Link><br />
        <Link style={{ textDecoration: 'none' }} to={'/home'} className="fw-bolder">Home Page</Link><br />
        <Link style={{ textDecoration: 'none' }} to={'/history'} className="fw-bolder">Watch History Page</Link><br />
      </div>
      <div className="col-lg-2">
        <h3 className="fw-bolder">Guids</h3><br />
        <Link style={{ textDecoration: 'none' }} to={'/'} className="fw-bolder">React</Link><br />
        <Link style={{ textDecoration: 'none' }} to={'/home'} className="fw-bolder">React Bootstrap</Link><br />
        <Link style={{ textDecoration: 'none' }} to={'/history'} className="fw-bolder">React Router</Link><br />
      </div>
      <div className="col-lg-3">
        <h3 className="fw-bolder">Contact US</h3><br />
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Enter Your Email here"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            <i class="fa-solid fa-right-long"></i>
          </Button>
        </InputGroup>
        <i class="fa-brands fa-twitter fs-5 me-5"></i>
        <i class="fa-brands fa-instagram fs-5 me-5"></i>
        <i class="fa-brands fa-facebook fs-5 me-5"></i>
        <i class="fa-brands fa-linkedin fs-5 me-5"></i>
        <i class="fa-brands fa-github fs-5 me-5"></i>
        <i class="fa-solid fa-phone fs-5 me-5"></i>
      </div>
    </div>
  )
}

export default Footer