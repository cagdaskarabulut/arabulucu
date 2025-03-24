import { Button, Grid, TextField } from "@material-ui/core";
import MyBreadcrumbs from "@/components/tools/MyBreadcrumbs";
import React, { useEffect, useState } from "react";
import MyResultMessage from "./tools/MyResultMessage";
import InputMask from "react-input-mask";
import styles from "./MessageForm.module.scss";
import classNames from "classnames";
import MyAlert from "./tools/MyAlert";

const MessageForm = () => {
  const _buttonClassName = classNames(styles.pageButtonStyle);
  const [message, setMessage] = useState({
    name: "",
    email: "",
    phonenumber: "",
    content: "",
  });
  // const [successMessage, setSuccessMessage] = useState("");
  const [isRequiredFieldsError, setIsRequiredFieldsError] = useState(false);
  const [isSentMessageOpen, setIsSentMessageOpen] = useState(false);

  const onSubmit = async () => {
    setIsRequiredFieldsError(false);
    if (
      message.name == "" ||
      message.phonenumber == "" ||
      message.content == "" ||
      !validateEmail(message.email)
    ) {
      setIsRequiredFieldsError(true);
      return;
    }

    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ name: "", email: "", phonenumber: "", content: "" });
        setIsSentMessageOpen(true);
      } else {
        alert(
          "Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        "Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz."
      );
    }
  };

  const validateEmail = (email) => {
    if (email.length < 1) {
      return true;
    }

    const expression =
      /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return expression.test(String(email).toLowerCase());
  };

  return (
    <>
      <MyBreadcrumbs
        link1Title="İletişim"
        link1Href="/iletisim"
        activePageNumber="1"
      />
      <h2 className={styles.titleStyle}>İletişim</h2>

      <Grid item xs={12} className={styles.iletisimFormStyle}>
        <TextField
          required
          variant="standard"
          className={styles.tipMenu}
          fullWidth
          label="Ad Soyad"
          value={message.name}
          onChange={(e) => setMessage({ ...message, name: e.target.value })}
          error={
            isRequiredFieldsError && message.name.length < 1 ? true : false
          }
          helperText={
            isRequiredFieldsError && message.name.length < 1
              ? "Zorunlu alan"
              : ""
          }
        />
      </Grid>
      <br />
      <br />
      <Grid item xs={12}>
        <TextField
          type="email"
          variant="standard"
          className={styles.tipMenu}
          fullWidth
          label="Email"
          value={message.email}
          onChange={(e) => setMessage({ ...message, email: e.target.value })}
          error={
            message.email.length > 1 && !validateEmail(message.email)
              ? true
              : false
          }
          helperText={
            message.email.length > 0 && !validateEmail(message.email)
              ? "Geçersiz email formatı"
              : ""
          }
        />
      </Grid>
      <br />
      <br />
      <Grid item xs={12}>
        <InputMask
          mask="(0999) 999 99 99"
          value={message.phonenumber}
          disabled={false}
          maskChar=" "
          onChange={(e) =>
            setMessage({ ...message, phonenumber: e.target.value })
          }
        >
          {() => (
            <TextField
              required
              fullWidth
              className={styles.tipMenu}
              variant="standard"
              label="Telefon"
              error={
                isRequiredFieldsError && message.phonenumber.length < 1
                  ? true
                  : false
              }
              helperText={
                isRequiredFieldsError && message.phonenumber.length < 1
                  ? "Zorunlu alan"
                  : ""
              }
            />
          )}
        </InputMask>
      </Grid>
      <br />
      <br />
      <Grid item xs={12}>
        <TextField
          required
          minRows={4}
          variant="filled"
          className={styles.tipMenu}
          fullWidth
          label="Mesaj"
          multiline
          maxRows={4}
          value={message.content}
          onChange={(e) => setMessage({ ...message, content: e.target.value })}
          error={
            isRequiredFieldsError && message.content.length < 1 ? true : false
          }
          helperText={
            isRequiredFieldsError && message.content.length < 1
              ? "Zorunlu alan"
              : ""
          }
        />
      </Grid>
      <br />
      <br />
      <Grid item xs={12}>
        <button onClick={onSubmit} className={_buttonClassName}>
          Mesajı Gönder
        </button>
      </Grid>
      <br />
      <br />
      <Grid item xs={12}>
        {/* <MyResultMessage
          isVisible={successMessage != "" ? "" : "none"}
          leftContent={successMessage}
          leftContentStyle={styles.successMessageStyle}
        /> */}
        <MyAlert
          text="Mesajınız başarıyla gönderildi"
          isOpen={isSentMessageOpen}
          setIsOpen={setIsSentMessageOpen}
        />
      </Grid>
    </>
  );
};

export default MessageForm;
