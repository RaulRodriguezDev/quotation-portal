const NavbarList = ({children, className}: {children: React.ReactNode, className?: string}) : React.ReactElement => {
    return (
        <div className={`flex justify-evenly items-center ${className ?? ""}`}>
            {children}
        </div>
    );
}

export default NavbarList;