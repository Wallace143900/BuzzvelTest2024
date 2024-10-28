import styles from "./styles.module.scss";
import image from "./image.svg";
import small from "./smallImage.svg";
import Image from "next/image";

export default function PServices() {
    return (
        <section className={styles.section}>
            <div className={styles.divImage} >
                <Image src={image} alt="Imagem" id={styles.big}></Image>
                <Image src={small} alt="Imagem pequena" id={styles.small} />
            </div>
            <div className={styles.container}>
                <div className={styles.top}>
                    <p className="mobileParagraphySmall" id={styles.pYellow}>Services</p>
                    <h2 className="mobileTitle2">Personalized services</h2>
                    <p className="mobileParagraphySmall" id={styles.pSmall}>Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.</p>
                </div>
                <article>
                    <div className={styles.information}>
                        <p className="mobileParagraphyStrong" id={styles.strong}>Et Mauris</p>
                        <p className="mobileParagraphySmall" id={styles.p}>Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.</p>
                    </div>
                    <div className={styles.information}>
                        <p className="mobileParagraphyStrong" id={styles.strong} >Eget Sit</p>
                        <p className="mobileParagraphySmall" id={styles.p}>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </p>
                    </div>
                    <div className={styles.information}>
                        <p className="mobileParagraphyStrong" id={styles.strong} >Imperdiet pellentesque</p>
                        <p className="mobileParagraphySmall" id={styles.p}>Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.</p>
                    </div>
                    <div className={styles.information}>
                        <p className="mobileParagraphyStrong" id={styles.strong} >Non libero</p>
                        <p className="mobileParagraphySmall" id={styles.p}>Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.</p>
                    </div>
                </article>
            </div>
        </section>
    )
}