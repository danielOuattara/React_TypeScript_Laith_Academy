import { PeopleState as PeopleProps } from "../App";

// export default function List(props: PeopleProps) {
//   return <div>List</div>;
// }

// TODO: complete this part here with the below example

// -----------------------------------------------

const List: React.FC<PeopleProps> = ({ people }) => {
  const renderList = () => {
    return people.map((person) => (
      <li key={person.name} className="List">
        <div className="List-header">
          <img className="List-img" src={person.img} alt={person.name} />
          <h2>{person.name}</h2>
        </div>
        <p>{person.age} y.o</p>
        <p className="List-note">{person.note}</p>
      </li>
    ));
  };

  return <ul>{renderList()}</ul>;
};

export default List;
