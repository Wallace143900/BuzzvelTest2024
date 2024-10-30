"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { comments } from "../../../data/comments";
import styles from "./styles.module.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function MakeCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (isMobile) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % comments.length);
    }
  };

  const handlePrev = () => {
    if (isMobile) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + comments.length) % comments.length);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 2 + comments.length) % comments.length);
    }
  };

  return (
    <>
      <article className={styles.article}>
        <div className={styles.cardsContainer}>
          {isMobile ? (
            <div className={`${styles.card} ${styles.active}`}>
              <p className="mobileParagraphySmall" id={styles.pTop}>
                {comments[currentIndex].comment}
              </p>
              <div className={styles.divUser}>
                <Image src={comments[currentIndex].photo} alt={comments[currentIndex].name} width={50} height={50} />
                <div className={styles.comments}>
                  <p className="mobileParagraphySmall">{comments[currentIndex].name}</p>
                  <small className={styles.p}>{comments[currentIndex].kvh}</small>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className={styles.card}>
                <p className="mobileParagraphySmall" id={styles.pTop}>
                  {comments[currentIndex].comment}
                </p>
                <div className={styles.divUser}>
                  <Image src={comments[currentIndex].photo} alt={comments[currentIndex].name} width={50} height={50} />
                  <div className={styles.comments}>
                    <p className="mobileParagraphySmall">{comments[currentIndex].name}</p>
                    <small className={styles.p}>{comments[currentIndex].kvh}</small>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <p className="mobileParagraphySmall" id={styles.pTop}>
                  {comments[(currentIndex + 1) % comments.length].comment}
                </p>
                <div className={styles.divUser}>
                  <Image
                    src={comments[(currentIndex + 1) % comments.length].photo}
                    alt={comments[(currentIndex + 1) % comments.length].name}
                    width={50}
                    height={50}
                  />
                  <div className={styles.comments}>
                    <p className="mobileParagraphySmall">{comments[(currentIndex + 1) % comments.length].name}</p>
                    <small className={styles.p}>{comments[(currentIndex + 1) % comments.length].kvh}</small>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

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
