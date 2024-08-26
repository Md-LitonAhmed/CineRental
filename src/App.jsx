import { useState } from "react";
import "./App.css";
import { ThemeContext, movieContext } from "./context";
import Page from "./Page";

function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <movieContext.Provider value={{ cartData, setCartData }}>
          <Page />
        </movieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
