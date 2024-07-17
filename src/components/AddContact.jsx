import React, { useState } from "react";

const AddContact = ({ addContactHandler }) => {
  const [formValues, setFormValues] = useState({ name: "", email: "" });

  const add = (e) => {
    e.preventDefault();
    if (formValues.name && formValues.email === "") {
      alert("All the feilds are mandatory");
      return;
    }

    addContactHandler({ ...formValues });
    setFormValues({ name: "", email: "" });
  };
  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formValues.name}
            onChange={(e) =>
              setFormValues((prevValues) => ({
                ...prevValues,
                name: e.target.value,
              }))
            }
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={(e) =>
              setFormValues((prevValues) => ({
                ...prevValues,
                email: e.target.value,
              }))
            }
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
