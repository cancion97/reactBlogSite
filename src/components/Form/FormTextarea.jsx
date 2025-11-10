import { useState } from "react";

export default function FormTextarea({ value }) {
  const [form, setForm] = useState({
    comment: `ここに記入してください。`,
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // const show = () => {
  //   console.log(`コメント：${form.comment}`);
  // };

  return (
    <form style={{ border: "1px solid black", borderRadius: 2 }}>
      <label htmlFor="comment"></label>
      <br />
      <textarea
        name="comment"
        id="comment"
        cols="30"
        rows="7"
        value={form.comment}
        onChange={handleForm}
      ></textarea>
    </form>
  );
}
