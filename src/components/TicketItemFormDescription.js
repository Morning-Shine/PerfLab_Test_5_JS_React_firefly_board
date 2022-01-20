import React from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import styled from "@emotion/styled";

export default function TicketItemFormDescription({ control, name }) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={""}
      render={({ field }) => (
        <StyledTextField
          label="Description"
          {...field}
          {...control.register(name, {
            maxLength: {
              value: 100,
              message: "Ограничение на ввод 100 символов",
            },
          })}
        />
      )}
    />
    // <Div>
    //   <StyledTextField
    //     // required
    //     id="textFieldDescription"
    //     label="Description"
    //     onChange={debounce(e => setCurrentValue(e.target.value), 500)}
    //     onBlur={() => props.setDescriptionValue(currentValue)}
    //   />
    // </Div>
  );
}

const StyledTextField = styled(TextField)`
  position: absolute;
  top: 183px;
  left: 32px;
  height: 56px;
  width: 704px;
`;

const Div = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
`;
