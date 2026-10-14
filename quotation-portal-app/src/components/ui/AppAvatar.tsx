import { Avatar, AvatarImage, AvatarFallback, AvatarBadge } from "@/components/shadcn/avatar";

const AppAvatar = ({className} : {className?: string}) : React.ReactElement => {
    return (
        <div className={`flex-row items-center gap-2 ${className ?? ""}`}>
            <Avatar size="lg">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
                <AvatarBadge className="bg-green-600 dark:bg-green-800" />
            </Avatar>
            <span className="hidden md:block text-sm text-brand-50">Mi cuenta</span>
        </div>
    );
}

export default AppAvatar;