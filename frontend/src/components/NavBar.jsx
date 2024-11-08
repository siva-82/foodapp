import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { LinkContainer } from "react-router-bootstrap";
import { Badge, Modal, Spinner } from "react-bootstrap";
import { CartContext } from "../CartContext";
import CartProduct from "../pages/CartProduct";


import { useAuth0 } from "@auth0/auth0-react";


const NavBar = () => {

  const {  user, isAuthenticated,loginWithRedirect,logout  } = useAuth0();

  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [checkoutLoading,setCheckOutLoading]=useState(false)
  const checkout = async () => {
    console.log("checkout")
setCheckOutLoading(true)
    await fetch(`/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        setCheckOutLoading(false)
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
          localStorage.removeItem('cartFoods')
        }
      });
  };
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  
  return <>   <Navbar expand="lg" className="fixed-top  bg-body-tertiary">
  <Container>
    <LinkContainer to='/'> 
    <Navbar.Brand >Food</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className="justify-content-end flex-grow-1"id="basic-navbar-nav ">
      <Nav className="me-auto">
        <LinkContainer to='/'><Nav.Link >Home</Nav.Link></LinkContainer>
        <LinkContainer to='/Food'><Nav.Link >Menu</Nav.Link></LinkContainer>
        
      </Nav>
    </Navbar.Collapse>
    <Nav>
      <Nav.Link  onClick={handleShow}>Cart: <Badge className=" " bg="danger">{productsCount}</Badge> </Nav.Link>
      {isAuthenticated ? 
      (
      <>
      <Nav.Link >{user.name}</Nav.Link >
      <Nav.Link onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} >Logout</Nav.Link>
    
      </>) :( <Nav.Link  onClick={() => loginWithRedirect()} >Login</Nav.Link>
    
 )}
  </Nav>
  </Container>
  
</Navbar>

<Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shoping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>Items in your cart</p>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct
                  key={idx}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}              
                ></CartProduct>
                
              ))}

              <h1>Total Rs: {cart.getTotalCost().toFixed(2)}</h1>
              
              <Button variant="success" onClick={checkout}>
                {checkoutLoading? (<Spinner  className="mx-3 h-1 spinner-border text-light"
                  style={{ height: "20px", width: "20px" }}/>):"Purchase Items!"}
              </Button>
            </>
          ) : (
            <h6>There are no items in your Cart!</h6>
          )}
        </Modal.Body>
      </Modal>
</>

}


export default NavBar;
