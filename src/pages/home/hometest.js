import { Link } from "react-router-dom";

export const QaHome = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link to="/tasklist">Tasklist</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/kanbanboard">KanbanBoard</Link>
        </li>
        <li>
          <Link to="/qatracker">QATracker</Link>
        </li>
        {/* <li>
          <Link to="/emailsignin">EmailSignin</Link>
        </li>
        <li>
          <Link to="/customform">CustomForm</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li> */}
        <li>
          <Link to="/signuploginmodule">SignupLoginModule</Link>
        </li>
        <li>
          <Link to="/useraccount">UserAccount</Link>
        </li>
      </ul>
    </div>
  );
};
