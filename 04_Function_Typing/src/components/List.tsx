interface PeopleProps {
  people: {
    img: string;
    name: string;
    age: number;
    note?: string;
  }[];
  title: string;
}

// export default function List(props: PeopleProps) {
//   return <div>List</div>;
// }

// -----------------------------------------------

const List: React.FC<PeopleProps> = ({ people, title }) => {
  //----------------
  // OK
  // function renderList(): JSX.Element[] {
  //   return people.map((person) => (
  //     <li className="List">
  //       <div className="List-header">
  //         <img className="List-img" src={person.img} alt={person.name} />
  //         <h2>{person.name}</h2>
  //       </div>
  //       <p>{person.age} y.o</p>
  //       <p className="List-note">{person.note}</p>
  //     </li>
  //   ));
  // }
  //----------------
  // OK
  const renderList = (): JSX.Element[] => {
    return people.map((person) => (
      <li className="List">
        <div className="List-header">
          <img className="List-img" src={person.img} alt={person.name} />
          <h2>{person.name}</h2>
        </div>
        <p>{person.age} y.o</p>
        <p className="List-note">{person.note}</p>
      </li>
    ));
  };

  return (
    <>
      <h1>{title}</h1>
      <ul>{renderList()}</ul>;
    </>
  );
};

export default List;
