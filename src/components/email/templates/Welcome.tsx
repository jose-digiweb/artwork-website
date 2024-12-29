import * as React from "react";

interface props {
  firstName: string;
}

export const WelcomeEmail = ({ firstName }: props) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);
