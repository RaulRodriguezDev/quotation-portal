// Inline SVG so the text inherits the page's Geist font (an <img> SVG cannot).
const Logo = ({ className }: { className?: string }): React.ReactElement => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 48"
            role="img"
            aria-label="Quotation Portal"
            className={className}
        >
            <rect x="2" y="4" width="32" height="40" rx="6" fill="#ffffff" />
            <path
                d="M10 18h16M10 25h16M10 32h9"
                stroke="#285ea4"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
            />
            <circle cx="30" cy="34" r="8" fill="#285ea4" stroke="#ffffff" strokeWidth="3" />
            <path
                d="M27 34l2.2 2.2L33.5 31.5"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            <text x="44" y="22" className="font-sans" fontSize="17" fontWeight="700" fill="#ffffff">
                Quotation
            </text>
            <text x="44" y="40" className="font-sans" fontSize="17" fontWeight="400" fill="#ffffff">
                Portal
            </text>
        </svg>
    );
};

export default Logo;
