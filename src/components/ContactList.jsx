import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const renderList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id}
        clickHandler={deleteContactHandler}
      />
    );
  });

  return (
    <div className="ui celled list">
      <h1>Contact List</h1>
      {renderList}
    </div>
  );
};

export default ContactList;
