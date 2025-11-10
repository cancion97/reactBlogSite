import StateModal from "../Form/Modal";
import Blog from "./Blog";
import Feedback from "./Feedback";
import Firstview from "./FirstView";

export default function Main() {
  return (
    <>
      <main>
        <Firstview>
          <h1>BAMOS DESIGN</h1>
        </Firstview>
        <Blog />
        <Feedback />
        <StateModal />
      </main>
    </>
  );
}
