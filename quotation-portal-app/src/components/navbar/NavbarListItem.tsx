import { NavbarCategoryItem } from "@/types";

const NavbarListItem = ({ navbarItem }: { navbarItem: NavbarCategoryItem }): React.ReactElement => {
    return (
        <div className="text-brand-50 sm:text-sm lg:text-lg">
            {navbarItem.text}
        </div>
    );
};

export default NavbarListItem;