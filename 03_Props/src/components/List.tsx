interface PeopleProps {
  people: {
    url: string;
    name: string;
    age: number;
    note?: string;
  }[];
  number: number | string;
  title: string;
}

//-------------------------------------------------

// OK
export function List1(props: PeopleProps) {
  return (
    <>
      <h2>{props.title}</h2>
      <h3>The number is {props.number}</h3>
      List
      <ul>
        {props.people.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </>
  );
}

//-------------------------------------------------

//OK
export function List2({ number, people, title }: PeopleProps) {
  return (
    <>
      <h2>{title}</h2>
      <h3>The number is {number}</h3>
      List:
      <ul>
        {people.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </>
  );
}

//-------------------------------------------------

// // ??
// export function List3({
//   number,
//   people,
//   title,
// }: PeopleProps): React.FC<PeopleProps> {
//   return (
//     <>
//       <h2>{title}</h2>
//       <h3>The number is {number}</h3>
//       List:
//       <ul>
//         {people.map((person) => (
//           <li key={person.name}>{person.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// -----------------------------------------------

// OK, but general declaration:  return JSX.Element with props ...
const List4 = (props: PeopleProps) => {
  return (
    <>
      <h2>{props.title}</h2>
      <h3>The number is {props.number}</h3>
      List:
      <ul>
        {props.people.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </>
  );
};
export { List4 };

//-------------------------------------------------

// OK, and more specific: return React.Functional Component with props ...
const List5: React.FC<PeopleProps> = ({ people, number, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <h3>The number is {number}</h3>
      List:
      <ul>
        {people.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </>
  );
};
export { List5 };
