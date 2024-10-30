import Image from "next/image";
import yellow from "../../components/PickTheSun/yellowBall.svg";
import purple from "../../components/PickTheSun/purpleBall.svg";
import styles from "./styles.module.scss";
import imageMobile from "../../components/PickTheSun/imagemMobile.svg";

export default function PickTheSun() {
    return (
        <section className={styles.container}>
            <div className={styles.top}>
                <p className={styles.paragraphTop}>No more waste</p>
                <h2 className="mobileTitle2">Pick the Sun</h2>
                <p className="mobileParagraphySmall" id={styles.paragraphyID}>Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.</p>
            </div>
            <div className={styles.ball}>
                <Image src={yellow} alt="Yellow ball" className={styles.yellowBall} />
                <Image src={purple} alt="Purple ball" className={styles.purpleBall} />
            </div>
                <div className={styles.divImage}>
                    {/* <Image src={image} alt="Imagem" className={styles.image} /> */}
                    <Image src={imageMobile} alt="Imagem" className={styles.image} />
                </div>
        </section>
    )
}