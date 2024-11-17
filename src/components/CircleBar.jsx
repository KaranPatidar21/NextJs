"use client"
import {CircularProgress} from "@nextui-org/react";

export default function CircleBar() {
  return (
    <CircularProgress
      label="Speed"
      size="lg"
      value={70}
      color="success"
      formatOptions={{ style: "unit", unit: "kilometer" }}
      showValueLabel={true}
    />
  );
}