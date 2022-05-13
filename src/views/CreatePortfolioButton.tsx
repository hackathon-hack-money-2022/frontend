import React from "react";
import { useHistory } from "react-router";
import { AuthenticateWithMetamaskButton } from "../components/AuthenticateWithMetamaskButton";
import { SimpleButton } from "../components/SimpleButton";

export function CreatePortfolioBUtton() {
  const router = useHistory();

  return (
    <AuthenticateWithMetamaskButton>
      <SimpleButton
        onClick={() => {
          router.push("/construction");
        }}
      >
        Create an new portfolio
      </SimpleButton>
    </AuthenticateWithMetamaskButton>
  );
}
