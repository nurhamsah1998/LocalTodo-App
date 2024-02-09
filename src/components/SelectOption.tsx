/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Select, chakra } from "@chakra-ui/react";
import { Typography } from "./Typography";

function SelectOption({
  options,
  placeholder,
}: {
  options: { label: string; name: string }[];
  placeholder: string;
}) {
  return (
    <Select>
      <chakra.option hidden disabled selected value="">
        <Typography>{placeholder}</Typography>
      </chakra.option>
      {options?.map((itemSelect, index) => (
        <chakra.option key={index} value={itemSelect.name}>
          {itemSelect.label}
        </chakra.option>
      ))}
    </Select>
  );
}

export default SelectOption;
