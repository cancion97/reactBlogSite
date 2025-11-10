import { useState } from "react";

export default function FormCheckMulti() {
  const [form, setForm] = useState({
    genre: ["music", "art"],
  });

  const handleFormMulti = (e) => {
    const fa = form.genre;
    if (e.target.checked) {
      fa.push(e.target.value);
    } else {
      fa.splice(fa.indexOf(e.target.value), 1);
    }

    setForm({
      ...form,
      [e.target.name]: fa,
    });
  };

  // const show = () => {
  //   console.log(`興味のあるジャンル：${form.genre}`);
  // };

  return (
    <form>
      <input
        id="music"
        name="music"
        type="checkbox"
        value="music"
        checked={form.genre.includes("music")}
        onChange={handleFormMulti}
      />
      <label style={{ marginInlineEnd: 16 }} htmlFor="music">
        音楽
      </label>

      <input
        id="art"
        name="art"
        type="checkbox"
        value="art"
        checked={form.genre.includes("art")}
        onChange={handleFormMulti}
      />
      <label style={{ marginInlineEnd: 16 }} htmlFor="art">
        芸術
      </label>

      <input
        id="design"
        name="design"
        type="checkbox"
        value="design"
        checked={form.genre.includes("design")}
        onChange={handleFormMulti}
      />
      <label style={{ marginInlineEnd: 16 }} htmlFor="design">
        デザイン
      </label>

      <input
        id="programming"
        name="programming"
        type="checkbox"
        value="programming"
        checked={form.genre.includes("programming")}
        onChange={handleFormMulti}
      />

      <label style={{ marginInlineEnd: 16 }} htmlFor="programming">
        プログラミング
      </label>
    </form>
  );
}
