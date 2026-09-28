import "./globals.css";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Week 3 Reusable Components",
  description: "Next.js reusable components assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-container">
          <Header />

          <div className="page-layout">
            <Sidebar />

            <main className="main-content">
              {children}
            </main>
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}