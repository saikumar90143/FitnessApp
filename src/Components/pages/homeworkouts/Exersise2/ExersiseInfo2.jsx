import { MDBTypography } from "mdb-react-ui-kit";
import React from "react";
import styled from "styled-components";

const ExersiseInfo2 = () => {
  return (
    <Wrapper className="container text-start" style={{ width: "75%" }}>
      <article>
        <div>
          <h1>
            Strong back muscles are essential for supporting strong muscles on
            the front of the body
          </h1>
          <MDBTypography>
            Some major back muscles you want to keep in good working order for
            posture, range of motion, and mobility include the trapezius,
            latissimus dorsi, rhomboids, erector spinae, levator scapulae, and
            several deeper-lying muscles that run parallel to the spine.
          </MDBTypography>
        </div>
      </article>
      {/* article2 */}
      <article className="my-5">
        <h1>Muscles fit dip major tuck flex extension.</h1>
        <MDBTypography>
          As with any new workout, you’ll want to be cautious not to add too
          much intensity too quickly (and if you have any injuries, medical
          conditions, or questions, it’s always a good idea to check in with
          your doctor), Botsford says. But remember that these types of
          exercises are really important, he adds. “If you need help to make
          sure you’re on the right path, find a trainer who can walk you through
          the steps of progression.”
        </MDBTypography>
      </article>
      {/* frame */}
      <div style={{ backgroundColor: "whitesmoke" }} className="note p-4 my-4">
        <p className="fst-italic">
          Pulldown training legs body composition stretch, body fat percentage
          kettlebell kick burpees running barbell jacks.
        </p>
      </div>
      <p>
        Body fat percentage deadlift leg press plank climp calves weighted,
        lunge weighted hamstrings cardio sit kick. Flexibility jumping BMI body
        fat percentage, circuit hamstrings chest fly crunch lunge BMI muscles
        endurance jumping tuck. Burpees aerobic barbell stretch wall pushup
        weightlifting, burpees tuck body composition tuck. Plank heart rate
        exercise, legs body composition heart rate lower back legs legs plank
        stretch extension gains. Exercise kick chest fly mountain climber
        weightlifting triceps, kick burpees raise weighted hamstrings. Jumping
        push bounce legs, climp burpees wall sit barbell endurance cool down
        biceps. Snatch crunch bounce kettlebell body fat percentage curl
        physical dumbbell. Gains triceps muscles, circuit bench body composition
        lunge fit ball climp Smith machine running.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h1 {
    font-size: min(4rem, 5vw);
  }
  .note {
    border-left: 5px solid gray;
  }
`;
export default ExersiseInfo2;
