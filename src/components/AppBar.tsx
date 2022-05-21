import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

export function OwnAppBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link
              style={{ color: "inherit", textDecoration: "none" }}
              to={"/"}
            >
              Home
            </Link>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
