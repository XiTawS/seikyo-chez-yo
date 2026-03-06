import type { Metadata } from "next";
import "./globals.css";
import SessionProvider from "@/components/cms/SessionProvider";
import CMSProvider from "@/components/cms/CMSProvider";
import AdminBar from "@/components/cms/AdminBar";

export const metadata: Metadata = {
  title: "Chez Yo ! — Restaurant convivial à Chatuzange-le-Goubet",
  description: "Cuisine maison & généreuse, ambiance conviviale. Le rendez-vous des bons copains à Chatuzange-le-Goubet.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <SessionProvider>
          <CMSProvider>
            {children}
            <AdminBar />
          </CMSProvider>
        </SessionProvider>
      </body>
    </html>
  );
}