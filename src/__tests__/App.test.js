import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom"; // Import Jest DOM extension

import App from "../App";

test("newsletter form contains required elements", () => {
  render(<App />);

  // Check if name and email input fields are present
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  // Check if there are associated input elements for the "Interests" labels
  expect(screen.getByLabelText(/music/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/sports/i)).toBeInTheDocument();
  // Check if the subscribe button is present
  expect(screen.getByRole("button", { name: /subscribe/i })).toBeInTheDocument();
});

test("typing in name and email input fields updates their values", () => {
  render(<App />);

  // Simulate typing in the name input field
  userEvent.type(screen.getByLabelText(/name/i), "John Doe");
  // Verify that the value of the name input field is updated
  expect(screen.getByLabelText(/name/i)).toHaveValue("John Doe");

  // Simulate typing in the email input field
  userEvent.type(screen.getByLabelText(/email/i), "john@example.com");
  // Verify that the value of the email input field is updated
  expect(screen.getByLabelText(/email/i)).toHaveValue("john@example.com");
});

test("selecting interests updates the state", () => {
  render(<App />);

  // Simulate clicking on interest checkboxes
  userEvent.click(screen.getByLabelText(/music/i));
  userEvent.click(screen.getByLabelText(/sports/i));
  // Add your own assertion here to check the state if necessary
});

test("submitting the form displays a success message", () => {
  render(<App />);

  // Simulate filling out the form
  userEvent.type(screen.getByLabelText(/name/i), "John Doe");
  userEvent.type(screen.getByLabelText(/email/i), "john@example.com");
  userEvent.click(screen.getByLabelText(/music/i)); // Assuming "music" is one of the interests
  // Simulate submitting the form
  userEvent.click(screen.getByRole("button", { name: /subscribe/i }));

  // Verify that the success message is displayed
  expect(screen.getByText(/thank you for subscribing/i)).toBeInTheDocument();
});
