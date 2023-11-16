"use client";
import React from "react";
import Clock from "react-live-clock";
type Props = {};

export default function LiveTime({}: Props) {
  return (
    <p className="liveclock">
      Current Time:{" "}
      <Clock blinking={"all"} ticking={true} format={"h:mm:ss A"} />
    </p>
  );
}