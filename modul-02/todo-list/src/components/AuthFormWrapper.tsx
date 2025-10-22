import Link from "next/link"

interface AuthFormWrapperProps {
    title: string;
    children: React.ReactNode;
    footerText: string;
    footerLinkText: string;
    footerHref: string
}

export default function AuthFormWrapper({ title, children, footerText, footerLinkText, footerHref }: AuthFormWrapperProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--violet-bg)] px-4">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md border border-[var(--violet-main)]/20">
                <h1 className="text-2xl font-bold mb-4 text-center text-[var(--violet-main)]">{title}</h1>
                {children}
                <p className="text-sm text-center text-gray-600 mt-4">{footerText}</p>
                <Link href={footerHref}  className="text-[var(--violet-main)] font-semibold hover:underline" >{footerLinkText}</Link>
            </div>
        </div>
    )
}
