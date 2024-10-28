import Image from "next/image";
import logo from "./logo.svg";
import styles from "./styles.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.divLogo}>
                    <Image src={logo} alt="Logo" id={styles.image}/>
                    <h2 className="mobileTitle2">Soller</h2>
                </div>
                <div className={styles.p}>
                <p className="mobileParagraphySmall">&copy; Wallace Menezes - All rights reserved.</p>
                </div>
            </div>
            <ul>
                <li className="mobileParagraphySmall">Terms</li>
                <li className="mobileParagraphySmall">Privacy</li>
                <li className="mobileParagraphySmall">Support</li>
            </ul>
        </footer>
    )
}