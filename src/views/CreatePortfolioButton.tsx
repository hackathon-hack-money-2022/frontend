import React from "react";
import { useHistory } from "react-router";
import { AuthenticateWithMetamaskButton } from "../components/AuthenticateWithMetamaskButton";
import { SimpleButton } from "../components/SimpleButton";

export function CreatePortfolioButton() {
  const router = useHistory();

  return (
    <React.Fragment>
      <AuthenticateWithMetamaskButton>
        <SimpleButton
          onClick={() => {
            router.push("/construction");
          }}
        >
          Create an new portfolio
        </SimpleButton>
      </AuthenticateWithMetamaskButton>
    </React.Fragment>
  );
}
