import { useState } from "react";
import Child from "./child";
import "./styles.css";
export default function App() {
  const [name, setUserName] = useState("parent");
  const setCallBack = (nameObj) => {
    setUserName(nameObj);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2>{name}</h2>
      <Child callBack={setCallBack} />
    </div>
  );
}
