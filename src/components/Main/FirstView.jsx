import FirstviewImage from "./../../assets/images/firstview.jpg";

export default function Firstview({ children }) {
  return (
    <>
      <div className="firstview">
        <img src={FirstviewImage} alt="写真" />
        {children}
      </div>
    </>
  );
}
