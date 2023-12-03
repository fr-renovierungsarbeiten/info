import { FC, useEffect, useState } from "react";
import {
  DocumentData,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../api/firebase";
import css from "./Gallery.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
  Zoom,
} from "swiper/modules";

const Gallery: FC = () => {
  const [gallery, setGallery] = useState<DocumentData[]>([]);
  useEffect(() => {
    const q = query(collection(db, "gallery"), orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      setGallery(
        snapshot.docs.map((document: DocumentData) => ({
          id: document.id,
          item: document.data(),
        }))
      );
    });
  }, []);

  return (
    <>
      <div className={css.gallery} id="projecte">
        <h2 className={css.galleryHeaderText}>BEISPIELPROJEKTE</h2>
        {gallery?.length > 0 && (
          <Swiper
            spaceBetween={30}
            effect={"slide"}
            navigation={true}
            grabCursor={true}
            zoom={true}
            loop={true}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              // type: 'fraction',
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[EffectCoverflow, Navigation, Pagination, Zoom, Autoplay]}
            style={{
              width: "90%",
              height: "auto",
            }}
            className="mySwiper"
          >
            {gallery.map((el) => (
              <SwiperSlide key={el.id} style={{ opacity: 1 }}>
                <div className={css.imageContainer}>
                  <div className="swiper-zoom-container">
                    <img className={css.image} src={el.item.link} alt="image" />
                  </div>
                  <p className={css.ImageDescription}>{el.item.description}</p>
                  <br />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </>
  );
};

export default Gallery;
