import { Typography } from "@mui/material";
import React, { useState } from "react";
import { getMetamaskAccounts } from "../utils/getMetamaskAccounts";
import { hasMetamask } from "../utils/hasMetamask";
import { SimpleButton } from "./SimpleButton";

export function AuthenticateWithMetamaskButton(props: Props) {
  const [isAuthenticated, setAuth] = useState(false);
  const hasMetamaskInstalled = hasMetamask();
  return (
    <React.Fragment>
      {isAuthenticated ? (
        <React.Fragment>{props.children}</React.Fragment>
      ) : (
        <React.Fragment>
          <SimpleButton
            disabled={!hasMetamaskInstalled}
            onClick={async () => {
              const accounts = await getMetamaskAccounts();
              if (accounts.length) {
                setAuth(true);
              }
            }}
          >
            Authenticate with metamask
          </SimpleButton>

          <Typography>
            {!hasMetamaskInstalled
              ? `We use Metamask in the frontend, please install it, or use another frontend.`
              : null}
          </Typography>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

interface Props {
  children: JSX.Element;
}
