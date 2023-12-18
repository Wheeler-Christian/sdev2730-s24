import { createContext, useState } from "react";

export const UserContext = createContext({
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
});

function UserContextProvider({ children }) {
  // set up state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // set up functions to use state
  function addFirstName(newFirstName) {
    setFirstName(newFirstName);
  }

  function addLastName(newLastName) {
    setLastName(newLastName);
  }

  function addPhone(newPhone) {
    setPhone(newPhone);
  }

  function addEmail(newEmail) {
    setEmail(newEmail);
  }

  const value = {
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    email: email,
    setFirstName: setFirstName,
    setLastName: setLastName,
    setPhone: setPhone,
    setEmail: setEmail,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
