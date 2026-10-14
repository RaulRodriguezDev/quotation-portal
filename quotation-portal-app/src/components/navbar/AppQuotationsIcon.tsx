import { ShoppingBag } from "lucide-react";

const AppQuotationsIcon = ({ className }: { className?: string }) : React.ReactElement => {
    return (
        <div className={`brand ${className ?? ""}`}>
            <p className="text-brand-50 lg:block hidden">Mis cotizaciones</p>
            <div className="block lg:hidden">
                <ShoppingBag className="text-brand-50 w-6 h-6" size={30}/>
            </div>
        </div>
    );
}

export default AppQuotationsIcon;