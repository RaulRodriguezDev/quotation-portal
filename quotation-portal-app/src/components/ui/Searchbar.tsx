import { Search } from "lucide-react";

const Searchbar = ({className} : {className?: string}) : React.ReactElement => {
    return (
        <div className={`flex items-center rounded-full overflow-hidden mr-3 px-3 bg-brand-50 ${className ?? ""}`}>
            <input type="text" placeholder="Buscar productos, marcas y más..." className="w-full p-2 bg-transparent border-none outline-none focus:outline-none focus:ring-0" />
            <div className="flex items-center">
                <Search color="gray" size={20} />
            </div>
        </div>
    );
}

export default Searchbar;