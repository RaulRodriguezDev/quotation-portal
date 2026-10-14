import { FooterTypeItem } from "@/types";
import FooterElement from "./FooterElement";
import { Blocks, House, Menu, ShoppingCart } from "lucide-react";

const footerElements: FooterTypeItem[] = [
    {
        text:"Inicio",
        icon: <House color="#eff6ff" />
    },
    {
        text:"Categorias",
        icon: <Blocks color="#eff6ff" />
    },
    {
        text:"Carrito",
        icon: <ShoppingCart color="#eff6ff" />
    },
    {
        text:"Más",
        icon: <Menu color="#eff6ff" />
    }
]
const Footer = ({className} : {className?: string}) : React.ReactElement => {
    return (
        <footer className={`w-full h-20 sm:h-20 bg-brand-600 flex flex-row ${className ?? ""}`}>
            {footerElements.map((element, index) => (
                <FooterElement key={index} footerProps={element} className=" flex-1" />
            ))}
        </footer>
    );
}

export default Footer;