import styles from "./styles.module.scss";
import image from "./image.svg";
import ball from "./ball.svg";
import Image from "next/image";

export default function Powerful() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <p className="mobileParagraphySmall" id={styles.pYellow}>System features</p>
                <h2 className="mobileTitle2">Powerful features</h2>
                <p className="mobileParagraphySmall" id={styles.pSmall}>Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.</p>
                <article>
                    <div className={styles.information}>
                        <p className="mobileParagraphyStrong" id={styles.pBig}>Erati sit</p>
                        <p className="mobileParagraphySmall" id={styles.pSmall}>Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis.</p>
                    </div>
                    <div className={styles.information}>
                        <p className="mobileParagraphyStrong" id={styles.pBig}>Ullamcorper arcu</p>
                        <p className="mobileParagraphySmall" id={styles.pSmall}>Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum.</p>
                    </div>
                    <div className={styles.information}>
                        <p className="mobileParagraphyStrong" id={styles.pBig}>Et pellentesque</p>
                        <p className="mobileParagraphySmall" id={styles.pSmall} >Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate.</p>
                    </div>
                    <div className={styles.information}>
                        <p className="mobileParagraphyStrong" id={styles.pBig}>Amet egestas</p>
                        <p className="mobileParagraphySmall" id={styles.pSmall}>Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis. </p>
                    </div>
                </article>
            </div>
            <div className={styles.divImage}>
                <Image src={image} alt="Imagem" id={styles.big} height="491"/>
                <Image src={ball} alt="Bola" id={styles.small}/>
            </div>
        </section>
    )
}