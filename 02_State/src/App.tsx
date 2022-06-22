import { useState } from "react";
import "./App.css";

interface PeopleState {
  people: {
    url: string;
    name: string;
    age: number;
    note?: string;
  }[];
}

function App() {
  const [number, setNumber] = useState<number | string>(5);
  const [people, setPeople] = useState<PeopleState["people"]>([]);

  return (
    <div className="App">
      <h1>People invited to our Party</h1>
    </div>
  );
}

export default App;
