import { ArrowDown, Blocks } from "lucide-react";
import AppQuotationsIcon from "../navbar/AppQuotationsIcon";
import AppShoppingCart from "../navbar/AppShoppingCart";
import { NavbarCategoryItem } from "@/types";
import NavbarList from "../navbar/NavbarList";
import NavbarListItem from "../navbar/NavbarListItem";

const mockNavbarCategories: NavbarCategoryItem[] = [
    { text: "Abarrotes", href: "#", target: "_self" },
    { text: "Papa", href: "#", target: "_self" },
    { text: "Otros", href: "#", target: "_self" },
    { text: "Bebidas", href: "#", target: "_self" },
    { text: "Lácteos", href: "#", target: "_self" }

];
const Navbar = () : React.ReactElement => {
    return (
        <nav className="hidden w-full sm:w-5/6 lg:w-2/3 flex-1 sm:grid sm:grid-cols-[1fr_3fr_1fr] lg:grid-cols-[1fr_3fr_1fr] bg-brand-600">
            <div className="flex items-center justify-center gap-1.5">
                <span className="hidden lg:block text-lg text-brand-50">Categorias</span>
                <ArrowDown className="hidden lg:block w-6 h-6 text-brand-50" />
                <Blocks className="lg:hidden w-6 h-6 text-brand-50" />
            </div>
            <NavbarList className="overflow-hidden">
                {mockNavbarCategories.map((category, index) => (
                    <NavbarListItem key={index} navbarItem={category} />
                ))}
            </NavbarList>
            <aside className="flex space-x-4 items-center sm:justify-center md:justify-start">
                <AppQuotationsIcon/>
                <AppShoppingCart/>
            </aside>
        </nav>
    );
}

export default Navbar;