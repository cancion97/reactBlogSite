import { useState } from "react";

export default function FormRadio() {
  const [form, setForm] = useState({
    age: "0-10",
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const show = () => {
    console.log(`Age：${form.age}`);
  };

  return (
    <form>
      <input
        type="radio"
        name="age"
        id="age"
        value="0-10"
        checked={form.age === "0-10"}
        onChange={handleForm}
      />
      <label style={{ marginInlineEnd: 16 }} htmlFor="age">
        0-10
      </label>

      <input
        type="radio"
        name="age"
        id="age"
        value="10-20"
        onChange={handleForm}
      />
      <label style={{ marginInlineEnd: 16 }} htmlFor="age">
        10-20
      </label>

      <input
        type="radio"
        name="age"
        id="age"
        value="20-30"
        onChange={handleForm}
      />
      <label style={{ marginInlineEnd: 16 }} htmlFor="age">
        20-30
      </label>

      <input
        type="radio"
        name="age"
        id="age"
        value="30-40"
        onChange={handleForm}
      />
      <label style={{ marginInlineEnd: 16 }} htmlFor="age">
        30-40
      </label>

      <input
        type="radio"
        name="age"
        id="age"
        value="40-50"
        onChange={handleForm}
      />
      <label style={{ marginInlineEnd: 16 }} htmlFor="age">
        40-50
      </label>

      <input
        type="radio"
        name="age"
        id="age"
        value="50andabove"
        onChange={handleForm}
      />
      <label style={{ marginInlineEnd: 16 }} htmlFor="age">
        50 and above
      </label>
    </form>
  );
}
