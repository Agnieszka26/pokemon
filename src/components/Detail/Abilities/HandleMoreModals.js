import React, {useState} from "react";
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";

import ScreenOne from "./components/screen-one/ScreenOne";
import ScreenTwo from "./components/screen-two/ScreenTwo";
import ScreenThree from "./components/screen-three/ScreenThree";

import ModalOne from "./components/common/modal-one/ModalOne";
import ModalTwo from "./components/common/modal-two/ModalTwo";
import ModalThree from "./components/common/modal-three/ModalThree";

import "./app-shell.css";

const AppShell = () => {
  const [modalOpen, setModal] = useState(false);

  const openModal = (event) => {
    event.preventDefault();
    const {
      target: {
        dataset: {modal},
      },
    } = event;
    if (modal) setModal(modal);
  };

  const closeModal = () => {
    setModal("");
  };

  return (
    <BrowserRouter>
      <div className="app--shell" onClick={openModal}>
        {/* Application header and navigation */}
        <header className="app--header">
          <h1>React Modal Windows</h1>
          <nav className="app--nav">
            <NavLink to="/screen-one">Screen One</NavLink>
            <NavLink to="/screen-two">Screen Two</NavLink>
            <NavLink to="/screen-three">Screen Three</NavLink>
          </nav>
        </header>

        {/* Application screens */}
        <Switch>
          <Route path="/screen-three">
            <ScreenThree />
          </Route>
          <Route path="/screen-two">
            <ScreenTwo />
          </Route>
          <Route path="/screen-one">
            <ScreenOne />
          </Route>
          <Route exact path="/">
            <ScreenOne />
          </Route>
        </Switch>

        {/* Modals */}
        <ModalOne closeFn={closeModal} open={modalOpen === "modal-one"} />

        <ModalTwo closeFn={closeModal} open={modalOpen === "modal-two"} />

        <ModalThree closeFn={closeModal} open={modalOpen === "modal-three"} />

        {/* Application footer */}
        <footer className="app--footer">
          <p className="copyright">&copy; 2021 Some Company</p>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default AppShell;
