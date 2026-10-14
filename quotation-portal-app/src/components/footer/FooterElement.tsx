import { FooterTypeItem } from "@/types";

const FooterItem = ({ footerProps, className }: { footerProps: FooterTypeItem; className?: string }) => {
    const { icon, text } = footerProps;
    return (
        <div className={`flex flex-col items-center justify-center mx-4 ${className ?? ""}`}>
            {icon}
            <span className="text-white text-sm">{text}</span>
        </div>
    );
};

export default FooterItem;