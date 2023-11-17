import React from "react";
import "./sectionTitle.scss";

type SectionTitleProps = {
  title: string;
  description?: string;
};

export default function SectionTitle({
  title,
  description,
}: SectionTitleProps) {
  return (
    <>
      <div className="section-title">
        <h2> - {title} -</h2>
      </div>
      <div className="section-description">{description}</div>
    </>
  );
}
