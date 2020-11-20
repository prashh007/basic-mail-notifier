import React from "react";
import Notificatins from "./Notifications";

const Navbar = ({ mails, isNotified, toggleNotification }) => {
  const totalCount = mails.filter((mail) => !mail.isRead).length;
  return (
    <nav>
      <div className="logo">
        {" "}
        <a className="navbar-brand">BrandName</a>{" "}
      </div>
      <div className="icon" onClick={toggleNotification}>
        <i className="fa fa-bell-o fa-lg" aria-hidden="true"></i>{" "}
        {!isNotified && totalCount ? <span> {totalCount} </span> : null}
      </div>
      <Notificatins isNotified={isNotified} mails={mails} />
    </nav>
  );
};

export default Navbar;
