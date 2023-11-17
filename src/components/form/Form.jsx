import React, { useState } from "react";
import validation from "../../utilities/validation";

function Form(props) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const HandleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
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

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-900">
      <form
        onSubmit={handleSubmit}
        className="bg-green-800 h-96 w-96 flex flex-col justify-center items-center rounded-lg shadow-lg p-8 text-white"
      >
        <img
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="Rick and Morty"
          className="w-24 h-24 mb-4 rounded-full"
        />
        <input
          className="bg-transparent border-b-2 border-white mb-4 p-2 outline-none placeholder-white focus:placeholder-opacity-75 text-white"
          onChange={HandleChange}
          type="text"
          placeholder="Enter your dimension"
          value={userData.email}
          name="email"
        />
        <p className="text-red-500 text-sm mb-4">
          {errors.email ? errors.email : null}
        </p>
        <input
          onChange={HandleChange}
          type="password"
          placeholder="Password"
          value={userData.password}
          name="password"
          className="bg-transparent border-b-2 border-white mb-4 p-2 outline-none placeholder-white focus:placeholder-opacity-75 text-white"
        />
        <p className="text-red-500 text-sm mb-8">
          {errors.password ? errors.password : null}
        </p>
        <button
          type="submit"
          disabled={errors.email || errors.password}
          className="bg-green-500 text-purple-700 py-2 px-4 rounded-md mt-4 hover:bg-green-600 transition duration-300"
        >
          Wubba Lubba Dub Dub!
        </button>
      </form>
    </div>
  );
}

export default Form;
