import { useState } from "react";
import "./App.css";
import List from "./components/List";
import peopleData from "./people";

interface PeopleState {
  people: {
    img: string;
    name: string;
    age: number;
    note?: string;
  }[];
  number: number | string;
  title: string;
}

function App() {
  const [number, setNumber] = useState<number | string>(5);
  const [people, setPeople] = useState<PeopleState["people"]>(peopleData);

  return (
    <div className="App">
      <List people={people} title="People I Invited to my party" />
    </div>
  );
}

export default App;
