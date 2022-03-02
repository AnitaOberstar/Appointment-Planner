import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  
  const [contact, setContacts] = useState([]);
  const [app, setApp] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const newContact = (name, email, phone) => {
    const newContact = {
      name: name,
      email: email, 
      phone: phone
    };

    setContacts(prev => {
      return [...prev, newContact];
    });
  }

  const newApp = (title, contact, date, time) => {
    const newApp = {
      title: title, 
      contact: contact, 
      date: date, 
      time: time
    }

    setApp(prev => {
      return [...prev, newApp];
    }); 
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage contacts={contact} handleNewContact={newContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage contacts={contact} app={app} handleNewApp={newApp} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;