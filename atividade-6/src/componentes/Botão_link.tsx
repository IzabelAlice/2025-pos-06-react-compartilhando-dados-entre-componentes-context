import Link from "next/link";

interface BotaoLink {
    children: React.ReactNode;
    href: string;
}

const BotaoLink = ({ children, href }: BotaoLink) => (
    <Link href={href}
        className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition-colors duration-300 border-2 border-red-600 hover:border-red-800"
    >
        {children}
    </Link>
);

export default BotaoLink;