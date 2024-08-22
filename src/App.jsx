import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";
import MovieList from "./cine/MovieList";
import Footer from "./Footer";
import { movieContext } from "./context";

function App() {
  const [cartData, setCartData] = useState([]);

  return (
    <>
      <movieContext.Provider value={{ cartData, setCartData }}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <MovieList />
          </div>
        </main>
        <Footer />
      </movieContext.Provider>
    </>
  );
}

export default App;
