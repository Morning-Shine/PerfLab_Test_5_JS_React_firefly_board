import React from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import styled from "@emotion/styled";

export default function TicketItemFormTitle({ control, name }) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={""}
      render={({ field }) => (
        <StyledTextField
          required
          label="Ticket Title"
          {...field}
          {...control.register(name, {
            required: "Введите название",
            maxLength: {
              value: 50,
              message: "Ограничение на ввод 50 символов",
            },
            minLength: {
              value: 4,
              message: "Не менее 5 символов",
            },
          })}
        />
      )}
    />
  );
}

const StyledTextField = styled(TextField)`
  position: absolute;
  top: 97px;
  left: 32px;
  height: 56px;
  width: 344px;
`;