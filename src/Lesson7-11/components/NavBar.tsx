import * as React from "react";
import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>

        {/* タイトル（左） */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Pokedex
        </Typography>

        {/* ナビゲーション（右） */}
        <Stack direction="row" spacing={2}>

          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>

          <Button color="inherit" component={RouterLink} to="/list">
            List
          </Button>

          <Button color="inherit" component={RouterLink} to="/favorites">
            Favorites
          </Button>

        </Stack>
      </Toolbar>
    </AppBar>
  );
}