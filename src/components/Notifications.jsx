import React from "react";

const Notificatins = ({ mails, isNotified }) => {
  let imgUrl = `https://cdn3.iconfinder.com/data/icons/avatars-neutral/48/bl_819_avatar_employee_coder_programmer_designer_male_man-512.png`;
  let styles = isNotified
    ? { height: 510, opacity: 1 }
    : { height: 0, opacity: 0 };
  let bgStyle = { backgroundColor: "#eee !important" };
  console.log("mails", mails);
  return (
    <div className="notifi-box" style={styles} id="box">
      <h2>
        UnRead Notifications{" "}
        <span>{mails.filter((mail) => mail.isRead).length}</span>
      </h2>
      {mails.map((mail) => (
        <div
          key={mail.id}
          className={mail.isRead ? "notifi-item readColor" : "notifi-item"}
        >
          <img src={imgUrl} alt="img" />
          <div className="text">
            <h4>{mail.title}</h4>
            <p>{mail.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notificatins;
