import { useState } from "react";

export default function FormSelect() {
  const [form, setForm] = useState({
    animal: "dog",
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // const show = () => {
  //   console.log(`どうやって知ったか：${form.howtoknow}`);
  // };

  return (
    <form style={{ border: "1px solid black", borderRadius: 2, padding: 8 }}>
      <label htmlFor="howtoknow"></label>
      <select
        name="howtoknow"
        id="howtoknow"
        value={form.howtoknow}
        onChange={handleForm}
        style={{ color: "black" }}
      >
        <option value="select">--1つ選択してください--</option>
        <option value="fromfriend">友人の紹介</option>
        <option value="SNS">SNS</option>
        <option value="webbanner">webバナー</option>
        <option value="videosite">動画配信サイト</option>
        <option value="add">広告・ポスター</option>
        <option value="other">その他</option>
      </select>
    </form>
  );
}
