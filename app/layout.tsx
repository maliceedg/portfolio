import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/app/ui/nav";
import TransitionLayout from "@/app/components/TransitionLayout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Edgardo Gonzalez",
  description: "QA, Developer and UX/UI Designer",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en" className="md:overflow-hidden overflow-auto">
      <body className={inter.className}>
        <Nav />
        <div>
          <TransitionLayout>{children}</TransitionLayout>
        </div>
      </body>
    </html>
  );
}
