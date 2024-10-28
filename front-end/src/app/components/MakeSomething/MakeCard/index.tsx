"use client";

import { useState } from "react";
import Image from "next/image";
import { comments } from "../../../data/comments";
import styles from "./styles.module.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function MakeCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(""); 

  const handleNext = () => {
    setDirection("right"); 
    setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
  };

  const handlePrev = () => {
    setDirection("left"); 
    setCurrentIndex((prevIndex) => (prevIndex - 1 + comments.length) % comments.length);
  };

  return (
    <>
      <article className={styles.article}>
        {comments.map((comment, index) => (
          <div
            key={comment.id}
            className={`${styles.card} ${
              index === currentIndex
                ? styles.active
                : index > currentIndex
                ? styles.slideRight
                : styles.slideLeft
            }`}
          >
            <p className="mobileParagraphySmall" id={styles.pTop}>{comment.comment}</p>
            <div className={styles.divUser}>
              <Image src={comment.photo} alt={comment.name} width={50} height={50} />
              <div className={styles.comments}>
                <p className="mobileParagraphySmall">{comment.name}</p>
                <small className={styles.p}>{comment.kvh}</small>
              </div>
            </div>
          </div>
        ))}

        <div className={styles.divButton}>
          <button onClick={handlePrev}>
            <FaArrowLeft />
          </button>
          <button onClick={handleNext}>
            <FaArrowRight />
          </button>
        </div>
      </article>
    </>
  );
}
