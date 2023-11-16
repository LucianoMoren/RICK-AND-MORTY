import React, { useState } from "react";
import validation from "../../utilities/validation";

function Form(props) {
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const HandleChange = (event) => {
    const { name, value } = event.target;
    setuserData({
      ...userData,
      [name]: value,
    });
    setErrors(
      validation({
        ...userData,
        [name]: value,
      })
    );
  };

  function handleSubmit(event) {
    event.preventDefault();

    props.login(userData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={HandleChange}
          type="text"
          placeholder="Email"
          value={userData.email}
          name="email"
        />
        <p style={{ color: "coral" }}>{errors.email ? errors.email : null}</p>
        <input
          onChange={HandleChange}
          type="password"
          placeholder="Password"
          value={userData.password}
          name="password"
        />
        <p style={{ color: "coral" }}>
          {errors.password ? errors.password : null}
        </p>
        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
