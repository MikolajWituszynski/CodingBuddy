import React from "react";
import styles from "./AccountPage.module.css";

const AccountPage = () => {
  return (
    <>
      <h1>Your Account</h1>
      <div className={styles.container}>
        <div className={styles["picture-frame"]}>Picture</div>
        <div className={styles.subcontainer}>
          <div className={styles.description}>Description</div>
          <div className={styles["i-know"]}>I Know dropdown table</div>
          <div className={styles.status}>Status dropdown table</div>
        </div>
      </div>
      <p>I know...</p>
      <p>I learn... (Status)</p>
    </>
  );
};

export default AccountPage;
