import Image from "next/image";

type AppSvgProps = {
    path: string;
    alt?: string;
    className?: string;
    height?: number;
    width?: number;
};

const AppSvg = ({ path, alt = "", className, width = 240, height = 240 }: AppSvgProps): React.ReactElement => {
    return (
        <Image src={path} alt={alt} width={width} height={height} className={className} />
    );
}

export default AppSvg;