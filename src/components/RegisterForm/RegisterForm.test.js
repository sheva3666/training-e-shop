import { render, screen } from "@testing-library/react";
import RegisterForm from "./RegisterForm";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";

test("shows login on first load", async () => {
  render(<RegisterForm />);

  expect(registerFirstName()).toBeInTheDocument();
  expect(registerFirstName()).toBeInTheDocument();
  expect(registerLastName()).toBeInTheDocument();
  expect(registerAddress()).toBeInTheDocument();
  expect(registerEmail()).toBeInTheDocument();
  expect(registerPassword()).toBeInTheDocument();
});

test("onSubmit is called when all fields pass validation", async () => {
  const onSubmit = jest.fn();
  render(<RegisterForm onRegister={onSubmit} />);

  user.type(registerFirstName(), "Ivan");
  user.type(registerLastName(), "Shevchenko");
  user.type(registerAddress(), "Evropeyska");
  user.type(registerEmail(), "sheva3666@gmail.com");
  user.type(registerPassword(), "12345678Ivan");
  clickSubmitButton();
  expect(onSubmit).toHaveBeenCalledWith({
    firstName: "Ivan",
    lastName: "Shevchenko",
    address: "Evropeyska",
    email: "sheva3666@gmail.com",
    password: "12345678Ivan",
  });
});

function registerFirstName() {
  return screen.getByTestId("register-firstName");
}

function registerLastName() {
  return screen.getByTestId("register-lastName");
}

function registerAddress() {
  return screen.getByTestId("register-address");
}

function registerEmail() {
  return screen.getByTestId("register-email");
}

function registerPassword() {
  return screen.getByTestId("register-password");
}

function clickSubmitButton() {
  return user.click(screen.getByTestId("register-btn"));
}
