import Image from "next/image";
import logo from "../../components/Header/logo.svg";
import iconSeta from "../../components/Header/iconSeta.svg";
import iconFone from "../../components/Header/iconFone.svg";

export default function Header() {
    return (
        <header>
            <nav>
                <div>
                    <Image src={logo} alt="Logo do site"/>
                    <ul>
                        <li>Products</li>
                        <li>Solutions</li>
                        <li>Services</li>
                        <li>Configure</li>
                    </ul>
                </div>
                <div>
                    <button><Image src={iconFone} alt="Ícone de fone" /> 555 818 282</button>
                    <button>Request a Quote <Image src={iconSeta} alt="Ícone de Seta" /></button>
                </div>
            </nav>
        </header>
    )
}