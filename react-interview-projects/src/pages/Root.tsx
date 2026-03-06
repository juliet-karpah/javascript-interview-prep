import { Outlet } from "react-router-dom";
import ListItem from "../components/list";

export default function Root() {
  return (
    <div>
      <h2> Welcome to the interview Prep Page </h2>
      <p>
        {" "}
        The page serves as the entry point to all the components I will build in
        preparation for frontend interviews{" "}
      </p>
      <div className="flex flex-col gap-4 mt-8 items-center">
        <ListItem
          path="/wordle-game"
          description="The app calleds users from an API and renders them on the page. The
            features are search, sort, and pagination"
          title="Wordle Game"
        />

        <ListItem
          path="/employee-list"
          title="Employees"
          description="The app calleds users from an API and renders them on the page. The
            features are search, sort, and pagination"
        />
      </div>
      <Outlet />
    </div>
  );
}
