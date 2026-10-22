import { Suspense } from "react";
import Logo from "@/components/ui/Logo";
import Searchbar from "@/components/ui/Searchbar";
import AppAvatar from "./AppAvatar";

const AvatarPlaceholder = ({className} : {className?: string}) : React.ReactElement => (
    <div className={className}>
        <div className="size-10 rounded-full bg-gray-300" />
    </div>
);

const Header = () : React.ReactElement => {
    return (
        <header className="w-full sm:w-5/6 lg:w-2/3 flex-1 grid grid-cols-[auto_1fr] sm:grid-cols-[1fr_3fr_1fr] gap-2 items-center bg-brand-600">
            <Suspense fallback={<AvatarPlaceholder className="flex sm:hidden ml-1" />}>
                <AppAvatar className="flex sm:hidden ml-1"/>
            </Suspense>
            <Logo className="hidden sm:flex sm:justify-center w-auto h-10 lg:h-15" />
            <Searchbar className="flex-1 sm:flex-3" />
            <Suspense fallback={<AvatarPlaceholder className="hidden sm:flex sm:justify-center md:justify-start" />}>
                <AppAvatar className="hidden sm:flex sm:justify-center md:justify-start" />
            </Suspense>
        </header>
    );
}

export default Header;
