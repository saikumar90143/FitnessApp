import { MDBTypography } from "mdb-react-ui-kit";
import React from "react";
import styled from "styled-components";

const ExersiseInfo = () => {
  return (
    <Wrapper className="container text-start" style={{width:"75%"}}>
      <article>
        <div>
          <h1>
            Body fat percentage weightlifting pull upper body kick abs curl
            climp lower body.
          </h1>
          <MDBTypography>
            Pull jacks wall, pectorals bench exercise walkout push kick ball.
            Equipment exercise lats, jump kick jump upper back fitness dip
            pulldown tuck calves. Ball weighted flexibility calves arm, climp
            gym hip flexor gym aerobic aerobic pull sit weightlifting. Jumping
            tuck biceps aerobic running jump lunge bounce wall, jumping heart
            rate hamstrings fitness.
          </MDBTypography>
        </div>
      </article>
      {/* article2 */}
      <article className="my-5">
        <h1>Muscles fit dip major tuck flex extension.</h1>
        <MDBTypography>
          Walkout heart rate barbell, leg press running bounce stretch kick
          weighted pectorals crosstraining. Jacks aerobic warm up jumping legs
          fitness, dip major curl barbell calves. Jacks stretch pectorals, bench
          abs biceps calves lower arm extension leg. Abs body fat percentage
          Smith machine curl upper body heart rate wall upper body deadlift.
          Burpees legs cardio walking push legs chin up Smith machine, curl bear
          crawl arm deadlift leg press sit. Crunch training wall, lower back
          hamstrings lower jacks lower abs jump. Leg press burpees dip body
          composition, fitness deadlift upper body bear crawl BMI tuck. Cool
          down upright row curl pull heart rate flexibility mountain climber
          bench.
        </MDBTypography>
      </article>
      {/* frame */}
      <div style={{backgroundColor:"whitesmoke"}} className='note p-4 my-4'>
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
h1{
  font-size: min(4rem,5vw);
}
.note{
  border-left: 5px solid gray;
}
`;
export default ExersiseInfo;
