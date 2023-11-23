import React from "react";
import "./button.scss";
type Props = {
  text: string;
	type?:'button' | 'submit' | 'reset';
};

export default function Button({ text,type }: Props) {
  return (
    <button className="button" type={type}>
      <p>{text}</p>
    </button>
  );
}
