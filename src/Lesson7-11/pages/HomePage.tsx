import { Link as RouterLink } from "react-router-dom";
import { Button } from "@mui/material";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>

      <Button
        variant="contained"
        component={RouterLink}
        to="/list"
      >
        ポケモン一覧へ
      </Button>
    </div>
  );
}