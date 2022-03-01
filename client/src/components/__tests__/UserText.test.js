import React from "react";
import { RecoilRoot} from 'recoil'
import { render, cleanup, fireEvent } from "@testing-library/react";
import UserText from "../UserText";

// import UserText from 'components/UserText'

afterEach(cleanup);

describe("UserText", () => {
  const data =[{
    text: "Hello",
    time: "12:30",
    user_id: 1
  }]

  it("validates that post is not blank", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <RecoilRoot><UserText onClick={onSave} /></RecoilRoot> 
    );

    fireEvent.click(getByText("Post"));

    expect(getByText(/You can't leave Post Blank/i)).toBeInTheDocument();
  });

  // it("can successfully save after trying to submit an empty student name", () => {
  //   const onSave = jest.fn();
  //   const { getByText, getByPlaceholderText, queryByText } = render(
  //     <Form interviewers={interviewers} interviewer={interviewers[0]} onSave={onSave} />
  //   );

  //   fireEvent.click(getByText("Save"));

  //   expect(getByText(/student name cannot be blank/i)).toBeInTheDocument();
  //   expect(onSave).not.toHaveBeenCalled();

  //   fireEvent.change(getByPlaceholderText("Enter Student Name"), {
  //     target: { value: "Lydia Miller-Jones" }
  //   });

  //   fireEvent.click(getByText("Save"));

  //   expect(queryByText(/student name cannot be blank/i)).toBeNull();

  //   expect(onSave).toHaveBeenCalledTimes(1);
  //   expect(onSave).toHaveBeenCalledWith("Lydia Miller-Jones", interviewers[0]);
  // });

  // it("calls onCancel and resets the input field", () => {
  //   const onCancel = jest.fn();
  //   const { getByText, getByPlaceholderText, queryByText } = render(
  //     <Form
  //       interviewers={interviewers}
  //       name="Lydia Mill-Jones"
  //       onSave={jest.fn()}
  //       onCancel={onCancel}
  //     />
  //   );

  //   fireEvent.click(getByText("Save"));

  //   fireEvent.change(getByPlaceholderText("Enter Student Name"), {
  //     target: { value: "Lydia Miller-Jones" }
  //   });

  //   fireEvent.click(getByText("Cancel"));

  //   expect(queryByText(/student name cannot be blank/i)).toBeNull();

  //   expect(getByPlaceholderText("Enter Student Name")).toHaveValue("");

  //   expect(onCancel).toHaveBeenCalledTimes(1);
  // });
});