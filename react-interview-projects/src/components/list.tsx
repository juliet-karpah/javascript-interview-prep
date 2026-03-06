import { Link } from "react-router-dom";

interface ListItemInterface {
  path: string;
  description: string;
  title: string;
}
export default function ListItem(props: ListItemInterface) {
  return (
    <div className="border flex flex-col w-[50%] p-2">
      <div className="flex justify-between">
        <h3> {props.title} </h3>
        <Link to={{ pathname: props.path }}> View </Link>
      </div>
      <p>
        {props.description}
        The app calleds users from an API and renders them on the page. The
        features are search, sort, and pagination
      </p>
    </div>
  );
}
