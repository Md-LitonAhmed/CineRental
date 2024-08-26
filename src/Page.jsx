import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./context";
import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";
import MovieList from "./cine/MovieList";
import Footer from "./Footer";
export default function Page() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={` h-full w-full ${darkMode ? "dark" : ""}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
