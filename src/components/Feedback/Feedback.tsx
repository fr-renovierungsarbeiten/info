import { FC, useEffect, useState } from "react";
import {
  DocumentData,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../api/firebase";
import scss from "./Feedback.module.scss";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Rating from "@mui/material/Rating";

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import Modal from "../Modal/Modal";
import { calculateRecapchaScale } from "../../services/scaleService";

const Feedback: FC = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const [reviews, setReviews] = useState<DocumentData[]>([]);
  useEffect(() => {
    const q = query(collection(db, "reviews"), orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      setReviews(
        snapshot.docs.map((document: DocumentData) => ({
          id: document.id,
          item: document.data(),
        }))
      );
    });
  }, []);
  const modalShow = () => {
    setIsModalShow(true);
  };

  return (
    <>
      <div className={scss.feedback_background} id="Feedback">
        <div className={`${scss.feedbackHeader}`}>
          <h2 className={scss.feedback_header_text}>
            <BorderColorOutlinedIcon
              className={scss.feedbaccomment_ico}
              style={{
                transform: `scale(${calculateRecapchaScale()})`,
              }}
            />
            Kundenbewertungen
          </h2>
          {reviews?.length > 0 && (
            <Swiper
              grabCursor={true}
              spaceBetween={30}
              effect={"slide"}
              loop={true}
              navigation={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
              style={{
                width: "90%",
              }}
              className="mySwiper"
            >
              {reviews.map((el) => (
                <SwiperSlide
                  key={el.id}
                  style={{ opacity: 1, pointerEvents: "none" }}
                >
                  <div className={scss.reviewsContainer}>
                    <p className={scss.review_name}>
                      {" "}
                      <strong>{el.item.name}</strong>
                    </p>

                    <Rating
                      name="ratingR"
                      value={el.item.rating}
                      readOnly
                      style={{
                        transform: `scale(${calculateRecapchaScale()})`,
                      }}
                    />
                    <div className={scss.review_body}>{el.item.review}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          <button className={scss.reviewButton} onClick={() => modalShow()}>
            Bewertung schreiben
          </button>
          {isModalShow && <Modal setModalHide={setIsModalShow} />}
        </div>
      </div>
    </>
  );
};

export default Feedback;
