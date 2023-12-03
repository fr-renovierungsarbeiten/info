import React, { useEffect, useState } from "react";
import {
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../api/firebase";
import { AiOutlineDelete } from "react-icons/ai";

import css from "./GalleryAdmin.module.css";

export default function GalleryAdmin(): JSX.Element {
  const [galleryList, setGalleryList] = useState<DocumentData[]>([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [description, setDescription] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [link, setLink] = useState("");
  const [editLink, setEditLink] = useState("");

  useEffect(() => {
    const q = query(collection(db, "gallery"), orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      setGalleryList(
        snapshot.docs.map((document: DocumentData) => ({
          id: document.id,
          item: document.data(),
        }))
      );
    });
  }, []);

  const addImage = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    addDoc(collection(db, "gallery"), {
      description,
      link,
      timestamp: serverTimestamp(),
    });
    setDescription("");
    setLink("");
  };

  return (
    <>
      <form onSubmit={addImage} name="add_image">
        <input
          className={css.descriptionInput}
          type="text"
          value={description}
          placeholder="Назва зображення"
          onChange={(e) => setDescription(e.target.value)}
        />{" "}
        <input
          className={css.linkInput}
          type="text"
          value={link}
          required
          placeholder="посилання на зображення"
          onChange={(e) => setLink(e.target.value)}
        />
        <button className={css.addButton} type="submit">
          Створити запис
        </button>
      </form>
      <br />
      <div>
        {galleryList.map((el) => (
          <div key={el.id}>
            <button
              title="Видалити"
              className={css.deleteButton}
              type="button"
              onClick={() => {
                deleteDoc(doc(db, "gallery", el.id));
              }}
            >
              <AiOutlineDelete />
            </button>{" "}
            {selectedImage === el.id ? (
              <>
                <input
                  className={css.descriptionInput}
                  type="text"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                />
                <input
                  className={css.linkInput}
                  type="text"
                  value={editLink}
                  onChange={(e) => {
                    setEditLink(e.target.value);
                  }}
                />{" "}
                <button
                  className="btnCancel"
                  onClick={() => setSelectedImage(null)}
                >
                  Скасувати
                </button>{" "}
                <button
                  className="btnOk"
                  onClick={() => {
                    updateDoc(doc(db, "gallery", el.id), {
                      description: editDescription,
                      link: editLink,
                    });
                    setEditDescription("");
                    setEditLink("");
                    setSelectedImage(null);
                  }}
                >
                  Зберегти
                </button>
                <hr />
              </>
            ) : (
              <>
                <span>{el.item.description}</span>
                {" - "}
                <span>{el.item.link}</span>{" "}
                <button
                  className="btnOk"
                  title="Редагувати"
                  type="button"
                  onClick={() => {
                    setSelectedImage(el.id);
                    setEditDescription(el.item.description);
                    setEditLink(el.item.link);
                  }}
                >
                  Редагувати
                </button>
                <hr />
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
