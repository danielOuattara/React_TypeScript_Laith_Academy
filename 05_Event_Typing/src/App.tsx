import { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList";
import AddToList2 from "./components/AddToList_2";
import List from "./components/List";
import peopleData from "./people";

export interface PeopleState {
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
      <List
        people={people}
        number={number}
        title="People invited to our Party"
      />
      <AddToList people={people} setPeople={setPeople} />
      <AddToList2 setPeople={setPeople} />
    </div>
  );
}

export default App;
