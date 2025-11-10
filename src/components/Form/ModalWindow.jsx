import Fox from "./../../assets/images/fox.jpg";
import Button from "../Button";
import FormRadio from "./FormRadio";
import FormSelect from "./FormSelect";
import FormCheckMulti from "./FormCheckMulti";
import FormTextarea from "./FormTextarea";

export default function ModalWindow() {
  return (
    <>
      <img src={Fox} alt="キツネの写真" />
      <div className="formtext">
        <h2>FEEDBACK</h2>
        <p>
          Thank you for visiting BAMOS DESIGN.Please take a moment to complete
          our survey to help us improve our services.
        </p>
        <h3>Age</h3>
        <FormRadio />
        <h3>How did you hear about BAMOS DESIGN?</h3>
        <FormSelect />
        <h3>What is your favorite field or area of interest?</h3>
        <FormCheckMulti />
        <h3>
          What kind of special features or topics would you like to read on
          BAMOS DESIGN in the future?
        </h3>
        <FormTextarea />
        <Button type="submit" classname="submitbtn" btnname="SUBMIT" />
      </div>
    </>
  );
}
