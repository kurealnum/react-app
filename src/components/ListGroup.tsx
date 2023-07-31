import { Fragment, MouseEvent, useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: ListGroupProps) {
  const getMesssage = () => {
    return items.length === 0 && <p>No items found!</p>;
  };

  //event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {getMesssage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
