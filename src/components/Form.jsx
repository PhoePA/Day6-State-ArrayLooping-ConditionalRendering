import React from "react";
import { useState } from "react";
import Card from "./Card";

const Form = (props) => {
  const [name, setName] = useState("");
  const [live, setLive] = useState("");
  const [email, setEmail] = useState("");

  const addUser = (event) => {
    event.preventDefault();
    if (
      name.trim().length === 0 ||
      live.trim().length === 0 ||
      email.trim().length === 0
    ) {
      window.confirm("Please fill all of your Information!");
      return;
    }

    const userInfos = {
      name,
      live,
      email,
    };

    props.getUserInfo(userInfos);
    setName("");
    setLive("");
    setEmail("");
  };

  return (
    <Card>
      <form onSubmit={addUser}>
        <div className="form-div">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="form-div">
          <label htmlFor="live">Live</label>
          <input
            type="text"
            id="live"
            value={live}
            onChange={(event) => {
              setLive(event.target.value);
            }}
          />
        </div>
        <div className="form-div">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <button className="btn" type="submit">
          Add User
        </button>
      </form>
    </Card>
  );
};

export default Form;
