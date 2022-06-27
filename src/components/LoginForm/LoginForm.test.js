import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

import "@testing-library/jest-dom";

test("shows login on first load", async () => {
  render(<LoginForm />);

  const loginEmail = screen.getByTestId("login-email");
  const loginPassword = screen.getByTestId("login-password");
  expect(loginEmail).toBeInTheDocument();
  expect(loginPassword).toBeInTheDocument();
});
