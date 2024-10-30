"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoHeadsetOutline } from "react-icons/io5";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import photo2 from "../../components/Header/photoGirl.svg";
import styles from "./style.module.scss";

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [isClosing, setIsClosing] = useState(false); 
    const toggleModal = () => {
        if (isModalOpen) {
            setIsClosing(true); 
            setTimeout(() => {
                setIsModalOpen(false); 
                setIsClosing(false); 
            }, 300); 
        } else {
            setIsModalOpen(true); 
        }
    };

    return (
        <header className={styles.header}>
            <nav className={styles.navBar}>
                <div className={styles.navLeft}>
                    <div className={styles.divleft}>
                        <h1 className="mobileSoller" id={styles.h1}>soller</h1>
                        <ul>
                            <li>Products</li>
                            <li>Solutions</li>
                            <li>Services</li>
                            <li>Configure</li>
                        </ul>
                    </div>
                    <div className={styles.navRightButton}>
                        <button className={styles.buttonTel}><IoHeadsetOutline /> 555 818 282</button><br />
                        <button className="mobilePurpleButton" id={styles.req}>Request a Quote <FaArrowRight className={styles.icon} /></button>
                    </div>
                </div>

                <div className={styles.menuIcon} onClick={toggleModal}>
                    <FaBars />
                </div>
            </nav>

            {isModalOpen && (
                <div className={`${styles.modal} ${isClosing ? styles.modalClosing : ''}`}>
                    <div className={styles.modalContent}>
                        <button className={styles.closeButton} onClick={toggleModal}>
                            <FaTimes />
                        </button>
                        <ul>
                            <li>Products</li>
                            <li>Solutions</li>
                            <li>Services</li>
                            <li>Configure</li>
                        </ul>
                        <div className={styles.navRightModal}>
                            <button><IoHeadsetOutline /> 555 818 282</button><br />
                            <button className="mobilePurpleButton">Request a Quote <FaArrowRight className={styles.icon} /></button>
                        </div>
                    </div>
                </div>
            )}

            <div className={styles.viverra}>
                <h1 className="mobileTitle1">Get the Sun to power your Home</h1>
                <p className="mobileParagraphy" id={styles.bigP}>Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.</p>
                <button className="mobilePurpleButton">Request a Quote <FaArrowRight /></button>
                <p className="mobileParagraphySmall" id={styles.smallP}>“Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”</p>
                <div className={styles.blocoGirl}>
                    <Image src={photo2} alt="Foto de uma menina" />
                    <div className={styles.dadosGirl}>
                        <p className="mobileParagraphy">Rwanda Melflor</p>
                        <small className="mobileParagraphySmall">zerowaste.com</small>
                    </div>
                </div>
            </div>
        </header>
    );
}
