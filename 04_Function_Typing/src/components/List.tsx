interface PeopleProps {
  people: {
    img: string;
    name: string;
    age: number;
    note?: string;
  }[];
}

// export default function List(props: PeopleProps) {
//   return <div>List</div>;
// }

// -----------------------------------------------

const List: React.FC<PeopleProps> = ({ people }) => {

  const renderList = () => {
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
    <ul>
      {renderList()}
    </ul>
  );
};

export default List;
