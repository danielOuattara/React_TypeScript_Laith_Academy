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
  // const [number, setNumber] = useState(5) as number; // Incorrect
  // const [number, setNumber] = useState(5) as  unknown as number; // Incorrect
  const [number, setNumber] = useState<number | string>(5); // OK

  const [people, setPeople] = useState<PeopleState["people"]>([]);

  people.map((person) => person.age);

  return (
    <div className="App">
      <h1>People invited to our Party</h1>
    </div>
  );
}

export default App;
