import Image from "next/image";
import logo from "../../components/Header/logo.svg";
import { IoHeadsetOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import photo2 from "../../components/Header/photoGirl.svg";


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
                    <button><IoHeadsetOutline /> 555 818 282</button><br/>
                    <button>Request a Quote <FaArrowRight /></button>
                </div>
            </nav>
            <div>
                <h1>Get the Sun to power your Home</h1>
                <p>Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.</p>
                <button>Request a Quote <FaArrowRight /></button>
                <p>“Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”</p>
                <div>
                    <Image src={photo2} alt="Foto de uma menina"/>
                    <div>
                        <p>Rwanda Melflor</p>
                        <small>zerowaste.com</small>
                    </div>
                </div>
            </div>
        </header>
    )
}