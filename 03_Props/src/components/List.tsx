interface PeopleProps {
  people: {
    url: string;
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
  return <div>I am a list</div>;
};

 export default List;
