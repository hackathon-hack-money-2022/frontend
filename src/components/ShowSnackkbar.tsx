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
      <Alert severity="success" sx={{ width: "100%" }}>
        This is a success message!
      </Alert>
    </Snackbar>
  );
}

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}
