import { useState } from "react";
import "./App.css";
import { List1, List2, /* List3, */ List4, List5 } from "./components/List";

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
      <hr />
      <List1 people={people} number={number} title="React and TypeScript" />
      <hr />
      <List2 people={people} number={number} title="React and TypeScript" />
      {/* <List3 people={people} number={number} title="React and TypeScript" /> */}
      <hr />
      <List4 people={people} number={number} title="React and TypeScript" />
      <hr />
      <List5 people={people} number={number} title="React and TypeScript" />
      <hr />
    </div>
  );
}

export default App;
