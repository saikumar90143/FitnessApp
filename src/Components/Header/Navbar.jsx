import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  MDBBtn,
  MDBCollapse,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBTypography,
} from "mdb-react-ui-kit";
const Navbar = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [show, setShow] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const el = headerRef.current;
    const size = window.matchMedia("(maxWidth:10em)");

    gsap.to(el, {
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      border: "1px solid gray",
      borderRadius: "0 0 20px 20px",
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: el,
        start: "bottom+=500 top",
        end: "+=250",
        scrub: true,
      },
    });
  }, []);
  return (
    <Wrapper ref={headerRef}>
      <MDBNavbar expand="md">
        <MDBContainer fluid>
          <MDBNavbarBrand>
            <Link to="/">
              {" "}
              <MDBTypography
                className="fw-bolder"
                style={{ color: "var(--blue)" }}
              >
                <span>Fitness</span>
                <span style={{ textDecoration: "overline" }}>Freak</span>
              </MDBTypography>{" "}
            </Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler aria-label="Toggle navigation" airal-expand="false">
            <MDBIcon icon="bars" fas onClick={() => setShow(!show)} />
          </MDBNavbarToggler>
          <MDBCollapse show={show} navbar>
            <MDBNavbarNav
              right
              fullWidth={false}
              onClick={() => setShow(false)}
              className="gap-3 align-items-center "
            >
              <MDBNavbarItem>
                <NavLink to="/about">About</NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink to="/freeplan">Free Workouts</NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink to="/shop">Shop</NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink to="/contact">
                  <MDBBtn className="button">
                    {" "}
                    <MDBIcon icon="angle-right" fas /> Book a Call
                  </MDBBtn>
                </NavLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  z-index: 999;
  text-align: center;
  background-color: white;

  ul {
    li {
      a {
        color: var(--blue);
      }
    }
  }
`;

export default Navbar;
