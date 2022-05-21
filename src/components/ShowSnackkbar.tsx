import { Alert, Snackbar } from "@mui/material";

export function ShowSnackbar(props: Props) {
  return (
    <Snackbar
      open={props.isOpen}
      autoHideDuration={6000}
      onClose={props.handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <Alert
        onClick={props.handleClick}
        severity={props.type}
        sx={{ width: "100%" }}
      >
        {props.message}
      </Alert>
    </Snackbar>
  );
}

interface Props {
  message: string;
  isOpen: boolean;
  type: "success" | "error";
  handleClose: () => void;
  handleClick: () => void;
}
