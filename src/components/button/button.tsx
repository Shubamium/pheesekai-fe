import React from "react";
import "./button.scss";
type Props = {
  text: string;
	type?:'button' | 'submit' | 'reset';
	onClick?:(e: React.MouseEvent<HTMLButtonElement>) => void
	selected?: boolean
};

export default function Button({ text,type, onClick, selected }: Props) {
  return (
    <button className={"button"+ ' ' + `${selected ? 'selected' : ''}`} type={type} onClick={onClick}>
      <p>{text}</p>
    </button>
  );
}
