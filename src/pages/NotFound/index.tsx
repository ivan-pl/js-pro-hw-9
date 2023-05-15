import React, { FC } from "react";
import { Link } from "react-router-dom";

const NotFound: FC = () => (
  <>
    <h1>Not Found</h1>
    <Link to="/">Go to main page</Link>
  </>
);

export default NotFound;
