import { ChangeEvent, FormEvent, useState } from "react";
import InputMask from "react-input-mask";
import css from "./ContactUs.module.css";
import { initContacUsForm } from "./interfaces/IContactUsForm";
import { Container, TextField } from "@mui/material";
import sendMessageToTelegram from "../../services/Notice/sendMessageToTelegram";
import ReCAPTCHA from "react-google-recaptcha";

import { SlEnvolope, SlHome, SlPhone } from "react-icons/sl";
import { calculateRecapchaScale } from "../../services/scaleService";

export default function Contacts(): JSX.Element {
  const [
    { firstName, lastName, email, phoneNumber, questionText },
    setContactFormData,
  ] = useState(initContacUsForm);
  const maxLength = 500;
  const [charLeft, setCharLeft] = useState(maxLength);
  const [isReCapcha, setReCapcha] = useState(false);

  const collectAboutUsData = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setContactFormData((prev) => ({ ...prev, [name]: value }));

    if (questionText.length <= maxLength) {
      setCharLeft(maxLength - questionText.length);
    }
  };

  const handleCreateRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message =
      "Новий запит на сайтi:" +
      "\n\n  Iм'я: " +
      firstName +
      "\n  Фамiлiя: " +
      lastName +
      "\n  E-mail: " +
      email +
      "\n  Телефон: " +
      phoneNumber +
      "\n\n  " +
      questionText;
    sendMessageToTelegram(message);

    setContactFormData(initContacUsForm);
  };

  const handleRecaptchaChange = (value: string | null) => {
    setReCapcha(value != null);
  };

  return (
    <>
      <div className={css.contactsMain} id="Contacts">
        <div className={css.contactsContainer}>
          <div className={css.leftBlock}>
        <h2 className={css.title}>KONTAKT</h2>

            <div className={css.nameBlock}>
              <p className={css.nameText}>Rostyslav Felyshchuk</p>
            </div>
            <div className={css.address}>
              <p className={css.addressText}>
                <SlHome className={css.iconLocation} />
                Adresse: 14480 Potsdam, Hans-Grade-Ring 36
              </p>
            </div>

            <div className={css.mailBlock}>
              <SlEnvolope className={css.iconMail} />
              <span className={css.spanText}> E-mail: </span>
              <a
                href="mailto:rostyslav.felyshchuk@gmail.com"
                className={css.mail}
              >
                rostyslav.felyshchuk@gmail.com
              </a>
            </div>

            <div className={css.phonesBlock}>
                <SlPhone className={css.iconPhone} />
              <span className={css.spanText}> Phone: </span>
              <a href="tel:01631288635" className={css.phone}>
                01631288635
              </a>
              <a href="tel:01775729872" className={css.phone}>
                01775729872
              </a>
            </div>
          </div>

          <div className={css.rightBlock}>
            <Container>
              <h3>Haben Sie eine Frage an uns?</h3>
              <br />
              <form
                className={css.contacts_form}
                onSubmit={handleCreateRequest}
              >
                <div className={css.contacts_input_div}>
                  <TextField
                    className="form-control"
                    label="Vorname"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={collectAboutUsData}
                    size="small"
                    fullWidth
                    required
                  />
                </div>
                <div className={css.contacts_input_div}>
                  <TextField
                    className="form-control"
                    label="Name"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={collectAboutUsData}
                    size="small"
                    fullWidth
                    required
                  />
                </div>
                <div className={css.contacts_input_div}>
                  <TextField
                    className="form-control"
                    label="E-Mail"
                    type="email"
                    name="email"
                    value={email}
                    onChange={collectAboutUsData}
                    size="small"
                    fullWidth
                    required
                  />
                </div>
                <div className={css.contacts_input_div}>
                  <InputMask
                    mask="+4 9(999) 999-9999"
                    className={css.form_control}
                    type="tel"
                    placeholder="+4 9(___) ___-____"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={collectAboutUsData}
                  />
                </div>
                <p className={css.contacts_info}>
                  Wir werden Ihre Daten niemals mit jemand anderem teilen
                </p>
                <div>
                  <textarea
                    className={css.questionTextInput}
                    id="questionTextInput"
                    rows={6}
                    maxLength={maxLength}
                    placeholder="Schreiben Sie hier Ihre Frage..."
                    name="questionText"
                    value={questionText}
                    onChange={collectAboutUsData}
                    style={{ resize: "none" }}
                    required
                  />
                  <p className={css.contacts_info_charLeft}>
                    Noch {charLeft} Zeichen verfügbar
                  </p>
                </div>
                <div className={css.recapcha}>
                  <ReCAPTCHA
                    style={{
                      transform: `scale(${calculateRecapchaScale()})`,
                    }}
                    sitekey={`${import.meta.env.VITE_REACT_APP_RECAPCHA}`}
                    onChange={handleRecaptchaChange}
                  />
                </div>
                <div className={css.btnContainer}>
                  <button
                    type="submit"
                    disabled={!isReCapcha}
                    className={
                      isReCapcha ? css.requestButton : css.requestButtonOff
                    }
                  >
                    Anfrage senden
                  </button>
                </div>
              </form>
            </Container>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9742.133216615364!2d13.116959698364251!3d52.37888189724196!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85f15177ae319%3A0xc00070f77ab1cd24!2sHans-Grade-Ring%2036%2C%2014480%20Potsdam!5e0!3m2!1sru!2sde"
          className={css.map}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
