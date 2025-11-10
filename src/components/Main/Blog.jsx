import Blogtitle from "./Title";
import ForList from "./Cards";
import bamosList from "../bamosList";
import Title from "./Title";

export default function Blog() {
  return (
    <>
      <section style={{ margin: "1rem" }}>
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
            Latest Blog Posts
          </h2>
        </Title>

        <div className="postBox">
          <ForList src={bamosList} init={bamosList} />
        </div>
      </section>
    </>
  );
}
