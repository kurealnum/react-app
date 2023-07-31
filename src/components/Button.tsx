import React, { useState } from "react";

interface ButtonProps {
  children: string;
  onClickButton: () => void;
}

const Button = ({ children, onClickButton }: ButtonProps) => {
  const [counter, setCounter] = useState(0);

  // function myfunc() {
  //   setCounter(counter + 1);
  //   console.log(counter);
  // }

  return <button onClick={() => onClickButton()}> {children} </button>;
};

export default Button;
