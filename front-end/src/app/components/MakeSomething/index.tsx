import { FaArrowRight } from "react-icons/fa6";
import styles from "./styles.module.scss";
import MakeCard from "./MakeCard";

export default function MakeSomething() {
    return (
        <section className={styles.section}>
            <div className={styles.containerTop}>
                <div className={styles.top}>
                    <p className="mobileParagraphyYellow" id={styles.pYellow}>Join other Sun harvesters</p>
                    <h2 className="mobileTitle2">Make something awesome</h2>
                    <p className="mobileParagraphySmall" id={styles.pSmall} >Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.</p>
                </div>
                <div className={styles.divButton}>
                <button className="mobileYellowButton">Request a Quote <FaArrowRight /></button>
                </div>
            </div>
            <MakeCard />
        </section>
    )
}