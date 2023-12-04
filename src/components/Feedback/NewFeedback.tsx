import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../api/firebase";
import { TextField } from "@mui/material";
import css from "./NewFeedback.module.css";
import { IoMdClose } from "react-icons/io";

import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import sendMessageToTelegram from "../../services/Notice/sendMessageToTelegram";

const labels: { [index: string]: string } = {
  0: "nicht ausgewählt",
  1: "Sehr schlecht",
  2: "Schlecht",
  3: "Mittel",
  4: "Gut",
  5: "Ausgezeichnet!",
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}
interface IModal {
  setModalHide: (newValue: boolean) => void;
}

const NewFeedback = ({ setModalHide }: IModal): JSX.Element => {
  const [inputName, setInputName] = useState("");
  const [inputReview, setInputReview] = useState("");
  const [inputRating, setInputRating] = useState<number | null>(0);
  const [hover, setHover] = useState(-1);

  const addReview = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    addDoc(collection(db, "reviews"), {
      review: inputReview,
      name: inputName,
      rating: inputRating,
      timestamp: serverTimestamp(),
    });

    const message =
      "Новий коментар:" +
      "\n\n  Iм'я: " +
      inputName +
      "\n  Рейтинг: " +
      inputRating +
      "\n\n  " +
      inputReview +
      "\n\n https://fr-renovierungsarbeiten.github.io/info" +
      `${import.meta.env.VITE_REACT_APP_ROUTE}`;
    sendMessageToTelegram(message);

    setInputName("");
    setInputReview("");
    setInputRating(0);
    setModalHide(false);
  };

  return (
    <div className={css.reviewsContainer}>
      <button
        type="button"
        className={css.btn_close}
        onClick={() => setModalHide(false)}
      >
        <IoMdClose />
      </button>
      <form onSubmit={addReview} name="add_review" className={css.reviewForm}>
        <TextField
          className={css.inputName}
          required
          id="reviewName"
          value={inputName}
          maxRows={1}
          label="Ihr Name"
          variant="standard"
          onChange={(e) => setInputName(e.target.value)}
        />

        <p className={css.rating_title}>Bewerten Sie unsere Zusammenarbeit</p>
        <div className={css.inputRating}>
          <Rating
            name="hover-feedback"
            value={inputRating}
            precision={1}
            getLabelText={getLabelText}
            onChange={(_, newValue) => {
              setInputRating(newValue);
            }}
            onChangeActive={(_, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          {inputRating !== null && (
            <Box>
              {labels[hover !== -1 ? hover : inputRating]}
            </Box>
          )}
        </div>

        <textarea
          className={css.inputReview}
          required
          placeholder="Hinterlassen Sie Ihre Bewertung"
          maxLength={300}
          rows={4}
          onChange={(e) => setInputReview(e.target.value)}
          value={inputReview}
        />
        <button className={css.reviewButton} type="submit">
          Bewertung abschicken
        </button>
      </form>
    </div>
  );
};

export default NewFeedback;
