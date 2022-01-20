import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { Controller } from "react-hook-form";
import styled from "@emotion/styled";


export default function TicketItemFormSelect({ control, name }) {
  const priorityForChoice = ["low", "normal", "high"];
  return (
    <>
      <Controller
        defaultValue={""}
        name={name}
        control={control}
        render={({ field }) => (
          <>
            {/* <StyledInputLabel id="placeholder">
              Select Priority *
            </StyledInputLabel> */}
            <StyledSelect
             // labelId="placeholder"
              required
              {...field}
              {...control.register(name, {
                required: "Выберите приоритет",
              })}
            >
              <MenuItem value={"low"}>low</MenuItem>
              <MenuItem value={"normal"}>normal</MenuItem>
              <MenuItem value={"high"}>high</MenuItem>
            </StyledSelect>
          </>
        )}
      />      
    </>
  );
}

const StyledSelect = styled(Select)`
  position: absolute;
  top: 97px;
  left: 392px;
  height: 56px;
  width: 344px;
`;
const StyledInputLabel = styled(InputLabel)`
  position: absolute;
  top: 113px;
  left: 410px;
  height: 56px;
  width: 344px;
`;