import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['500', '600', '700', '800'],
  variable: "--font-poppins",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Bagas Dhitya Taufiqqi | Software Engineer & Web Development Lecturer",
  description: "Portfolio website of Bagas Dhitya Taufiqqi, a software engineer and fullstack web development lecturer specializing in TypeScript, Node.js, PostgreSQL, and automation using Make.com & N8n",
  keywords: ['Bagas Dhitya Taufiqqi', 'Software Engineer', 'Fullstack Developer', 'TypeScript', 'Node.js', 'PostgreSQL', 'Make.com', 'N8n', 'Automation'],
  authors: [{
    name: 'Bagas Dhitya Taufiqqi'
  }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
