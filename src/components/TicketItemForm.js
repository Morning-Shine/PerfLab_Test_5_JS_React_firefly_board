import React from "react";
import FormHelperText from "@mui/material/FormHelperText";
import { Navigate } from "react-router-dom";
import { Guid } from "js-guid";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { writeNewTicket } from "../firebaseApp";
import Notify, { notifySuccess, notifyError, notifyLoading } from "./Notify";
import TicketItemFormTitle from "./TicketItemFormTitle";
import TicketItemFormSelect from "./TicketItemFormSelect";
import TicketItemFormDescription from "./TicketItemFormDescription";
import TicketItemFormBtn1 from "./TicketItemFormBtn1";
import TicketItemFormBtn2 from "./TicketItemFormBtn2";
import TicketItemFormBtn3 from "./TicketItemFormBtn3";
import { drawerWidth } from "./SideBar";
import toast from "react-hot-toast";
import styled from "@emotion/styled";

export default function TicketItemForm({ renderCondition }) {
  console.log("renderCondition", renderCondition);

  if (!renderCondition) return <Navigate to={"/tickets"} />;

  const userData = useSelector(state => state.user);
  // console.log(userData);
  const {
    // register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const taskId = Guid.newGuid().StringGuid.replaceAll("-", "");

  const onSubmit = async data => {
    const loadingToast = notifyLoading();
    try {
      // throw new Error();
      await writeNewTicket(
        userData.id,
        userData.name,
        userData.avatar,
        data.ticketTitle,
        data.selectPriority,
        data.description,
        taskId,
        new Date().getTime(),
        true
      );
    } catch {//TODO жду ответ от Александра
      toast.dismiss(loadingToast);
      notifyError();
      return
    }
    toast.dismiss(loadingToast);
    notifySuccess();
    reset();
  };

  return (
    <DivCont>
      <Notify />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          {renderCondition == "new" ? "New task" : `Task №${renderCondition}`}
        </Label>

        <TicketItemFormTitle
          name="ticketTitle"
          aria-describedby="helperTitle"
          control={control}
        />
        <FormHelperText1 id="helperTitle">
          {errors.ticketTitle?.message}
        </FormHelperText1>

        <TicketItemFormSelect
          name="selectPriority"
          aria-describedby="helperSelect"
          control={control}
        />
        <FormHelperText2 id="helperSelect">
          {errors.selectPriority?.message}
        </FormHelperText2>

        <TicketItemFormDescription name="description" control={control} />
        <FormHelperText3 id="helperSelect">
          {errors.description?.message}
        </FormHelperText3>
        <TicketItemFormBtn1 type="submit" isValid={isValid} />
        <TicketItemFormBtn2 renderCondition={renderCondition} />
        <TicketItemFormBtn3 renderCondition={renderCondition} />
      </Form>
    </DivCont>
  );
}

const DivCont = styled.div`
  position: absolute;
  width: 1122px;
  top: 128px;
  height: 372px;
  margin-left: 30px;
`;

const Form = styled.form`
  border: 1px solid #dfe0eb;
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Label = styled.label`
  position: absolute;
  top: 32px;
  left: 32px;
  font-family: Mulish;
  font-weight: bold;
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 0.4px;
`;

const FormHelperText1 = styled(FormHelperText)`
  color: red;
  position: absolute;
  top: 153px;
  left: 34px;
`;
const FormHelperText2 = styled(FormHelperText)`
  color: red;
  position: absolute;
  top: 153px;
  left: 394px;
`;
const FormHelperText3 = styled(FormHelperText)`
  color: red;
  position: absolute;
  top: 240px;
  left: 34px;
`;
