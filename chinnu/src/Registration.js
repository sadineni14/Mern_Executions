import React, { useState } from "react";

function Registration() {

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    password: "",
    gender: ""
  });

  const change = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(formData); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="User name"
        value={formData.name}
        onChange={change}
      />

      <br /><br />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={change}
      />

      <br /><br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={change}
      />

      <br /><br />

      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={change}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={change}
          />
          Female
        </label>
      </div>

      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Registration;