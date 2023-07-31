import React, { useState } from "react";

const Button = () => {
  const [counter, setCounter] = useState(0);

  function myfunc() {
    setCounter(counter + 1);
    console.log(counter);
  }

  return <button onClick={myfunc}>Click me!</button>;
};

export default Button;
