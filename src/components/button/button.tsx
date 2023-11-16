import React from "react";
import "./button.scss";
type Props = {
  text: string;
};

export default function Button({ text }: Props) {
  return (
    <button className="button">
      <p>{text}</p>
    </button>
  );
}
