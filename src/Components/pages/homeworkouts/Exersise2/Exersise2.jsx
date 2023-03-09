import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import styled from "styled-components";
import ExersiseInfo2 from "./ExersiseInfo2";
import MoreWorkouts2 from "./MoreworkOuts2";

const Exersise2 = () => {
  const Exersises = [
    "Back Pull",
    "Lower bench Press 30x3",
    "Squads 30x3",
    "Bent Over Pull 30x3",
    "Pull Ups 20x3",
    "Dead Lift 30x3",
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
                src="https://www.youtube.com/embed/QjJbfBq2SRs"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>{" "}
            </div>
          </MDBCol>
        </MDBRow>
        <ExersiseInfo2 />
        <MoreWorkouts2 />
      </MDBContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section``;
export default Exersise2;
