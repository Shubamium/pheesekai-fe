import React, { ReactNode } from "react";
import "./button.scss";
type Props = {
  text?: string;
	type?:'button' | 'submit' | 'reset';
	onClick?:(e: React.MouseEvent<HTMLButtonElement>) => void
	selected?: boolean
	children?:ReactNode
};

export default function Button({ text,type, onClick, selected,children }: Props) {
  return (
    <button className={"button"+ ' ' + `${selected ? 'selected' : ''}`} type={type} onClick={onClick}>
			{children ?? <p>{text}</p> }
    </button>
  );
}
