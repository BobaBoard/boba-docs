import Admonition from "@theme-original/Admonition";
import Gotcha from "./gotcha.svg";
import OpenQuestion from "./open-question.svg";
import React from "react";
import Todo from "./todo.svg";

const getIcon = (admonitionType: string) => {
  switch (admonitionType) {
    case "TODO":
      return <Todo />;
    case "OPEN QUESTION":
      return <OpenQuestion />;
    case "GOTCHA":
      return <Gotcha />;
    default:
      return null;
  }
};

export default function AdmonitionWrapper(props) {
  return (
    <>
      <Admonition
        {...props}
        icon={getIcon(props.type) || props.icon}
        title={props.title || props.type}
      />
    </>
  );
}
