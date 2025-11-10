import Button from "../Button";
import Title from "./Title";

export default function Feedback() {
  return (
    <>
      <div className="feedback">
        <Title>
          <h2
            style={{
              fontSize: "1.5rem",
              textAlign: "center",
              borderTop: "1px solid black",
              borderBottom: "1px solid black",
              marginBlock: "1.5rem",
              paddingBlock: 12,
            }}
          >
            We Value Your Feedback
          </h2>
        </Title>
        <p>
          We’re gathering feedback from our customers at BAMOS DESIGN. Please
          take a moment to share your thoughts — your input helps us make BAMOS
          DESIGN even better.
        </p>
      </div>
    </>
  );
}
