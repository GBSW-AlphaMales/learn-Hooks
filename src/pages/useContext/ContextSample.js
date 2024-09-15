import React, { createContext, useContext } from "react";

const ThemeContext = createContext("#212426"); // useContext를 사용하면 훨씬 더 수월한 Context를 사용할 수 있다.
const ContextSample = () => {
  const theme = useContext(ThemeContext);
  const style = {
    width: "100%",
    height: "100vh",
    background: theme,
  };
  return <div style={style}></div>;
};
export default ContextSample;
