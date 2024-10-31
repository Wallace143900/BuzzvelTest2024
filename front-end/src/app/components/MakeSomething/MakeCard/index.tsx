"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { comments } from "../../../data/comments";
import styles from "./styles.module.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function MakeCard() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [viewSize, setViewSize] = useState("mobile");
  const [animationClass, setAnimationClass] = useState("");

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setViewSize("mobile");
    } else if (window.innerWidth < 1024) {
      setViewSize("tablet");
    } else {
      setViewSize("desktop");
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    const increment = viewSize === "tablet" ? 2 : 1;
    setAnimationClass(styles.slideLeft);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + increment) % comments.length);
      setAnimationClass(""); 
    }, 300); 
  };

  const handlePrev = () => {
    const decrement = viewSize === "tablet" ? 2 : 1;
    setAnimationClass(styles.slideRight);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - decrement + comments.length) % comments.length);
      setAnimationClass(""); 
    }, 300); 
  };

  const renderCards = () => {
    const totalComments = comments.length;

    if (viewSize === "mobile") {
      return (
        <div className={`${styles.card} ${animationClass}`}>
          <p className="mobileParagraphySmall" id={styles.pTop}>
            {comments[currentIndex].comment}
          </p>
          <div className={styles.divUser}>
            <Image
              src={comments[currentIndex].photo}
              alt={comments[currentIndex].name}
              width={50}
              height={50}
            />
            <div className={styles.comments}>
              <p className="mobileParagraphySmall">{comments[currentIndex].name}</p>
              <small className={styles.p}>{comments[currentIndex].kvh}</small>
            </div>
          </div>
        </div>
      );
    } else if (viewSize === "tablet") {
      return (
        <>
          {[(currentIndex + 0) % totalComments, (currentIndex + 1) % totalComments].map((index) => (
            <div key={index} className={`${styles.card} ${animationClass}`}>
              <p className="mobileParagraphySmall" id={styles.pTop}>
                {comments[index].comment}
              </p>
              <div className={styles.divUser}>
                <Image
                  src={comments[index].photo}
                  alt={comments[index].name}
                  width={50}
                  height={50}
                />
                <div className={styles.comments}>
                  <p className="mobileParagraphySmall">{comments[index].name}</p>
                  <small className={styles.p}>{comments[index].kvh}</small>
                </div>
              </div>
            </div>
          ))}
        </>
      );
    } else {
      return comments.map((comment, index) => (
        <div
          key={index}
          className={`${styles.card} ${index === currentIndex ? `${styles.active} ${animationClass}` : ""}`}
        >
          <p className="mobileParagraphySmall" id={styles.pTop}>
            {comment.comment}
          </p>
          <div className={styles.divUser}>
            <Image src={comment.photo} alt={comment.name} width={50} height={50} />
            <div className={styles.comments}>
              <p className="mobileParagraphySmall">{comment.name}</p>
              <small className={styles.p}>{comment.kvh}</small>
            </div>
          </div>
        </div>
      ));
    }
  };

  return (
    <article className={styles.article}>
      <div className={`${styles.cardsContainer}`}>
        {renderCards()}
      </div>

      {viewSize && (
        <div className={styles.divButton}>
          <button onClick={handlePrev}>
            <FaArrowLeft />
          </button>
          <button onClick={handleNext}>
            <FaArrowRight />
          </button>
        </div>
      )}
    </article>
  );
}
