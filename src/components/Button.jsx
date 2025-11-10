export default function Button({ btnname, classname, onClick, type }) {
  return (
    <>
      <button type={type} className={classname} onClick={onClick}>
        {btnname}
      </button>
    </>
  );
}
