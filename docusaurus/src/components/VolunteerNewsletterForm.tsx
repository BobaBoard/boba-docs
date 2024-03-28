import React from "react";
import clsx from "clsx";
import styles from "./VolunteerNewsletterForm.module.css";

const VolunteerNewsletterForm = () => {
  return (
    <form
      action="https://buttondown.email/api/emails/embed-subscribe/bobolunteers"
      method="post"
      target="popupwindow"
      onSubmit={() => {
        window.open("https://buttondown.email/bobolunteers", "popupwindow");
      }}
      className="embeddable-buttondown-form alert alert--primary"
    >
      <div className={styles.heading}>Volunteering Newsletter</div>
      <label>
        Enter your email:
        <input
          type="email"
          name="email"
          id="bd-email"
          className="margin-horiz--sm"
        />
      </label>
      <input
        type="submit"
        value="Subscribe"
        className={clsx("button button--success", styles.btn)}
      />
      <div className={styles.small}>
        <a href="https://buttondown.email/refer/bobolunteers" target="_blank">
          Powered by Buttondown.
        </a>
      </div>
    </form>
  );
};

export default VolunteerNewsletterForm;
