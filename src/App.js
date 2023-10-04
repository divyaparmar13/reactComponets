import "./styles.css";
import React from "react";
import CounterHeader from "../src/commonComponents/counterHeader";
import Button from "../src/commonComponents/button";

export default function App() {
  const [count, setCount] = React.useState(2);
  const [message, setMessage] = React.useState("Divya");

  const onClickHandler = (key) => {
    if (key === "add") {
      setCount((prev) => prev + 1);
    } else {
      setCount((prev) => prev - 1);
    }
  };

  const onSendMessage = () => {
    setMessage("Message Sent");
  };

  return (
    <div className="App">
      <CounterHeader text="Counter" className="bg-red" />
      <h1>{count}</h1>
      <div className="flex">
        <Button
          onClickHandler={() => onClickHandler("add")}
          buttonText="Increase"
        />
        <Button
          onClickHandler={() => onClickHandler("sub")}
          buttonText="Decrease"
        />
      </div>
      <CounterHeader text="Divya" className="bg-blue" />
      <h2>{message}</h2>
      <Button
        buttonText="Send message"
        className="outline"
        onClickHandler={onSendMessage}
      />
    </div>
  );
}
