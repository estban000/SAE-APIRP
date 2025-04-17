import React from "react";
import TopNavbar from "./components/Sections/TopNavbar";
import Footer from "./components/Sections/Footer"; // Assurez-vous que Footer est bien importé

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* TopNavbar */}
      <TopNavbar />
      
      {/* Main Content */}
      <main className="flex-grow">{children}</main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
