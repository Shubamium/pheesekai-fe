"use client";
import React from "react";
import Clock from "react-live-clock";
type Props = {};

export default function LiveTime({}: Props) {
  return (
    <p className="liveclock">
      <span>Current Time:{" "}</span>
      <Clock
        blinking={"all"}
        ticking={true}
        format={"MMMM Do YYYY h:mm:ss A"}
        noSsr={true}
      />
    </p>
  );
}
