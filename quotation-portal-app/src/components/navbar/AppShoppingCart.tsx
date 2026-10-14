import { ShoppingCart } from "lucide-react";

const AppShoppingCart = ({ className }: { className?: string }) : React.ReactElement => {
    return (
        <div className={`flex ${className ?? ""}`}>
            <ShoppingCart color="#eff6ff" size={30}/>
        </div>
    );
}

export default AppShoppingCart;