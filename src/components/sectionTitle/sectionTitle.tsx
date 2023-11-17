import React from "react";
import "./sectionTitle.scss";

type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="section-title">
      <h2> - {title} -</h2>
    </div>
  );
}
