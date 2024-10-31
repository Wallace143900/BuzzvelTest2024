import Image from "next/image";
import imageMobile from "../../components/PickTheSun/imagemMobile.svg";
import styles from "./styles.module.scss";

export default function PickTheSun() {
    return (
        <section className={styles.container} id="products">
            <div className={styles.top}>
                <p className={styles.paragraphTop}>No more waste</p>
                <h2 className="mobileTitle2">Pick the Sun</h2>
                <p className="mobileParagraphySmall" id={styles.paragraphyID}>
                    Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
                </p>
            </div>
            <div className={styles.divImage}>
                <Image src={imageMobile} alt="Imagem principal" className={styles.image} />
            </div>
        </section>
    );
}
