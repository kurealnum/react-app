import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => console.log(item);

  const [status, setStatus] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {status && <Alert onClose={() => setStatus(false)}>My Alert</Alert>}
      <Button onClickButton={() => setStatus(true)}>Click me!</Button>
    </div>
  );
}

export default App;
