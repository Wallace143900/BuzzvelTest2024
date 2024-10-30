import { FaArrowRight } from "react-icons/fa6";
import styles from "./styles.module.scss";
import Image from "next/image";
import computer from "./computer.svg";

export default function AllThePower() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <p className="mobileParagraphyYellow" id={styles.pYellow}>Get the Sun to power your home</p>
                    <h2 className="mobileTitle2">All the power that you need for your house is now available</h2>
                </div>
                <div className={styles.bottom}>
                    <button className="mobileYellowButton">Request a Quote <FaArrowRight /></button>
                    <p className="mobileParagraphySmall" id={styles.pBottom}>Egestas fringilla aliquam leo</p>
                </div>
            </div>
            <Image src={computer} alt="Computer" id={styles.image} height="200" />
        </section>
    )
}