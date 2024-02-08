/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Select, chakra } from "@chakra-ui/react";

function SelectOption({
  options,
}: {
  options: { label: string; name: string }[];
}) {
  return (
    <Select>
      {options?.map((itemSelect, index) => (
        <chakra.option key={index} value={itemSelect.name}>
          {itemSelect.label}
        </chakra.option>
      ))}
    </Select>
  );
}

export default SelectOption;
