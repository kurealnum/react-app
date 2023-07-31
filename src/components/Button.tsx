import React, { useState } from "react";

interface ButtonProps {
  children: string;
}

const Button = ({ children }: ButtonProps) => {
  const [counter, setCounter] = useState(0);

  function myfunc() {
    setCounter(counter + 1);
    console.log(counter);
  }

  return <button onClick={myfunc}> {children} </button>;
};

export default Button;
