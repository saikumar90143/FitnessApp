import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import styled from "styled-components";

import ExersiseInfo3 from "./ExersiseInfo3";

import MoreWorkouts3 from "./MoreworkOuts3";

const Exersise3 = () => {
  const Exersises = [
    "Stretching",
    "Jumping Jack 30x3",
    "Crunch 30x3",
    "Burpees 30x3",
    "Knee Squat 20x3",
    "Clap Push Up 10x3",
  ];

  return (
    <Wrapper>
      <MDBContainer fluid>
        <MDBRow className="my-5">
          <MDBCol size="12" md="4 text-start">
            <h3 className="ms-4">Exercises</h3>
            <div className=" ">
              {Exersises.map((elem, index) => {
                return (
                  <h6 key={index} className=" ms-5 mb-4">
                    {" "}
                    {elem}
                  </h6>
                );
              })}
            </div>
          </MDBCol>
          {/* video */}
          <MDBCol size="12" md="8">
            <div style={{ maxWidth: "800px", maxHeight: "400px" }}>
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/N3aSoC0HHdU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </MDBCol>
        </MDBRow>
        <ExersiseInfo3 />
        <MoreWorkouts3 />
      </MDBContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section``;
export default Exersise3;
