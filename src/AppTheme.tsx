import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  CssBaseline,
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fcff60", 
    },
    secondary: {
      main: "#60ff7a", 
    },
    background: {
      default: "#999999", 
      paper: "#e0ffff", 
    },
    text: {
      primary: "#000000", 
      secondary: "#ff0000",
    },
  },

  shape: {
    borderRadius: 0,
  },
  typography: {
    button: {
      textTransform: "none",
      fontWeight: "bold",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          padding: "10px 24px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: "0 3px 12px black",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

export default function AppTheme() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Card sx={{ maxWidth: 400, m: 2 }}>
        <CardContent>
          <Typography variant="h6">カスタムテーマのサンプル</Typography>
          <TextField label="入力フォーム" margin="normal" fullWidth />
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            fullWidth
          >
            Primary ボタン
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 2 }}
            fullWidth
          >
            Secondary ボタン
          </Button>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}


